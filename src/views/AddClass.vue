<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close">
          <router-link to="/" class="modal-header"></router-link>
        </div>
        <form @submit.prevent="sendInfoHandler()" class="modal__body">
          <div class="modal__title">Додати клас</div>
          <div class="modal__description">
            Заповніть необхідну інформацію для реєстрації нового класу
          </div>
          <div class="modal__input">
            <input v-model="school" type="text" placeholder="Школа" />
          </div>
          <div class="modal__category">
            <button>
              <img
                src="../assets/icon/down-arrow.png"
                alt="Load"
              />Завантажити<br />
              список учнів
            </button>
            <button>
              <img src="../assets/icon/edit2.png" alt="Hand" />Додати список<br />
              вручну
            </button>
          </div>
          <div class="modal__button">
            <router-link to="/cabinetStatisticTeacher" class="back"
              >Скасувати</router-link
            >
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
    school: "",
  }),
  methods: {
    sendInfoHandler() {
      console.log(this.school);
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
  position: relative;
  max-width: 850px;
  margin: 0px auto;
  padding: 45px 30px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 20px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
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
    margin: 0px 20px;
    width: 100%;
  }

  &__input input {
    margin-bottom: 10px;
    box-sizing: border-box;
    padding-left: 20px;
    border: none;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
    border-radius: 10px;
  }

  &__input input:last-child {
    margin-bottom: 0px;
  }

  // .modal__category

  &__category {
    display: flex;
    margin-top: 26px;
    max-width: 425px;
  }

  &__category button {
    display: flex;
    align-items: center;

    cursor: pointer;
    background: #dbefdc;
    border-radius: 10px;
    min-width: 185px;
    padding: 5px 5px;
    margin-right: 36px;
  }

  &__category button:last-child {
    margin-right: 0px;
  }
  &__category button img {
    margin: 0 14px;
  }

  // .modal__button

  &__button {
    align-self: center;
    margin-top: 40px;
  }
  &__button button,
  &__button a {
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
    width: calc(300px + (526 - 300) * ((100vw - 320px) / (1440 - 320)));
    padding-top: calc(30px + (74 - 30) * ((100vw - 320px) / (1440 - 320)));
  }
  .modal {
    // .modal__title
    &__title {
      font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(26px + (44 - 26) * ((100vw - 320px) / (1440 - 320)));
    }

    &__description {
      line-height: calc(16px + (22 - 16) * ((100vw - 320px) / (1440 - 320)));
      max-width: calc(200px + (301 - 200) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(15px + (34 - 15) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal__input
    &__input {
      max-width: calc(200px + (315 - 200) * ((100vw - 320px) / (1440 - 320)));
    }

    &__input input {
      padding: 0px calc(10px + (20 - 10) * ((100vw - 320px) / (1440 - 320)));
    }
    &__category button {
      margin-right: calc(0px + (36 - 0) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal__button
    &__button {
      margin-bottom: calc(15px + (40 - 15) * ((100vw - 320px) / (1440 - 320)));
    }

    &__button-forgot {
      margin-bottom: calc(10px + (34 - 10) * ((100vw - 320px) / (1440 - 320)));
    }
  }
}

@media (max-width: 767px) {
  .modal {
    &__category {
      display: flex;
      flex-direction: column;
    }
    &__category button {
      padding: 10px 10px;
      margin-right: 0px;
      margin-bottom: 10px;
    }

    &__button {
      margin-top: 10px;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__button button,
    &__button a {
      padding: 8px 58px;
      margin-right: 0px;
      margin-bottom: 10px;
    }
    &__button button,
    &__button a :last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
