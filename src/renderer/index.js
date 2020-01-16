//import the vue library
import Vue from 'vue'
//import the vuetify UI component plugin
import vuetify from '../plugins/vuetify'
//import our custom test component to verify that veutify is working
import App from './App.vue'

//create the new vue instance.
//replace the <test/> tag with our custom test component (imported above)
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    vuetify: vuetify
})
