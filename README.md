## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|user.id|integer|null: false, foreign_key: true|
|message.id|integer|nul: false, foreign_key: true|

### Association
- has_many :messages
- has_many :users, through: :users_groups

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|text|null: false|
|user.id|integer|null: false, foreign_key: true|
|group.id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## users_groupsテーブル

Column|Type|Options|
|------|----|-------|
|groups.id|integer|null: false, foreign_key: true|
|user.id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group