import Vue from 'vue'
import Router from 'vue-router'
import User from "../components/User";
import UserDetail from "../components/UserDetail";
import Home from "../components/Home";


Vue.use(Router)

export default new Router({
  routes: [
      {path:"/Home",component:Home},
      {path:"/User",component:User},
      {path:"/UserDetail",component:UserDetail},
  ]
})
