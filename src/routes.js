// Page Imports
import Home from './pages/Home.vue';
import Error404 from './pages/Error404.vue';

// Routes
const routes = [
  { path: '/', component: Home },
  { path: '*', component: Error404 },
];

export default routes;
