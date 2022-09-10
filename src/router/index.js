import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding";
import DataBindingHtml from "@/views/DataBindingHtml";
import DataBindingInputText from "@/views/DataBindingInputText";
import DataBindingCheckbox2 from "@/views/DataBindingCheckbox2";
import DataBindingRadio from "@/views/DataBindingRadio";
import DataBindingButton from "@/views/DataBindingButton";
import DataBindingClass from "@/views/DataBindingClass";
import DataBindingList from "@/views/DataBindingList";
import EventClick from "@/views/EventClick";
import EventChange from "@/views/EventChange";
import WatchTest from "@/views/WatchTest";
import DataBindingList2 from "@/views/DataBindingList2";
import ParentComponent from "@/views/ParentComponent";
import ParentComponent2 from "@/views/ParentComponent2";
import ParentComponent4 from "@/views/ParentComponent4";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/dataBindingHtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/dataBindingInputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/dataBindingCheckbox',
    name: 'dataBindingCheckbox',
    component: DataBindingCheckbox2
  },
  {
    path: '/dataBindingRadio',
    name: 'dataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/dataBindingButton',
    name: 'dataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/dataBindingClass',
    name: 'dataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/dataBindingList',
    name: 'dataBindingList',
    component: DataBindingList
  },
  {
    path: '/eventClick',
    name: 'eventClick',
    component: EventClick
  },
  {
    path: '/eventChange',
    name: 'eventChange',
    component: EventChange
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchTest
  },
  {
    path: '/dataBindingList2',
    name: 'dataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/parentComponent',
    name: 'parentComponent',
    component: ParentComponent
  },
  {
    path: '/parentComponent2',
    name: 'parentComponent2',
    component: ParentComponent2
  },
  {
    path: '/parentComponent4',
    name: 'parentComponent4',
    component: ParentComponent4
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
