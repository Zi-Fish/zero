// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
			name: 'guanyu',
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: 'news',
					component: News,
				},
				{
					path: 'message',
					component: Message,
					children: [
						{
							name: 'xiangqing',
							path: 'detail/:id/:title',//占位，读取
							component: Detail,
							// 值为对象,该对象所有的key-value都会以props的形式传给对应组件
							// props:{a:1,b:'hello'},

							// 值为布尔值，为真则会把该路由组件收到的所有params参数，以props的形式Detail组件
							// props:true

							// 值为函数
							// props($route){
							// 	return {id:$route.query.id,title:$route.query.title}
							// }

							props({ query }) {
								return {
									 id:query.id, title:query.title
									 }

								//解构赋值连续写法
								// props({ query: { id, title } }){
								// 	return { id, title }
								}
							}
					]
				}
			]
		}
	]
})
