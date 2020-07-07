$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message-area__box"　data-message-id=${message.id}>
          <div class="message-area__box__user-info">
            <div class="message-area__box__user-info__name">
              ${message.user_name}
            </div>
            <div class="message-area__box__user-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message-area__box__user-message">
            <p class="message-area__box__user-message__content">
              ${message.message}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message-area__box"　data-message-id=${message.id}>
        <div class="message-area__box__user-info">
          <div class="message-area__box__user-info__name">
            ${message.user_name}
          </div>
          <div class="message-area__box__user-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message-area__box__user-message">
          <p class="message-area__box__user-message__content">
            ${message.message}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.footer-form').on('submit', function(e) {
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.message-area').append(html);
      $('form')[0].reset();
      $('.message-area').animate({ scrollTop: $('.message-area')[0].scrollHeight});
      $('.submit-buttun').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
      $('.submit-buttun').prop('disabled', false);
    });
  });
});