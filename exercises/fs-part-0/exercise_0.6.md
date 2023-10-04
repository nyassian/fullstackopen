```sequence
participant browser
participant server

browser -->> server: httts://stduies.cs.helsinki.fi/exampleapp/new_note_spa
server-->> browser: {"massage":"note created_"}
```

