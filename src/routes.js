import Home from './components/Home.vue'
import AddBlog from './components/AddBlog.vue'

export const routes = [
    { path: '', component: Home, name: 'home' },
    { path: '/add', component: AddBlog, name: 'add' },
    { path: '*', redirect: { name: 'home' } }
];
