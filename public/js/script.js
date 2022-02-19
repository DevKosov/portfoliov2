const imageFilters = document.querySelectorAll(".filter");

imageFilters.forEach(image => {
   image.addEventListener("mouseover", e => {image.children[0].children[0].firstElementChild.setAttribute("r","600");});
   image.addEventListener("mouseout", e => {image.children[0].children[0].firstElementChild.setAttribute("r","0");});

});
