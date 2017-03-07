import 'whatwg-fetch';
import Vue from 'vue';
import Application from './components/application.vue';

const app = new Vue(Application);

app.$mount('.app'); // we're pasting our app template to the .app class?
