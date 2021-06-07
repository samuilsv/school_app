<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close">
          <router-link to="/" class="modal-header"></router-link>
        </div>
        <form @submit.prevent="sendInfoHandler()" class="modal__body">
          <div class="modal__title">Додати учня</div>
          <div class="modal__description">
            Заповніть необхідну інформацію для реєстрації нового учня
          </div>
          <div class="modal__input">
            <input v-model="name" type="text" placeholder="Ім’я" />
            <input v-model="surname" type="text" placeholder="Прізвище" />
            <input v-model="fatherName" type="text" placeholder="По батькові" />
            <input v-model="schoolNum" type="text" placeholder="Школа" />
            <input v-model="classNum" type="text" placeholder="Класс" />
            <input
              v-model="email"
              type="text"
              placeholder="Електронна адреса"
            />
          </div>
          <div class="modal__button">
            <button class="back">Скасувати</button>
            <button type="submit" class="save">Зберегти</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    surname: "",
    fatherName: "",
    schoolNum: "",
    classNum: "",
    email: "",
  }),
  methods: {
    sendInfoHandler() {
      console.log(this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  padding: 0 10px;
  position: relative;
  max-width: 850px;
  margin: 0px auto;
  padding: 45px 30px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 7%;
  left: 94%;
}

.modal-header {
  opacity: 0.4;
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 3;
  border-radius: 6px;
}

.modal-header::before,
.modal-header::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 1.5px;
  background-color: rgb(0, 0, 0);
  border-radius: 2px;
}

.modal-header::before {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: -13px;
}

.modal-header::after {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  right: -12px;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal {
  // .modal__body
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  // .modal__title
  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    align-self: center;
    margin-bottom: 10px;
    font-stretch: normal;
  }

  // .modal__description
  &__description {
    line-height: 22px;
    align-self: center;
    text-align: center;
    max-width: 301px;

    color: #000000;
    margin-bottom: 45px;
  }

  // .modal__input
  &__input {
    margin: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input input {
    margin-bottom: 10px;
    box-sizing: border-box;
    padding-left: 20px;
    border: none;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
    border-radius: 10px;
    width: 666px;
  }

  &__input input:last-child {
    margin-bottom: 0px;
  }

  // .modal__button
  &__button {
    align-self: center;
    margin-top: 40px;
  }
  &__button button {
    line-height: 22px;
    padding: 8px 28px;

    color: rgba(53, 53, 53, 0.6);
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 20px;
  }

  &__button a:last-child {
    margin-right: 0px;
  }
}
.back {
  border: 1px solid rgba(170, 93, 129, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
}
.save {
  background-color: rgba(170, 93, 129, 0.1);
  border-radius: 10px;
}

@media (max-width: 1440px) {
  .modal-container {
    width: calc(310px + (850 - 310) * ((100vw - 320px) / (1440 - 320)));
    padding: calc(10px + (45 - 10) * ((100vw - 320px) / (1440 - 320)))
      calc(15px + (30 - 15) * ((100vw - 320px) / (1440 - 320)));
  }

  .modal {
    // .modal__title
    &__title {
      font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(26px + (44 - 26) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(5px + (10 - 5) * ((100vw - 320px) / (1440 - 320)));
    }

    &__description {
      line-height: calc(16px + (22 - 16) * ((100vw - 320px) / (1440 - 320)));
      max-width: calc(200px + (301 - 200) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(15px + (45 - 15) * ((100vw - 320px) / (1440 - 320)));
    }
    // .modal__input
    &__input {
      margin: 0px calc(10px + (40 - 10) * ((100vw - 320px) / (1440 - 320)));
    }

    &__input input {
      margin-bottom: calc(5px + (10 - 5) * ((100vw - 320px) / (1440 - 320)));
      padding-left: calc(10px + (20 - 10) * ((100vw - 320px) / (1440 - 320)));
      width: calc(222px + (666 - 222) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal__button
    &__button {
      align-self: center;
      margin-top: calc(5px + (40 - 5) * ((100vw - 320px) / (1440 - 320)));
    }
    &__button button {
      padding: 8px calc(18px + (28 - 18) * ((100vw - 320px) / (1440 - 320)));

      margin-right: calc(5px + (20 - 5) * ((100vw - 320px) / (1440 - 320)));
    }
  }
}
</style>
