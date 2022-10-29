import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faDashboard } from '@fortawesome/free-solid-svg-icons/faDashboard';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebook, faUser, faDashboard);

export default FontAwesomeIcon;