== README

This database has 4 tables below.

**users table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|name|string|Unique, Index, Not-Null|
|email|string|Unique, Index, Not-Null|
|password|string|Not-Null|

has_many :messages  
has_many :group_users  
has_many :groups, through: :group_users


**groups table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|name|string|Not-Null|

has_many :messages  
has_many :group_users  
has_many :users, through: :group_users


**messages table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|body|text|-|
|image|string|-|
|user_id|references|Foreign_Key, Not-Null|
|group_id|references|Foreign_Key, Not-Null|

belongs_to :user  
belongs_to :group


**group_users table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|user_id|references|Foreign_Key, Not-Null|
|group_id|references|Foreign_Key, Not-Null|

belongs_to :user  
belongs_to :group



