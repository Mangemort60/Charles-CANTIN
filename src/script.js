const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const social = document.getElementsByClassName('navbar-social')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  social.classList.toggle('active')
})


/*FILTER PHOTOS*/

const filterContainer = document.querySelector("category");
const galleryItems = document.querySelectorAll("filter-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){

    // deactivate existing active 'filter-item'
   filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
   event.target.classList.add("active");

   const filterValue = event.target.getAttribute("data-filter");

   galleryItems.forEach((item) =>{

      if(item.classList.contains(filterValue) || filterValue === 'all'){
       item.classList.remove("hide");
        item.classList.add("show");
      }

      else{
       item.classList.remove("show");
       item.classList.add("hide");
      }

    });
  }
});


