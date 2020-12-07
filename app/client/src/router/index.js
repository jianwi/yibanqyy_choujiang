import vueRouter from 'vue-router';
import Home from "@/views/Home";
import LuckyDraw from "@/views/LuckyDraw";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/lucky-draw',
    component: LuckyDraw
  }
]

export default new vueRouter({ routes })