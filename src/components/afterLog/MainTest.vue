<template>
  <main class="test">
    <div class="test__container">
      <h1>Завдання від Римусі для 1-го класу</h1>
      <div class="test__body">
        <div class="test__section">
          <div class="test__number-question">Завдання 1</div>
          <div class="test__question">Добери рими:</div>
          <div class="test__essence">
            <div class="test__essence-true" v-if="isActive">
              <div class="test__essence-question">Рибка -</div>
              <div class="test__essence-text"></div>
              <div class="test__essence-container">
                <p>+1</p>
                <img src="../../assets/main/trueAnswer.png" alt="trueAnswer" />
              </div>
            </div>
            <div class="test__essence-true" v-else>
              <div class="test__essence-question">Рибка -</div>
              <div class="test__essence-text"></div>
            </div>
          </div>

          <div class="test__options">
            <div v-for="(question, index) in quiz.questions" :key="index">
              <!-- Hide all questions, show only the one with index === to current question index -->
              <div v-show="index === questionIndex">
                <ol>
                  <li
                    v-for="response in question.responses"
                    :key="response.text"
                  >
                    <label :class="{ test__right: isActive }">
                      <input
                        type="radio"
                        @click="isActive = !isActive"
                        v-bind:value="response.correct"
                        v-bind:name="index"
                        v-model="userResponses[index]"
                      />
                      {{ response.text }}
                    </label>
                  </li>
                </ol>
                <!-- The two navigation buttons -->
                <!-- Note: prev is hidden on first question -->
                <button
                  v-if="questionIndex > 0"
                  v-on:click="prev"
                  class="test__prev-question"
                >
                  Минуле завдання
                </button>
                <button class="test__next-question" @click="next">
                  Наступне завдання
                </button>
              </div>
            </div>
            <div v-show="questionIndex === quiz.questions.length">
              <h2>Quiz finished</h2>
              <p>Total score: {{ score() }} / {{ quiz.questions.length }}</p>
            </div>
          </div>
        </div>
        <div class="test-result">
          <div class="result__message" v-if="isActive">
            <p>Ти зараз на <br />правильному шляху!</p>
            <img src="../../assets/main/Answer.png" alt="Answer" />
          </div>
          <div class="result__message" v-else>
            <p>Не бійся помилятися!</p>
            <img src="../../assets/main/Answer.png" alt="Answer" />
          </div>
          <div class="result">
            <div class="result__body">
              <div class="result__question-number">Завдання 1 з 15</div>
              <img
                class="result__rymysja"
                src="../../assets/main/StartTest.png"
                alt="Rymysja"
              />
              <div class="result__info-test">
                <div class="result__currect-answer">
                  Бали <strong>0</strong>
                </div>
                <div class="result__current-time">
                  Час <strong>19:29</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
let quiz = {
  title: "My quiz",
  questions: [
    {
      text: "Question 1",
      responses: [
        { text: "Шибка" },
        { text: "Жабка", correct: true },
        { text: "Жучок" },
      ],
    },
    {
      text: "Question 2",
      responses: [
        { text: "Шибка" },
        { text: "Жабка", correct: true },
        { text: "Жучок" },
      ],
    },
  ],
};

