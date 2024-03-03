import InputTag from './components/InputTag.vue';
import App from './App.vue';
import { createApp } from 'vue';    

const app = createApp(App);
app.component('InputTag', InputTag);    
app.mount('#app');

export { InputTag };
