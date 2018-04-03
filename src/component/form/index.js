/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:10:15 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:13:02
 */

import eform from './form.vue';

/*
import  { eform } from 'aview';
使用Vue.use(eform)
*/
eform.install = function (Vue) {
    Vue.component(eform.name, eform);
};
export default eform;