export default {
  data: () => ({
    quiz,
    isActive: false,
    questionIndex: 0,
    // An array initialized with "false" values for each question
    // It means: "did the user answered correctly to the question n?" "no".
    userResponses: Array(quiz.questions.length).fill(false),
  }),
  methods: {
    // Go to next question
    next: function () {
      this.questionIndex++;
    },
    // Go to previous question
    prev: function () {
      this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      return this.userResponses.filter(function (val) {
        return val;
      }).length;
    },
  },
  comments: {
    currectAnswer: () => {
      return {
        "current-answer": this.isActive && !this.isError,
        "bad-answer": this.isError && this.isError.type === "fatal",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  &__container {
    padding: 0 80px;
  }
  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #353535;
    margin: 30px 0 55px 0;
  }
  // .test__body
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  // .test__number-question
  &__number-question {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-bottom: 13px;
  }
  // .test__question
  &__question {
    color: #353535;
    margin-bottom: 48px;
  }
  &__essence {
    display: flex;
  }
  // .test__essence-question
  &__essence-question {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-bottom: 7px;
    margin-right: 7px;
  }
  &__essence-true {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    margin-bottom: 15px;
  }
  &__essence-text {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #62c567;
    margin-bottom: 10px;
  }
  &__essence-container {
    position: absolute;
    left: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__essence-container img {
    z-index: 1;
    position: relative;
  }
  &__essence-container p {
    z-index: 2;
    position: absolute;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #62c567;
    margin-bottom: 10px;
  }
  // .test__options
  &__options {
    margin-bottom: 83px;
  }
  &__options ol {
    display: flex;
    margin-bottom: 90px;
  }
  &__options label {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    font-weight: 500;
    padding: 9px 14px;
    border: 1px solid #62c567;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 20px;
  }
  &__right {
    color: #ffffff;
    background: #62c567;
  }
  // .test__next-question
  &__next-question {
    max-width: 250px;
    font-weight: 500;
    color: rgba(53, 53, 53, 0.6);
    background: rgba(170, 93, 129, 0.1);
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding: 8.5px 38px;
  }
  &__prev-question {
    max-width: 230px;
    font-weight: 500;
    color: rgba(53, 53, 53, 0.6);
    background: rgba(170, 93, 129, 0.1);
    border-radius: 10px;
    padding: 8.5px 38px;
    margin-right: 20px;
  }

  @media (max-width: 1180px) {
    &__container {
      padding: 0 calc(20px + (80 - 20) * ((100vw - 320px) / (1180 - 320)));
    }
    h1 {
      font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1180 - 320)));
      line-height: calc(26px + (44 - 26) * ((100vw - 320px) / (1180 - 320)));
    }
    &__options label {
      font-weight: 500;
      font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1180 - 320)));
      line-height: calc(20px + (22 - 20) * ((100vw - 320px) / (1180 - 320)));
      text-decoration: none;
      font-weight: 500;
      padding: 9px calc(10px + (14 - 10) * ((100vw - 320px) / (1180 - 320)));
      border: 1px solid #62c567;
      box-sizing: border-box;
      border-radius: 10px;
      margin-right: 20px;
    }
  }

  @media (max-width: 900px) {
    &__body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 480px) {
    .result__message {
      display: none;
    }
    h1 {
      text-align: center;
    }
  }
}
.test-result {
  display: flex;
  align-items: flex-start;
}
.result {
  // .result__body
  &__rymysja {
    border: 1px solid #aa5d81;
    box-sizing: border-box;
    border-radius: 50%;
    margin-bottom: 40px;
  }

  // .result__question-number
  &__question-number {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-bottom: 28px;
    text-align: center;
  }
  // .result__currect-answer
  &__currect-answer {
    color: #000000;
    font-weight: 500;
  }
  &__currect-answer strong {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #62c567;
    margin-left: 5px;
  }
  &__info-test {
    display: flex;
    justify-content: space-between;
  }
  // .result__current-time
  &__current-time {
    color: #000000;
    font-weight: 500;
  }
  &__current-time strong {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #ea4335;
    margin-left: 5px;
  }
  &__message {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  &__message img {
    position: relative;
    z-index: 1;
  }
  &__message p {
    z-index: 2;
    position: absolute;
    margin-bottom: 20px;

    font-size: 16px;
    line-height: 20px;
    color: #353535;
  }
}
.current-answer {
  color: #fff;
  background: #62c567;
  border-radius: 10px;
}
.bad-answer {
  color: #fff;
  background: #ea4335;
  border-radius: 10px;
}
.active-button {
  font-weight: 500;
  color: #ffffff;
  background: #aa5d81;
  border-radius: 10px;
  padding: 5px 38px;
}
</style>
