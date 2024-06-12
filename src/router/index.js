
import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import Home from '@/pages/Home.vue'
import History from '@/pages/History.vue'
import Product from '@/pages/Product.vue'
import Culture from '@/pages/Culture.vue'
import MeetingAccount from '@/pages/MeetingAccount.vue'
import SignUp from '@/pages/SignUp.vue'
import Login from '@/pages/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', name: "Main", component: Main },
        { path: '/home', name: "Home", component: Home },
        { path: '/history', name: "History", component: History }, // transaction history
        { path: '/product', name: "Product", component: Product },
        { path: '/culture', name: "Culture", component: Culture },
        { path: '/meeting-account', name: "MeetingAccount", component: MeetingAccount },
        { path: '/signup', name: "SignUp", component: SignUp },
        { path: '/login', name: "Login", component: Login },
        
    ]
})

export default router;