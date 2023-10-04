```sequence
 participant browser
 participant server
 
 browser -->> server: https://studies.cs.helsinki.fi/exampleapp/spa
 server-->> browser: HTML document
 
 browser -->> server: https://studies.cs.helsinki.fi/exampleapp/main.css
 server-->> browser: the css file
 
 browser -->> server: https://studies.cs.helsinki.fi/exampleapp/spa.js
 server -->> browser:the javascipt file
 
 browser -->> server: https://studies.cs.helsinki.fi/exampleapp/data.json
 server -->>browser:  {  "content": "date": "2023-09-30T13:52:52.568Z" }
```

