import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: () => import("../components/sign_up.vue"),
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/student',
    name: 'student.list',
    component: () => import('../views/student/StudentList.vue'),
  },
  {
    path: '/HomeGV',
    name: 'HomeGV.list',
    component: () => import('../views/HomeGV.vue'),
  },
  {
    path: '/student/create',
    name: 'student.form',
    component: () => import('../views/student/StudentForm.vue'),
  },
  {
    path: '/student/edit/:id',
    name: 'student.edit',
    component: () => import('../views/student/StudentForm.vue'),
  },
  {
    path: '/user',
    name: 'user.form',
    component: () => import('../views/users/UserList.vue'),
  },
  {
    path: '/user/create',
    name: 'user.list',
    component: () => import('../views/users/UserForm.vue'),
  },
  {
    path: '/user/edit/:id',
    name: 'admin.edit',
    component: () => import('../views/users/UserForm.vue'),
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
