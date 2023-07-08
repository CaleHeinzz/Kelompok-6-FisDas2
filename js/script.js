const menuButton = document.querySelector("#menu-button");
const getStart = document.querySelector("#getStarted");
const mainContent = document.querySelectorAll('.hero');
const navLinks = document.querySelectorAll(".nav-links");

function setTitle(element) {
	const text = element.innerText;

	document.title = `${text} | TriTravel`;
}

menuButton.addEventListener("click", function() {
	document.getElementById('menu-list').classList.toggle('show');
});

getStart.addEventListener("click", function() {
	if (mainContent[0].clientHeight == window.innerHeight) {
		document.body.style.height = "200vh";
	}
	setTimeout(function () {
		const bannerHeight = document.getElementById('hero').clientHeight;
		const headerHeight = document.getElementsByClassName('header')[0].clientHeight;
		window.scrollBy(0, bannerHeight)
	},50)
	setTimeout(() => {
		mainContent[1].classList.add('active');
		mainContent[0].classList.remove('active');
		document.body.style.height = "100vh";
	}, 1000);
});

for (let i = 0; i < navLinks.length; i++) {
	navLinks[i].addEventListener("click", () => {
	  // Menghapus kelas "active" dari semua elemen main content
	  mainContent.forEach((content) => {
		content.classList.remove("active");
	  });
  
	  // Menambahkan kelas "active" pada elemen main content yang sesuai dengan link yang diklik
	  mainContent[i].classList.add("active");
	});
  }


const mainDescription = document.querySelector('.hero-description');
const mainTitle = document.querySelector('.main-title');
const mainArtikel = document.querySelector('.artikel');
const mainButton = document.querySelector('.button');

mainArtikel.addEventListener("mouseover", () => {
	mainDescription.classList.add("show-artikel");
	mainButton.classList.add("show-artikel");
});
mainArtikel.addEventListener("mouseout", () => {
	mainDescription.classList.remove("show-artikel");
	mainButton.classList.remove("show-artikel");
});