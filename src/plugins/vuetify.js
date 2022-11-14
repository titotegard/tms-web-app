import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import preset from './default-preset/preset'

Vue.use(Vuetify)

const opts = {
  preset,
}

export default new Vuetify(opts)