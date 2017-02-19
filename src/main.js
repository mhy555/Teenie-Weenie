import Vue from 'vue';
import VueRouter from 'vue-router';
import main from './components/Main.vue'
import App from './App.vue';
import video from './components/Video.vue'
import picture from './components/Picture.vue'
import aboutMe from './components/AboutMe.vue'
import game from './components/Game.vue'

Vue.use(VueRouter)
// Vue.use(require('vue-resource'));

// window.onerror = function(msg, source, lineno, colno, error){
//     var errorData = {
//         desc: msg,
//         url: source,
//         line: lineno,
//         col: colno,
//         stackTrace: error ? JSON.stringify(error) : ''
//     }
//     console.error(JSON.stringify(errorData));
//     eventLogger.error('uncatch_error', errorData);
//     return true;
// }

// /* eslint-disable no-new */

var router = new VueRouter();

router.map({
  '/': {
    name: 'main',
    component: main
  },
  '/video': {
    name: 'video',
    component: video
  },
  '/picture': {
    name: 'picture',
    component: picture
  },
  '/game': {
    name: 'game',
    component: game
  },
  '/about': {
    name: 'about',
    component: aboutMe
  }
});

router.start(App, '#app');

// // var wait = require('bundle?name=[name]!../node_modules/fastclick/lib/fastclick.js')
// // wait(function(FastClick) {
// //     FastClick.attach(document.body);
// // });

