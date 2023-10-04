```sequence
participant browser
participant server

browser--> server: https://studies.cs.helsinki.fi/exampleapp/notes
server-->> browser: HTML document

browser -->> server: https://studies.cs.helsinki.fi/exampleapp/main.css
server-->> browser : the css file

browser-->> server : https://studies.cs.helsinki.fi/exampleapp/main.js
server-->> browser: the javascript file 

browser-->> server : https://studies.cs.helsinki.fi/exampleapp/data.json
server-->> browser:  {"content": "aaa","date": "2023-09-30T13:55:25.332Z"}

```

