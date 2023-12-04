<script setup>
import { ref, watch, computed } from "vue"
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import { useRoute } from 'vue-router';
import quizes from "../data/quizes.json"
import Result from "../components/Result.vue";

const route = useRoute()
const quizName = route.params.name
const quiz = quizes.find(q => q.name.toLowerCase() === quizName)
const currentQuestionIndex = ref(0)
const numberOfCorrectAnswers = ref(0)
const showResults = ref(false)

// const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)

// watch(() => currentQuestionIndex.value, () => {
//   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
// })

const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value / quiz.questions.length * 100}%`)

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++
  }

  currentQuestionIndex.value++

  if(quiz.questions.length === currentQuestionIndex.value){
    showResults.value = true
  }
}
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result
        v-else
        :quizQuestionLenght="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
    </div>
  </div>
</template>
