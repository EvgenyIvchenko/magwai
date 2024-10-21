import 'wicg-inert';
import 'what-input';
import { defocusButton } from './modules/defocus-button.js';
import { initPhoneMask } from './modules/init-phone-mask.js';
import { initPhoneHref } from './modules/init-phone-href.js';

defocusButton();
initPhoneHref();
initPhoneMask();
