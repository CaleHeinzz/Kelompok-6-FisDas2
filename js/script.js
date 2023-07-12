const menuButton = document.querySelector("#menu-button");
const getStart = document.querySelector("#tom");
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
		window.scrollBy(0, bannerHeight)
	},50)
	setTimeout(() => {
		mainContent[1].classList.add('active');
		mainContent[0].classList.remove('active');
		document.body.style.height = "100vh";
	}, 500);
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


window.addEventListener('DOMContentLoaded', function() {
	const hoverableElements = document.querySelectorAll('.hoverable');
  
	hoverableElements.forEach(function(element) {
	  const tooltipText = element.getAttribute('data-title');
	  const tooltip = document.createElement('span');
	  tooltip.classList.add('tooltip-text');
	  tooltip.textContent = tooltipText;
  
	  element.appendChild(tooltip);
	});
  });


const jawaban = document.querySelector('.jawaban');
const pembahasan = document.querySelectorAll('.pembahasan');
const pg = document.querySelectorAll('.pg');
const showAnswers = document.querySelector(".show-answers");
const toggleAnswers = document.querySelector(".show-answers h3");
pg.forEach(pgElem => {
	const pilihan = pgElem.querySelectorAll('.pilihan');
	let pilihanTerpilih = null;
  
	pilihan.forEach(pilihanElem => {
	  pilihanElem.addEventListener('click', function() {
		if (pilihanTerpilih === pilihanElem) {
		  pilihanTerpilih.classList.remove('pilih');
		  pilihanTerpilih = null;
		} else {
		  if (pilihanTerpilih) {
			pilihanTerpilih.classList.remove('pilih');
		  }
		  pilihanElem.classList.add('pilih');
		  pilihanTerpilih = pilihanElem;
		}
	  });
	});
  });
  console.log(pembahasan.length);
showAnswers.addEventListener("click",function(){
	for (let i = 0; i < pembahasan.length; i++) {
		pembahasan[i].classList.toggle("shows");
	}
	if (toggleAnswers.innerHTML == "Show"){
		toggleAnswers.innerHTML = "Hide";
	}else if(toggleAnswers.innerHTML == "Hide"){
		toggleAnswers.innerHTML = "Show";
	}
});
for (let i = 0; i <pg.length; i++) {
	for (let j = 0; j < 5 ; j++) {
		if (pg[i].children[j].classList.contains("pilih")){
			console.log(pg[i].children[j]); 
		}
	}
}

