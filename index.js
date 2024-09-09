// Botón para abrir y cerrar menú
const barsBtn = document.querySelector(".menu-label");

//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");



// Dropdown
const dropdownToggle = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Navbar

const toggleMenu = () => {
	barsMenu.classList.toggle("open-menu");
};

const closeOnScroll = () => {
	if (
		!barsMenu.classList.contains("open-menu")
		
	) {
		return;
	}
	barsMenu.classList.remove("open-menu");
	
};


// Init 

const init = () => {
  barsBtn.addEventListener("click", toggleMenu);
	window.addEventListener("scroll", closeOnScroll);
}

init();