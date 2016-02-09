/* ----- */
// Replace YOUR NAME with yours

var NAME = "SARAH SHAFFER";
console.log( "/*****************/\n" + NAME +"'s submission \nfor Whodat Assignment" + "\n/*****************/\n");



/*
 * CHALLENGES
 *
 * Complete as many of the following challenges 
 * that you can. Simply put your code where indicated
 * and when you have completed a challenge
 * the delete the not in the 'not completed' message
 * if you try and don't get it then change the log message to 
 * something else. (e.g. 'attempted', 'attempted but javascript stinks', 
 * 'attempted but the instructor stinks', ...)
 */




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch1											*/	
/*	Change the color of the wings on  			*/	
/*	1st owl to a different color				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 1...');

var myResult = document.getElementsByClassName('wing_L');
undefined
myResult
[<section class=​"wing_L">​</section>​, <section class=​"wing_L">​</section>​, <section class=​"wing_L">​</section>​, <section class=​"wing_L">​</section>​, <section class=​"wing_L">​</section>​, <section class=​"wing_L">​</section>​]
myResult(0)
VM150:2 Uncaught TypeError: myResult is not a function(…)(anonymous function) @ VM150:2InjectedScript._evaluateOn @ VM53:875InjectedScript._evaluateAndWrap @ VM53:808InjectedScript.evaluate @ VM53:664
myResult[0]
<section class=​"wing_L">​</section>​
myResult[0].setAttribute("style", "background-color: red");
undefined
var myResult2 = document.getElementsByClassName('wing_R');
undefined
myResult2
[<section class=​"wing_R">​</section>​, <section class=​"wing_R">​</section>​, <section class=​"wing_R">​</section>​, <section class=​"wing_R">​</section>​, <section class=​"wing_R">​</section>​, <section class=​"wing_R">​</section>​]
myResult2[0]
<section class=​"wing_R">​</section>​
myResult2[0].setAttribute("style", "background-color: red");
undefined
console.log('\tsuccessful')

/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch2											*/	
/*	Change the background color of the cage  	*/	
/*	on the 1st row at the end					*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 2...');
console.log('\tsuccessful')

var myResult3 = getElementsByClassName('cage');
VM1116:2 Uncaught ReferenceError: getElementsByClassName is not defined(…)(anonymous function) @ VM1116:2InjectedScript._evaluateOn @ VM53:875InjectedScript._evaluateAndWrap @ VM53:808InjectedScript.evaluate @ VM53:664
var myResult3 = document.getElementsByClassName('cage');
undefined
myResult3
[<div class=​"cage column-4" onclick=​"handleCageSelected(event)​">​…​</div>​, <div class=​"cage  column-4" onclick=​"handleCageSelected(event)​">​…​</div>​, <div class=​"cage  column-4" onclick=​"handleCageSelected(event)​">​…​</div>​, <div class=​"cage  column-4" onclick=​"handleCageSelected(event)​">​…​</div>​, <div class=​"cage  column-4" onclick=​"handleCageSelected(event)​">​…​</div>​, <div class=​"cage  column-4" onclick=​"handleCageSelected(event)​">​…​</div>​]
myResult3[2]
<div class=​"cage  column-4" onclick=​"handleCageSelected(event)​">​…​</div>​
myResult3[2].setAttribute("style", "background-color: green");
undefined



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch3											*/	
/*	Change the length of the beak for the owl	*/	
/*	at the end of the second row				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/

/** 		HINT		 **/
// to change the length of the beak you need to change
// the pixel value of:
// border-top
// e.g.
// changing:
// border-top: 60px solid goldenrod;
// to
// border-top: 120px solid goldenrod;
// would double the length of the beak.
/** ---		----	---	 **/

console.log('...challenge 3...');
console.log('\tsuccessful')

var myResult4 = document.getElementsByClassName('beak');
undefined
myResult4
[<section class=​"beak">​</section>​, <section class=​"beak">​</section>​, <section class=​"beak">​</section>​, <section class=​"beak">​</section>​, <section class=​"beak">​</section>​, <section class=​"beak">​</section>​]
myResult4[5]
<section class=​"beak">​</section>​
myResult4[5].setAttribute("style", "height: 90px");
undefined
myResult4[5].setAttribute("style", "height: 200px");
undefined
myResult4[5].setAttribute("style", "top: 500px");
undefined
myResult4[5].setAttribute("style", "top: 110px");
undefined
myResult4[5].setAttribute("style", "border-top: 90px solid goldenrod");
undefined

