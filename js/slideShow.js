const heroSlider = document.getElementById('hero-slider');
const windowWidth = heroSlider.clientWidth;

let index = 1;

heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;

setInterval(() => {
	if (index == 6) return;

	index++;

	heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;
	heroSlider.style.transition = 'all 2s ease-in-out';
}, 3000);

heroSlider.addEventListener('transitionend', () => {
	if (document.getElementById(`slide${index}`).id == 'slide6') {
		heroSlider.style.transition = 'none';
		index = 0;
		heroSlider.style.transform = `translateX(${-windowWidth * index}px)`;
	}
})