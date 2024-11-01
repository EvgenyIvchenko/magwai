const showMoreElement = document.querySelector('.product__show-more');
const cardListElement = document.querySelector('.card-list');
const cardTemplate = document.querySelector('#card').content;

const CARDS_PER_CLICK = 5;
const MAX_COUNT = 30;
let MIN_RANGE = 0;
let MAX_RANGE = CARDS_PER_CLICK;

const limitChecker = () => {
	if (cardListElement.childElementCount >= MAX_COUNT) {
		showMoreElement.style.display = 'none';
	}
};

const renderCard = (item) => {
	const cardElement = cardTemplate.cloneNode(true);

	cardElement.querySelector('.card-list__heading').textContent = item.title;
	cardElement.querySelector('.card-list__text-content').textContent = item.body;

	return cardElement;
};

const showMoreCards = () => {
	fetch(
		'https://jsonplaceholder.typicode.com/posts',
		{
			method: 'GET',
			credentials: 'same-origin',
		},
	)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}

			throw new Error(`${response.status} ${response.statusText}`);
		})
		.then((data) => {
			renderCards(data);
		})
		.catch((err) => {
			console.log(err);
		});
};

function renderCards(cards) {
	cards.slice(MIN_RANGE, MAX_RANGE).forEach((card) => {
		if (cardListElement.childElementCount < MAX_COUNT) {
			cardListElement.append(renderCard(card));

			MIN_RANGE++;
			MAX_RANGE++;

			limitChecker();
		}
	});

}

export const initCardLoader = () => showMoreElement.addEventListener('click', showMoreCards);
