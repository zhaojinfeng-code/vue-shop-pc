import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

 const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
	{ path: '/home', component: Home }]
})
router.beforeEach((to,from,next)=>{
	if(to.path=="/login") next()
	//如果没有token直接返回到login页面，否则放行
	const token = window.sessionStorage.getItem("token")
	
	if(!token) return next("/login")
	next()
	
})
export default router;