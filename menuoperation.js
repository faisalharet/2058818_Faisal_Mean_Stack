function addData() {
  
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
 
    var myPTag = document.createElement("p");
 
    var myPTagContent = document.createTextNode("Name is "+name+" Age is "+age);
    myPTag.setAttribute("style","color:red;");      
    myPTag.setAttribute("class","myPClass");        
    myPTag.appendChild(myPTagContent);
 
    document.getElementById("info").appendChild(myPTag);
 }