
var navLinks = document.getElementById("navLinks");
var regBtn = document.querySelector("#register")
var logBtn = document.querySelector("#login")

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

regBtn.addEventListener("click",()=>{
    regBtn.style.opacity=1
    logBtn.style.opacity=0
})



// Counter for Numbers 1 to Number of Images And Number Of Images
let counter = 1, numOfImgs = document.querySelectorAll(".images-container img").length;

let flag = 1;

function change() {

    // Get Radio and Checked
    document.getElementById("radio-" + counter).checked = true;

    // Increment or Decrement Counter to Get Next Radio
    flag ? counter++ : counter--;

    // If Reach to End then Start In Reverse
    if (counter > numOfImgs) {
        counter = numOfImgs - 1;
        flag = 0;
    }

    // If Reach to Start then Start Again
    if (counter < 1) {
        counter = 2;
        flag = 1;
    }

    // Call Again to Change Function
    setTimeout(change, 3000);
    
}



// Login and register seaction  page in js

function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;
    
    var screenPosition = window.innerHeight / 1.2;
  
    if(introPosition < screenPosition) {
      introText.classList.add('side-text-appear');
    }
    if(imagePosition < screenPosition) {
      sideImage.classList.add('sideImage-appear');
    }
  }
  
  window.addEventListener('scroll', scrollAppear);
  
  // For switching between navigation menus in mobile mode
  var i = 2;
  function switchTAB() {
      var x = document.getElementById("list-switch");
      if(i%2 == 0) {
          document.getElementById("list-switch").style= "display: grid; height: 50vh; margin-left: 5%;";
          document.getElementById("search-switch").style= "display: block; margin-left: 5%;";
      }else {
          document.getElementById("list-switch").style= "display: none;";
          document.getElementById("search-switch").style= "display: none;";
      }
      i++;
  }
  
  // For LOGIN
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");
  
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  }
  
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  }
    
  // CheckBox Function
  function goFurther(){
    if (document.getElementById("chkAgree").checked == true) {
      document.getElementById('btnSubmit').style = 'background: #237dc6;';
    }
    else{
      document.getElementById('btnSubmit').style = 'background: lightgray;';
    }
  }
  
  function google() {
        window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
  }
  

