import { getData } from './api.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.card');
const showMoreElement = document.querySelector('.hero__show-more');
const cardListElement = document.querySelector('.card-list');
const pathLink = 'https://jsonplaceholder.typicode.com/posts';

let startCount = 0;
// eslint-disable-next-line prefer-const
let cardsPerLoad = startCount + 5;
const cardsLimit = 30;

const createCardElement = (card, className, string) => {
	const cardElement = card.querySelector(className);

	cardElement.textContent = string;
};

const renderCard = (product) => {
	const cardElement = cardTemplate.cloneNode(true);

	createCardElement(cardElement, '.card-list__heading', product.title, product.title);
	createCardElement(cardElement, '.card-list__text-content', product.body, product.body);

	return cardElement;
};

const loadData = Array.from(getData(pathLink, console.log, console.error));

const renderCards = (cards) => {
	// if (startCount < cardsLimit) {
	cards.slice(startCount, cardsPerLoad).forEach((card) => {
		cardListElement.append(renderCard(card));
	});

	startCount += 5;
	// }
};

export const test = () => renderCards(loadData);

// const getCards = (gData, path) => {
// 	getData(
// 		path,
// 		(data) => { });
// };

// const initCardLoader = () => {
// 	const showMore = (e) => {
// 		e.preventDefault();

// 		getCards();
// 	};

// 	showMoreElement.addEventListener('click', showMore);
// };
