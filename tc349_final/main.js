var a_count = 0;
var b_count = 0;
var c_count = 0;
var d_count = 0;
var e_count = 0;
var f_count = 0;

function show() {
	
	document.getElementById("descrip2").style.display="none";
	
	document.getElementById("descrip").style.display="block";
	a_count += 1;
	
	if(a_count%2 == 0) {
		document.getElementById("descrip").style.display="none";
		a_count = 0;
	}
}

function show2() {
	
	
	document.getElementById("proj").innerHTML = "MSU Energy Transition Website Redesign";
	
	document.getElementById("info").innerHTML = "This is another project that I worked on during my internship with the MSU office of sustainability.  The goal was to completely redisign the visual concept and content organization of the MSU Energy Transition plan website.  I used HTML CSS and Javascript to make the new site.  This project was rewarding because I was able to see my work in a real world scenario making a difference at MSU.";
	
	document.getElementById("descrip2").style.display="none";
	
	document.getElementById("link").href = "http://www.energytransition.msu.edu/index_beta.html";
	
	document.getElementById("descrip").style.display="block";
	b_count += 1;
	
	 if(b_count%2 == 0) {
		document.getElementById("descrip").style.display="none";
		b_count = 0;
	}
}



function show3() {
	
	
	document.getElementById("proj").innerHTML = "Pre-Production Proccess Project ";
	
	document.getElementById("info").innerHTML = "This is my midterm project from TC 331: Introduction to Interactive Media.  In this project we had to choose one of our classmate's ideas for an interactive application and go through the pre-production development process.  This proccess included writing a concept, identifying keywords, creating wireframes, a kano board, a hierarchy, and a mood board.  I also created a non-interactive final polished design page for the application.";
	
	document.getElementById("link").href = "https://www.msu.edu/~rosen151/TC331/Exercise%202/MP_Research/index.html";
	
	document.getElementById("descrip2").style.display="none";
	
	document.getElementById("descrip").style.display="block";
	c_count += 1;
	
	if(c_count%2 == 0) {
		document.getElementById("descrip").style.display="none";
		c_count = 0;
	}
}


function show4() {
	
	document.getElementById("descrip2").style.display="block";
	document.getElementById("proj2").innerHTML = "DVD Cover";
	
	document.getElementById("stuf2").innerHTML = "Okemos Kids Club";
	document.getElementById("stuff2").innerHTML = "Adobe InDesign";
	document.getElementById("info2").innerHTML = "This is a DVD cover that I designed for the end of summer DVD at my job last summer.";
	
	document.getElementById("link2").innerHTML = "View the cover";
	
	document.getElementById("link2").href = "dvd_cover.html";
	document.getElementById("descrip").style.display="none";
	
	d_count += 1;
	
	if(d_count%2 == 0) {
		document.getElementById("descrip2").style.display="none";
		d_count = 0;
	}
}


function show5() {
	
	
	document.getElementById("descrip2").style.display="block";
	document.getElementById("proj2").innerHTML = "Movie Poster";
	
	document.getElementById("client2").innerHTML = "Class: "
	
	document.getElementById("stuf2").innerHTML = "CAS 205: Media Photography";
	document.getElementById("stuff2").innerHTML = "Adobe Photoshop, Lightroom,  and InDesign";
	document.getElementById("info2").innerHTML = "This poster was the final project for my Media Photography class.  I took and edited the photos myself using Adobe lightroom and then created the poster using Adobe Photoshop. I also replicated the Google font using photoshop. ";
	
	document.getElementById("link2").innerHTML = "View the poster";
	
	document.getElementById("link2").href = "movie_poster.html";
	document.getElementById("descrip").style.display="none";
	
	e_count += 1;
	
	if(e_count%2 == 0) {
		document.getElementById("descrip2").style.display="none";
		e_count = 0;
	}
}


function show6() {
	
	
	document.getElementById("descrip2").style.display="block";
	document.getElementById("proj2").innerHTML = "Javscript Game";
	document.getElementById("client2").innerHTML = "Class: "
	
	document.getElementById("stuf2").innerHTML = "CAS 208: Media Interactivity";
	document.getElementById("stuff2").innerHTML = "Javascript, HTML, CSS, Adobe Photoshop";
	document.getElementById("info2").innerHTML = "I built this story game using javascript, HTML, and CSS. This was a cumulative project for my media interactivity class.  The goal was to program a story game with a flowchart of choices, a visual theme, and original artwork. ";
	
	document.getElementById("link2").innerHTML = "View the game";
	
	document.getElementById("link2").href = "https://www.msu.edu/~rosen151/CAS208/final/interactive.html";
	document.getElementById("descrip").style.display="none";
	
	f_count += 1;
	
	if(f_count%2 == 0) {
		document.getElementById("descrip2").style.display="none";
		f_count = 0;
	}
}
