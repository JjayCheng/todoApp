const todo = () => import('../pages/todo/todo.vue');

export default [
  {
    path: '/',
    redirect: '/todo'
  },
  {
    path: '/todo',
    component: todo
  }
]