import { createRouter, createWebHistory } from 'vue-router'
import QuestionsViews from "../views/QuestionsViews.vue"
import QuizesViews from "../views/QuizesViews.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'quizes',
      component: QuizesViews
    },
    {
      path: "/questions/:name",
      name: "question",
      component: QuestionsViews
    }
  ]
})

export default router