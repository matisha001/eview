/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:12:14 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-03 17:12:40
 */

import etable from './table.vue';

/*
import  { etable } from 'aview';
使用Vue.use(etable)
*/
etable.install = function (Vue) {
    Vue.component(etable.name, etable);
};
export default etable;