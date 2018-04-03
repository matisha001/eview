import etable from './component/table';
import eform from './component/form';
const components = {
  etable,
  eform
}

const eview = {
  ...components
}

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  Object.keys(eview).forEach(key => {
    Vue.component(key, eview[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  install,
  ...components
};
module.exports.default = module.exports = API;