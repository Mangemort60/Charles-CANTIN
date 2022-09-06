/********** MENU DEROULANT ***********/

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const social = document.getElementsByClassName('navbar-social')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  social.classList.toggle('active')
})


/**********FILTRE GALLERIE PAR CATEGORIE*************/

// recupère les buttons de categorie dans une nodelist
const buttonCategorie = document.querySelectorAll(".items span.item");
// crée un Array à partir de la nodelist buttonCategorie 
const arrButtonCategorie = Array.from(buttonCategorie)

// recupère les photos dans une nodelist 
const photoCategorie = document.querySelectorAll(".photos img");
// crée un Array à partir de la nodelist arrButtonCategorie
const arrPhotoCategorie = Array.from(photoCategorie);


// parcours l'Array arrButtonCategorie  
const mapButton = arrButtonCategorie.map( element => {
  // pour chaque élément(button) on créer un event click 
  element.addEventListener("click", () => {
    // on parcours l'Array arrPhotoCategorie
    arrPhotoCategorie.map( photo => {
      // pour chaque élement(photo) on récupère le contenu en string du bouton
      const value = element.textContent;

      // puis on vérifie : 
      // si l'attribut class de l'element photo contient la string du bouton
      // si c'est le cas on affiche l'element photo      
      if(photo.className.includes(value.toLocaleLowerCase())){
        photo.style.display = 'block'
        }   
        // si la string du bouton = 'tout' on affiche toute les élements photo 
        else if (value == 'Tout') {
            arrPhotoCategorie.forEach( photo => 
              photo.style.display = "block")
        }     
        // sinon on affiche rien
        else {
        photo.style.display = 'none'
      }
    } )

    
  })
  
})
