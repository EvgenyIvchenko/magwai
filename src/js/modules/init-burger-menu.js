const menuOpenElement = document.querySelector('.header__burger-menu');
const navigation = document.querySelector('.navigation');

const onMenuOpenClick = (e) => {
	e.preventDefault();

	if (menuOpenElement.getAttribute('aria-expanded') === 'false') {
		menuOpenElement.setAttribute('aria-expanded', 'true');
		navigation.classList.add('navigation--opened');
	} else {
		menuOpenElement.setAttribute('aria-expanded', 'false');
		navigation.classList.remove('navigation--opened');
	}
};

export const initBurgerMenu = () => {
	menuOpenElement.addEventListener('click', onMenuOpenClick);
};
