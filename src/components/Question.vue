<script setup>
import {defineProps, defineEmits} from "vue"

const {question} = defineProps(['question'])

const emit = defineEmits(["selectOption"])

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect)
}

</script>

<template>
  <div class="question-container">
    <h1 class="question">
      {{question.text}}
    </h1>
  </div>
  <div class="options-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <p class="option-label">{{option.label}}</p>
      <div class="option-value">
        <p>{{option.text}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 30px;
}
.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background-color: yellowgreen;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: rgb(224,239,239);
  font-size: 30px;
  width: 100%;
  padding: 0 20px;
}
</style>