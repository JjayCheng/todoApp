import VueRouter from 'vue-router';
import routes from './routes';

export default () => {
  return new VueRouter({
    mode: 'hash',
    routes
  });
}