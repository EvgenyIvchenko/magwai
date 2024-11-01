const menuOpenElement = document.querySelector('.header__burger-menu');
const navigation = document.querySelector('.header__navigation-wrap');

const onMenuOpenClick = (e) => {
	e.preventDefault();

	if (menuOpenElement.getAttribute('aria-expanded') === 'false') {
		menuOpenElement.setAttribute('aria-expanded', 'true');
		navigation.classList.add('header__navigation-wrap--opened');
	} else {
		menuOpenElement.setAttribute('aria-expanded', 'false');
		navigation.classList.remove('header__navigation-wrap--opened');
	}
};

export const initBurgerMenu = () => {
	menuOpenElement.addEventListener('click', onMenuOpenClick);
};
