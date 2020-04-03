// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'vant/lib/index.css'
import { Button, Swipe, SwipeItem, Lazyload, NavBar, Icon, Sticky, Tabbar, TabbarItem} from 'vant';

Vue.use(Button).use(Swipe).use(SwipeItem).use(Lazyload).use(NavBar).use(Icon).use(Sticky).use(Tabbar).use(TabbarItem);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
