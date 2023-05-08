
 
 
 function logOut (event){
	event.preventDefault();
	localStorage.removeItem("isLogin");
	window.location.replace("login.html");
}

 /* function preventBack() { window.history.forward(); }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null }; */
			


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


