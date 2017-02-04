== README

This database has 4 tables below.

**users table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|name|string|Index, Unique|
|email|string|Unique|
|password|string|Not-Null|

has_many :messages  
has_many :user_groups  
has_many :groups, through: :user_groups


**groups table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|name|string|Not-Null|

has_many :messages  
has_many :user_groups  
has_many :users, through: :user_groups


**messages table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|body|text|-|
|image|string|-|
|user_id|references|Foreign_Key|
|group_id|references|Foreign_Key|

belongs_to :user  
belongs_to :group


**user_groups table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|user_id|references|Foreign_Key|
|group_id|references|Foreign_Key|

belongs_to :user  
belongs_to :group



