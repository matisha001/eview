/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:14:12 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:20:50
 */
/*
  引用方式
    1、全局引用  Vue.use(eview);
    按需引入
    babel-plugin-component
    2、import { etable, eform } from 'eview';
      Vue.component('etable', etable);
    3、import { etable, eform } from 'eview';
      Vue.use(etable)
 */



import Vue from 'vue'

import App from './App'
/*
import eview from '../src/main';
Vue.use(eview);
*/

import { etable, eform } from '../src/main';
/*
  Vue.use(etable);
  Vue.use(eform);
*/
Vue.component('etable', etable);
Vue.component('eform', eform);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