/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch4											*/	
/*	Write a function that takes a number		*/	
/*  and returns the cage on the page that 		*/
/* 	corresponds to that number 					*/
/* 		e.g. calling 							*/
/*				getCage(0)						*/
/*		would return <section class="cage" ...	*/
/*					 </section>					*/
/*												*/					
/*				html Tag for the first cage     */					
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 4...');
console.log('\tsuccessful')

	// Uncomment and fill in the code below

	// Hint: 
	// First get the cages
	// Second, get the cage that corresponds to the cageNumber
	// that was passed in
	// Third, return that cage

	function getCage(number) {
var result = document.getElementsByClassName('cage')[number];
return result;
}


/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch5											*/	
/*	Change the colors of the cages and owls		*/	
/*	in the middle column to be the same			*/
/*												*/	
/*												*/	
/*  HINTkey: "value", 							*/
/*  If you got Ch4 then you should be able to 	*/
/* 	you should be able to use that function to 	*/
/*	assist you 									*/
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 5...');
console.log('\tsuccessful')

getCage(1).setAttribute("style", "background-color: blue");
undefined
getCage(4).setAttribute("style", "background-color: blue");
undefined
var middleOwl1 = document.getElementsByClassName('body');
undefined
middleOwl1
[<section class=​"body prpl-d4">​</section>​, <section class=​"body prpl-d4">​</section>​, <section class=​"body prpl-d4">​</section>​, <section class=​"body prpl-d4">​</section>​, <section class=​"body prpl-d4">​</section>​, <section class=​"body prpl-d4">​</section>​]
function alterCage(number, color) {
var result1 = document.getElementsByClassName('cage')[number]
result1.setAttribute("style", "background-color: color");
}
undefined
alterCage(1,orange);
VM5546:2 Uncaught ReferenceError: orange is not defined(…)(anonymous function) @ VM5546:2InjectedScript._evaluateOn @ VM53:875InjectedScript._evaluateAndWrap @ VM53:808InjectedScript.evaluate @ VM53:664
alterCage(1, orange);
VM5627:2 Uncaught ReferenceError: orange is not defined(…)(anonymous function) @ VM5627:2InjectedScript._evaluateOn @ VM53:875InjectedScript._evaluateAndWrap @ VM53:808InjectedScript.evaluate @ VM53:664
alterCage(1, orange)
VM5696:2 Uncaught ReferenceError: orange is not defined(…)(anonymous function) @ VM5696:2InjectedScript._evaluateOn @ VM53:875InjectedScript._evaluateAndWrap @ VM53:808InjectedScript.evaluate @ VM53:664
alterCage(1, green)
VM5761:2 Uncaught ReferenceError: green is not defined(…)(anonymous function) @ VM5761:2InjectedScript._evaluateOn @ VM53:875InjectedScript._evaluateAndWrap @ VM53:808InjectedScript.evaluate @ VM53:664
middleOwl1[1].setAttribute("style", "background-color: orange");
undefined
middleOwl1[2].setAttribute("style", "background-color: orange");
undefined
middleOwl1[2].setAttribute("style", "background-color: purple");
undefined
middleOwl1[4].setAttribute("style", "background-color: orange");
undefined



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch6											*/	
/*	Write functions that take an owl element	*/	
/* 	as an argument and return the html sections */
/*	of different body parts						*/
/*												*/	
/*	see functions below for hints				*/	
/*												*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 6...');
console.log('\tattempted')

function getPart(cage, bodypart) {
var cageRes = getCage(cage);
var bodypart = document.getElementsByClassName("bodypart")[cageRes];
return bodypart;
}
function getWings(anOwl) {
	return wings;
}

function getBeak(anOwl) {
	return wings;
}

function getEyes(anOwl) {
	return eyes;
}

function getBody(anOwl) {
	return body;
}

function getPupils(anOwl) {

}