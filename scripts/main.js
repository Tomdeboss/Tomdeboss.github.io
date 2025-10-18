const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {

  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/Website Bild 1.jpg") 
    {
    myImage.setAttribute("src", "images/Website Bild 2.jpg");
    } 
  
  else 
    {
    myImage.setAttribute("src", "images/Website Bild 1.jpg");
    }   
});


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");


function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) 
  {
    setUserName();
  } 
  else 
  {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hallo, ${myName}`;
}
}



if (!localStorage.getItem("name")) 
{
  setUserName();
} 
else 
{
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hallo, ${storedName}`;
}




myButton.addEventListener("click", () => 
{
  setUserName();
});

//localStorage.clear(); //Cacheln löschen


