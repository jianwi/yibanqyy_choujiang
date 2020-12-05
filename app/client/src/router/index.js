import vueRouter from 'vue-router';
import Home from "@/views/Home";

const routes = [
  {
    path: '/',
    component: Home
  }
]

export default new vueRouter({ routes })