import Head from './Head.vue';
// import Banner from './Banner.vue';
// import Banner1 from './Banner1.vue';
// import Banner2 from './Banner2.vue';
// import Banner3 from './Banner3.vue';
// import Notice from './Notice.vue';
import Foot from './Foot.vue';
import Contactcustomerservice from './contactcustomerservice';

const myComponts = {
  install: function (Vue) {
    Vue.component('Head', Head);
    // Vue.component('Banner', Banner);
    // Vue.component('Banner1', Banner1);
    // Vue.component('Banner2', Banner2);
    // Vue.component('Banner3', Banner3);
    // Vue.component('Notice', Notice);
    Vue.component('Foot', Foot);
    Vue.component('Contactcustomerservice', Contactcustomerservice);
  }
};

export default myComponts;
