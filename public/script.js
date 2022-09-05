const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const social = document.getElementsByClassName('navbar-social')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  social.classList.toggle('active')
})


/*FILTER PHOTOS*/

const buttonCategorie = document.querySelectorAll(".items span.item");
// creer un array a partir d'une nodelist
const arrButtonCategorie = Array.from(buttonCategorie)

// PHOTOS
// recupère les photos dans une nodelist(array)
const photoCategorie = document.querySelectorAll(".photos img");

const arrPhotoCategorie = Array.from(photoCategorie);

// const attributClass = arrPhotoCategorie.map( photo => {
  //   console.log( photo.getAttribute("class"))
  // })

  
const mapButton = arrButtonCategorie.map( element => {
  // select all button ID
  element.addEventListener("click", () => {
    arrPhotoCategorie.map( photo => {

      const value = element.textContent;
      console.log(value);

      if(photo.className.includes(value.toLocaleLowerCase())){
        photo.style.display = 'block'

        console.log(true);
        }   else if (value == 'Tout') {
            arrPhotoCategorie.forEach( photo => 
              photo.style.display = "block")
        }     
        else {
        photo.style.display = 'none'
        photo.attributes('alt').style.display = "none"
      }
    } )

    
  })
  
})
