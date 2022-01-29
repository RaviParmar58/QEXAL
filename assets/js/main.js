// Active Navbar
let	nav = document.querySelector(".nav-scroll")
window.onscroll = function () {
	if(document.documentElement.scrollTop > 25)
		nav.classList.add("scroll-on");
	else{
		nav.classList.remove("scroll-on");
	}
}
