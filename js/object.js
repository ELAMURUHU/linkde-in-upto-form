
let usr_input = document.getElementById("mail");
let usr_password = document.getElementById("passwrd");
let inputs = document.getElementsByClassName("form_control");
let view = document.getElementsByClassName("error");


let getUrl = window.location.href;
if(getUrl.includes("index.html")){
	let isLogin = localStorage.getItem("isLogin");
	if(!isLogin){
		window.location.replace("login.html");
	}
 }
 
 
let users = [
  {
    user_id: Math.random(),
    email_id: "raj@gmail.com",
    passWord: "raj12345",
  },
  {
    user_id: Math.random(),
    email_id: "ram@gmail.com",
    passWord: "ramkumar@1997"
  }
];


function onSignIn(){
	let isValid;
	  
	 for(let x=0;x < inputs.length;x++ )
	 {
		isValid=0;
		if(inputs[x].value.trim() === "")
		{
			inputs[x].parentNode.getElementsByTagName("p")[0].classList.add("invalid-input");
			isValid++;
		}
		else{
		  inputs[x].parentNode.getElementsByTagName("p")[0].classList.remove("invalid-input");
		}
	}

	let user = users.find(function(u) {
		return u.email_id === usr_input.value;
	});
	
	if (user && user.passWord === usr_password.value) {
		return logIn(event);
		/* console.log("Login successful"); */
	} else {
		console.log("Login failed");
	} 
	
	 
	if(usr_input.value === users.email_id ){
		view[0].classList.remove("error2");	
	}
	else{
		view[0].classList.add("error2");
	}
	if(usr_password.value === users.passWord){
		view[0].classList.remove("error2");	
	}
	else{
		view[0].classList.add("error2");
	}
}


 

//login function
function logIn (event){
	event.preventDefault();
	localStorage.setItem("isLogin",true);
	window.location.replace("index.html");
}
 
 //logout function
 function logOut (event){
	event.preventDefault();
	localStorage.removeItem("isLogin");
	window.location.replace("login.html");
}

 
 //profile login and logout
 
		
/* function logOut (event){
	event.preventDefault();
	localStorage.removeItem("isLogin");
	window.location.replace("login.html");
} */

//edit intro show function
let btn = document.getElementsByClassName("editable");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (event) {
	  event.preventDefault();
	  let xEle = document.getElementsByClassName("overlay")[0];
	  xEle.style.display = "block";
	  
    let getparent = this.parentNode.parentNode;
    let pElements = getparent.getElementsByClassName("edit-intro-section");
    pElements[0].style.display="block";
	
  });
}
//edit intro remove function
let editBtn = document.getElementsByClassName("edit-icon");
editBtn[0].addEventListener("click",function(event){
	event.preventDefault();
	let xEle = document.getElementsByClassName("overlay")[0];
	  xEle.style.display = "none";
	let getparent = this.parentNode.parentNode;
	
	 getparent.style.display="none";
})

//education show function
let icon = document.getElementsByClassName("edu-pencil-icon");
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function (event) {
	  event.preventDefault();
	  let yEle = document.getElementsByClassName("overlay")[0];
	  yEle.style.display = "block";
	  
    let getparent = this.parentNode.parentNode;
    let qElements = getparent.getElementsByClassName("edit-studies");
    qElements[0].style.display="block";
	
  });
}
//education remove function
let editIcon = document.getElementsByClassName("edit-study-icon");
editIcon[0].addEventListener("click",function(event){
	event.preventDefault();
	let yEle = document.getElementsByClassName("overlay")[0];
	  yEle.style.display = "none";
	let getparent = this.parentNode.parentNode;
	
	 getparent.style.display="none";
})

//experience show function
let edit_icon = document.getElementsByClassName("exp-edit-pencil-icon");
for (let i = 0; i < edit_icon.length; i++) {
  edit_icon[i].addEventListener("click", function (event) {
	  event.preventDefault();
	  let rEle = document.getElementsByClassName("overlay")[0];
	  rEle.style.display = "block";
	  
    let getparent = this.parentNode.parentNode;
    let sElements = getparent.getElementsByClassName("experience-ela-form");
    sElements[0].style.display="block";
	
  });
}

//experience remove function
let exp_close = document.getElementsByClassName("edit-exp-icon");
exp_close[0].addEventListener("click",function(event){
	event.preventDefault();
	let tEle = document.getElementsByClassName("overlay")[0];
	  tEle.style.display = "none";
	let getparent = this.parentNode.parentNode;
	
	 getparent.style.display="none";
})


 let profile = [

    {
		id:12345,
		firstname:"Elamuruhu",
		lastname:"Manoharan",
		mobile:"8668764991",
		email:"elamuruhu.mano@gmail.com",
		passwrd:"ela@muruhu1997",
		gender:"male",
		profileimage:"images/elamuruhu.jpg",
		profilebanner:"images/profile-banner.jpg"
	
    },
	
	{
		id:15467,
		firstname:"Ragu",
		lastname:"Pathi",
		mobile:"8668712345",
		email:"ragupathi@gmail.com",
		passwrd:"regu1997fend",
		gender:"male",
		profileimage:"images/ragu.jpg",
		profilebanner:"images/profile-banner.jpg"
	
    },
	
	{
		id:19087,
		firstname:"Karthik",
		lastname:"Dev",
		mobile:"9876564991",
		email:"devkarthik@gmail.com",
		passwrd:"dev98karthik",
		gender:"male",
		profileimage:"images/karthk.jpg",
		profilebanner:"images/profile-banner.jpg"
	
    },
	
	{
		id:12546,
		firstname:"Yogsh",
		lastname:"Waran",
		mobile:"8664568991",
		email:"yogesh@gmail.com",
		passwrd:"yogesgyogi20",
		gender:"male",
		profileimage:"images/yogesh.jpg",
		profilebanner:"images/profile-banner.jpg"
	
    }


]; 













