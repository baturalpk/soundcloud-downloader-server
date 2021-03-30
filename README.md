## Local Installation
1)
```
$ git clone https://github.com/baturalp-kiziltan/soundcloud-downloader-server.git
```
2)
```
$ cd soundcloud-downloader-server
```
3)
```
$ npm install
```
4)
```
$ npm run start
```
5) Now, the server will be started to listen port 3000(default) on your local. You can send POST request to 
   "http://localhost:3000/download" endpoint by defining "x-www-form-urlencoded" body. The request body must
   have following key-value structure:
   - Key: "url"
   - Value: "https://soundcloud.com/.../..." <br/>
---
6) Finally, the server will send a downloadable "*.mp3" file which contains your desired song.
