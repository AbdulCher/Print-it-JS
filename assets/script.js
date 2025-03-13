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

//  1 - Ajout eventListener sur les flèches

//  2 - Défilement infini sur le caroussol( grâce à %, revient à 0 quand on dépasse le dernier slide)

// Flèche gauche
document.querySelector(".arrow_left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    showSlide(currentIndex);
    console.log("Vous avez cliqué sur la flèche gauche")
});

// Flèche droite
document.querySelector(".arrow_right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    console.log("Vous avez cliqué sur la flèche droite")
});


//   Ajout des div, les bullets points

const parentDiv = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {  // Création de 4 "dot" div
    const newDiv = document.createElement("div");
    newDiv.classList.add("dot");

    if (i === 0) {  // Ajoute "dot_selected" à la première div
        newDiv.classList.add("dot_selected");
    }

    parentDiv.appendChild(newDiv);  // Ajoute la div dans le parent
}

//   Ajout des images du slider

const banner = document.getElementById("banner")
const paragraphe = banner.querySelector("p"); // Elément de refference

slides.forEach((slide, index) => {
    if (index === 0) return; // On saute le premier slide (déjà présent dans le HTML)

    const img = document.createElement("img");
    img.src = slide.image;
    img.classList.add("banner-img");
    img.alt = "Banner Print-it";
    banner.insertBefore(img, paragraphe);
}); 


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



// Afficher le premier slide au chargement
showSlide(currentIndex);