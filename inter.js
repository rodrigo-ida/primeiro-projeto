/*window.onload = () => {
	let animaCards = new Cards();
	document.addEventListener("scroll", animaCards.calculoScroll )

}


class Cards {
	constructor() {


	}

	calculoScroll () {
		

		const posicao = document.getElementById('section-dicas').getBoundingClientRect()
		['y'];
		console.log(posicao)
	}

}
*/
	var cardEsq = document.querySelector(".card-esq")
	var cardDir = document.querySelector(".card-dir")

function umm () {
	var secao = document.querySelector('#section-dicas').getBoundingClientRect()['y']

	console.log(secao)

	

	if (secao <= 500 && secao >= 0) {
		cardEsq.style.transform = `translate(${(-secao)/10}%)`;
		cardDir.style.transform = `translate(${(secao)/10}%)`;
	}
}





function anima () {

	gsap.to('#coqueiro' , 0.3, {scale:0.95, repeat: -1, yoyo:true})
	TweenMax.to('#filtro' , 0.3, {scale:0.95, repeat: -1, yoyo:true})
}
anima()
document.addEventListener('scroll' , umm)

function turbulencia () {
	TweenMax.to('#filtro-turbulencia', 5, {
		 	attr: {
		 		baseFrequency: 0.03,
			},
			repeat: -1,
			yoyo: true
		}
	)
}

turbulencia()