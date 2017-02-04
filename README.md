== README

This database has 3 tables below.

**users table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|name|string|Index, Unique|
|email|string|Unique|
|password|string|Not-Null|

**chatgroups table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|name|string|Not-Null|
|user_id|references|Foreign_Key|

**messages table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|body|text|-|
|image|string|-|
