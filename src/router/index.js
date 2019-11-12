import Home from '../pages/Home/Home'
import UserList from '../pages/Home/UserList'
import Delete from '../pages/Home/Delete'
import Update from '../pages/Home/Update'
import Select from '../pages/Home/Select'
import Personal from '../pages/Head/Personal'

let routes = [
    { path: '/', component: Home, exact: true },
    { path: '/userlist', component: UserList },
    { path: '/delete', component: Delete },
    { path: '/update', component: Update },
    { path: '/select', component: Select },
    { path: '/personal', component: Personal },
];

export default routes;