// functie oproepen voor myURL en daarne iets mee doen
getData(myURL).then( data217 => {
    // section oproepen waar de afbeelding in komt te staan
    let mySection = document.querySelector("section:nth-of-type(1)");
    // avatar oproepen van de opgehaalde data
    let myAvatar = data217.data.avatar;
    // naam oproepen van de opgehaalde data
    let myName = data217.data.name;
    // image aanmaken onder myImg
    let myImg = document.createElement("img");
    // avatar aan myImg source koppelen
    myImg.src = myAvatar;
    // alt van de img varanderen naar de data onder myName
    myImg.alt = myName;
    // myImg in de section zetten
    mySection.appendChild(myImg);
})














/**************/
/* SPIEKBRIEF */
/**************/

// const mySection = document.querySelector('section:nth-of-type(1)');

// getMyImage();

// function getMyImage() {
// 	getData(urlMe).then( data => {  
// 		const myData = data.data;
// 		let myName = myData.name;
// 		let myImgSrc = myData.avatar;

// 		if (!myImgSrc) {
// 			myImgSrc = "images/placeholder1.svg";
// 		}

// 		const myImg = document.createElement("img");

// 		myImg.src = myImgSrc;
// 		myImg.alt = myName;

// 		mySection.append(myImg);
// 	});	
// }