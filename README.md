# A Mini-Microservices App

### 02. Project Setup

    $ npm install -g nodemon

    $ cd app

    $ npx create-react-app client

<br/>

    $ cd app

    $ mkdir posts
    $ cd posts
    $ npm init -y

    $ npm install --save express cors axios

<br/>

    $ cd app

    $ mkdir comments
    $ cd comments
    $ npm init -y

    $ npm install --save express cors axios

<br/>

### 03. Posts Service Creation

<br/>

    $ cd posts
    $ npm run start

<br/>

### 04. Testing the Posts Service

<br/>

    $ curl \
    --request POST http://localhost:4000/posts/ \
    --header "Content-Type: application/json" \
    | python -m json.tool

<br/>

    $ curl \
    --request GET http://localhost:4000/posts/ \
    --header "Content-Type: application/json" \
    | python -m json.tool

<br/>

### 05. Implementing a Comments Service

<br/>

<br/>

    $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

<br/>

**to solve issue:**

```
[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch ***
```

    $ cd comments
    $ npm run start

<br/>

### 06. Quick Comments Test

<br/>

    $ curl \
    --data '{"content":"I am a comment"}' \
    --header "Content-Type: application/json" \
    --request POST http://localhost:4001/posts/123/comments \
    | python -m json.tool

<br/>

    $ curl \
    --request GET http://localhost:4001/posts/123/comments \
    --header "Content-Type: application/json" \
    | python -m json.tool

<br/>

### 08. React Project Setup

<br/>

<br/>

    $ cd client

    $ npm install --save axios
    $ npm start

<br/>

### 09. Building Post Submission

### 10. Handling CORS Errors

<br/>

### 11. Fetching and Rendering Posts


### 12. Creating Comments

### 13. Displaying Comments

### 15. Request Minimization Strategies

<br/>

### 16. An Async Solution

<br/>

### 17. Common Questions Around Async Events

<br/>

### 18. Event Bus Overview


### 19. A Basic Event Bus Implementation

    $ cd app
    $ mkdir event-bus
    $ cd event-bus

    $ npm init -y
    $ npm install --save express axios

    $ npm run start

<br/>

### 20. Emitting Events

<br/>

### 21. Emitting Comment Creation Events

<br/>

### 22. Receiving Events

### 23. Creating the Data Query Service

<br/>

    $ cd app
    $ mkdir query
    $ cd query

    $ npm init -y
    $ npm install --save express cors axios

<br/>

    $ npm run start

<br/>

### 24. Parsing Incoming Events

<br/>

### 25. Using the Query Service

<br/>

### 26. Adding a Simple Feature

### 27. Issues with Comment Filtering


### 28. A Second Approach

### 29. How to Handle Resource Updates

### 30. Creating the Moderation Service

<br/>

    $ cd app
    $ mkdir moderation
    $ cd moderation

    $ npm init -y
    $ npm install --save express axios

<br/>

    $ npm run start

<br/>

### 31. Adding Comment Moderation

<br/>

### 32. Handling Moderation

<br/>

### 33. Updating Comment Content

<br/>

### 34. A Quick Test

Comment with text 'orange' has status 'rejected'.

<br/>

### 35. Rendering Comments by Status


### 36. Dealing with Missing Events


### 37. Implementing Event Sync

<br/>

### 38. Event Syncing in Action

---
