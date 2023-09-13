# Generic Slingshot Resources

### Items object 

It contains an array of objects of type T (*Task, Pin, Discussion, etc…*), and is returned on multiple resource requests (*GetAll*). 

| Property | Type|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
|items|array|

### Document Info Object 

It contains information about a specific document.

| Property | Type|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
|id|string|
|name|string|

### Member Info Object 

It contains information about a specific member. 

| Property | Type|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
|id|string|
|email|string|
|name|string|
|role|string enum ([owner, contributor, viewer](https://www.slingshotapp.io/en/help/docs/security))|

### Assignee Info Object 

It contains information about a specific task assignee. 

Property | Type|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
|id|string|
|email|string|
|name|string|

### Chat Message Info Object 

It contains information about a specific chat message. 

Property | Type|
-------------------------------------------------------------------- | ------------------ | ------------------ | ------------------ |
|id|string|
|userId|string|
|timestamp|double|
|text|string|



 

