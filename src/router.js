import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/directive",
      name: "directive",
      component: () => import("./views/directive-learn/1.directive.vue")
    },
    {
      path: "/computed",
      name: "computed",
      component: () => import("./views/directive-learn/2.computed.vue")
    },
    {
      path: "/classstyle",
      name: "classstyle",
      component: () => import("./views/directive-learn/3.classStyle.vue")
    }
  ]
});