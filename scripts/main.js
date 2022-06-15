let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/les-boloto-brevno.jpg') {
    myImage.setAttribute ('src','images/splav.jpg');
     } else {
    myImage.setAttribute ('src','images/les-boloto-brevno.jpg');
  }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Как к вам обращаться?');
    if(myName === null) {
        if (!localStorage.getItem('name'))
        {myHeading.textContent = 'Испытай себя на прочность!'}
        else { 
            myHeading.textContent = 'Испытай себя на прочность'+', '+ storedName + '!';
             }
         }
    else if  (myName === "") {
        localStorage.removeItem('name');
        myHeading.textContent = 'Испытай себя на прочность!';
    } 
       else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Испытай себя на прочность, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } 
  else if (localStorage.getItem('name') === null ) {
    localStorage.removeItem('name');
    setUserName();
  } 
  else if (localStorage.getItem('name') === '' ) {
    setUserName();
  } 
  else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Испытай себя на прочность, ' + storedName + '!';
  }
  myButton.onclick = function() {
    setUserName();
  }