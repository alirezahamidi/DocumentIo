# DocumentIo
A small helpful code to make HTML elements in Vanilla JS projects.


You can Make Elements Like this :
```
document.getElementById("parent element").appendChild(
    DocumentIo.createElement("DIV", 
    { 
        class: "cssClass",
         id: "steps-container"
    }, 
    [
        DocumentIo.createElement("DIV", 
        { class: "content", innerText: "Some Text" }),
        DocumentIo.createElement("H6", { innerText: "Some Text" })
    ])
);
```


Or You Can Make More than one elements at once like this :

```
document.getElementById("parent element").appendChild(
    DocumentIo.createElements(
    [
        DocumentIo.createElement("DIV", 
        { class: "content", innerText: "Some Text" }),
        DocumentIo.createElement("H6", { innerText: "Some Text" })
    ])
)
```

Please contribute to our code or suggest this package to your friends if you like it.