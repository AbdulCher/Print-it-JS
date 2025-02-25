const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//  Ajout eventListener sur les flèches

let arrowLeft = document.querySelector(".arrow_left")
	arrowLeft.addEventListener('click', () => {
		console.log("Vous avez cliqué sur la flèche gauche")
});

let arrowRight = document.querySelector(".arrow_right")
	arrowRight.addEventListener('click', () => {
		console.log("Vous avez cliqué sur la flèche droite")
});

//   Ajout des div, les bullets points

let newDiv = document.createElement("div")
let parentDiv = document.querySelector(".dots")
	parentDiv.appendChild(newDiv)
	newDiv.classList.add("dot")
	newDiv.classList.add("dot_selected")
	
let newDivOne = document.createElement("div")
	parentDiv.appendChild(newDivOne)
	newDivOne.classList.add("dot")

let newDivTwo = document.createElement("div")
	parentDiv.appendChild(newDivTwo)
	newDivTwo.classList.add("dot")

let newDivThree = document.createElement("div")
	parentDiv.appendChild(newDivThree)
	newDivThree.classList.add("dot")

//   Ajout des images du slider

const banner = document.getElementById("banner")
const paragraphe = banner.querySelector("p"); // Elément de refference

const imageTwo = document.createElement("img");
	imageTwo.src = "assets/images/slideshow/slide2.jpg";
	imageTwo.classList = "banner-img"
	imageTwo.alt = "Banner Print-it";
	banner.insertBefore(imageTwo, paragraphe)

const imageThree = document.createElement("img");
	imageThree.src = "assets/images/slideshow/slide3.jpg";
	imageThree.classList = "banner-img"
	imageThree.alt = "Banner Print-it";
	banner.insertBefore(imageThree, paragraphe)

const image = document.createElement("img");
	image.src = "assets/images/slideshow/slide4.png";
	image.classList = "banner-img"
	image.alt = "Banner Print-it";
	banner.insertBefore(image, paragraphe)

let currentIndex = 0;

const bannerImgs = document.querySelectorAll(".banner-img"); // Récupére les images avec la class '.banner-img'
const tagLine = document.querySelector("#banner p"); // Récupère les 'p' qui sont dans '#banner', les slogans
const dots = document.querySelectorAll(".dot"); // Récupère les les dots, bullets points, avec la classe '.dot'

// Fonction pour l'affichage et le défilement de notre slider

function showSlide(index) {
    // Masquer toutes les images, parcoure tous les éléments de notre tableau et supprime "active"
    bannerImgs.forEach(img => img.classList.remove("active"));

    // Afficher l'image à l'index spécifié
    bannerImgs[index].classList.add("active");

    // Mettre à jour le texte
    tagLine.innerHTML = slides[index].tagLine;

    // Mettre à jour les dots
    dots.forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === index); // Afficher le dot sélectionné
    });
}

// Défilement infini sur le caroussol
// Flèche gauche
document.querySelector(".arrow_left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Flèche droite
document.querySelector(".arrow_right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Afficher le premier slide au chargement
showSlide(currentIndex);