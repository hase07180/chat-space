DB README


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
<<<<<<< Updated upstream
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups
=======
- has_many :messages, through: users_groups
- has_many :groups, through: :users_groups
>>>>>>> Stashed changes

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
<<<<<<< Updated upstream
- has_many :messages,
- has_many :users, through: :users_groups
- has_many :users_groups
=======
- has_many :messages, through: :users_groups
- has_many :users, through: :users_groups
>>>>>>> Stashed changes

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|
|image|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル

Column|Type|Options|
|------|----|-------|
|groups_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
