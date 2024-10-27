import { getData } from './api';
import { renderCard } from './card';

const cardListElement = document.querySelector('.card-list');

const showError = () => {
	console.log('not-ok');
};

const renderCards = (cards, renderCard) => {
	cards.slice(0, 5).forEach((card) => {
		cardListElement.append(renderCard(card));
	});
};

const onShowMoreClick = (getData, renderCard, showError) => {
	getData(
		'https://jsonplaceholder.typicode.com/posts',
		(data) => {
			renderCards(data, renderCard);
		},
		showError
	),
};

const ggg = (e) => {
	e.preventDefault();
	onShowMoreClick(getData, renderCard, showError);
};

export const initCardLoader = () => {
	cardListElement.addEventListener('click', ggg);
};
