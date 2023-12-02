document.write("<br><br>");
document.write("Welcome to Javascript page of Javascript Seletors" + "<br><br>");


let element= document.getElementById("myfirst");
//element=element.className;
//element=element.childNodes;
// element=element.parentNode;
element.style.color="red";
element.innerText="Manish is a good boy";
element.innerHTML = "<b> <center> Manish is a good boy </center> </b>"; 
 document.write(element +"<br><br>");
// console.log(element);

//1.Single element selector
let sel =document.querySelector("#myfirst");
sel =document.querySelector(".child");
sel =document.querySelector("div");
sel.style.color = "green";
document.write(sel +"<br><br>");
//console.log(sel);


//2.Multi element selecrtor

let mani=document.getElementsByClassName("child");
//mani=document.getElementsByClassName("container");
mani=document.getElementsByTagName("div");
document.write(mani + "<br><br>");
//console.log(mani);

Array.from(mani).forEach(element =>{
    console.log(mani);
    element.style.color="blue";
});
//console.log(mani[0].getElementsByClassName("child"));

var x =document.getElementById("headind");
       document.getElementById("demo").innerHTML = "the text written in h2 is" + x.innerHTML;



