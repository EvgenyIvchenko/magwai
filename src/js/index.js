import 'wicg-inert';
import 'what-input';
import { defocusButton } from './modules/defocus-button.js';
import { initPhoneMask } from './modules/init-phone-mask.js';
import { initPhoneHref } from './modules/init-phone-href.js';
import { initBurgerMenu } from './modules/init-burger-menu.js';
import { test } from './modules/card.js';

defocusButton();
initPhoneHref();
initPhoneMask();
initBurgerMenu();
console.log(test());
