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


**messages table**

|column|type|remark|
|:---:|:---:|:---:|
|id|integer|-|
|body|text|-|
|image|string|-|
|user_id|references|Foreign_Key|
|chatgroup_id|references|Foreign_Key|
