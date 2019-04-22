import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faHome)

export default () => {
  Vue.component('font-awesome-icon', FontAwesomeIcon)
}
