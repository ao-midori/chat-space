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
has_many :chatgroups, through: :user_chatgroups


**chatgroups table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|name|string|Not-Null|

has_many :messages
has_many :users, through: :user_chatgroups


**messages table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|body|text|-|
|image|string|-|
|user_id|references|Foreign_Key|
|chatgroup_id|references|Foreign_Key|

belongs_to :users
belongs_to :chatgroups


**user_chatgroups table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|user_id|references|Foreign_Key|
|chatgroup_id|references|Foreign_Key|

belongs_to :user
belongs_to :chatgroup



