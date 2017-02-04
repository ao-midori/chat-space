== README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation  
This database has 3 tables below.

**users table**  

|column|type|remark|
|:---:|:---:|:---:|
|user_name|string|Index, Unique|
|email|string|Unique|
|password|string|Not-Null|

**chatgroups table**  

|column|type|remark|
|:---:|:---:|:---:|
|group_name|string|Not-Null|
|user_id|references|Foreign_Key|

**messages table**  

|column|type|remark|
|:---:|:---:|:---:|
|body|text|-|
|image|string|-|
|group_id|references|Foreign_Key|
|user_id|references|Foreign_Key|

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.
