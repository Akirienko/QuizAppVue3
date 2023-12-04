<script setup>
import {defineProps} from "vue"
import { RouterLink } from "vue-router";

const {quizQuestionLenght, numberOfCorrectAnswers} = defineProps(["quizQuestionLenght", "numberOfCorrectAnswers"])

</script>

<template>
  <div class="result">
    <p> Your result...</p>
    <h1>{{ numberOfCorrectAnswers }} / {{ quizQuestionLenght }}</h1>
    <RouterLink to="/">Go Home</RouterLink>
  </div>
</template>

<style scoped>
.result {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 25px;
}
h1 {
  font-style: 50px;
}
</style>