import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { fas, faBriefcase, faNewspaper } from '@fortawesome/free-solid-svg-icons'
//import { far } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas, faBriefcase, faNewspaper);
//library.add(far);

/* add font awesome icon component */
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
