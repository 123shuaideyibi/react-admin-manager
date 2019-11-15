import Home from '../pages/Home/Home'
import UserList from '../pages/Home/UserList'//用户列表
import ArticleList from '../pages/Home/ArticleList'//文章列表
import Personal from '../pages/Home/Personal'//文章列表

let routes = [
    { path: '/', component: Home, exact: true },
    { path: '/userlist', component: UserList },
    { path: '/articleList', component: ArticleList },
    { path: '/personal', component: Personal },
];

export default routes;
