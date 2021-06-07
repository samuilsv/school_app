<template>
  <div class="modal-mask">
    <div class="modal-container">
      <div class="modal-close">
        <router-link to="/" class="modal-header"></router-link>
      </div>
      <div class="modal-student">
        <div class="modal-student__body">
          <div class="modal-student__title">Оновити інформацію</div>
          <div class="modal-student__top">
            <img
              class="modal-student__photo"
              src="../../assets/main/Teacher.png"
              alt="Teacher"
            />
            <router-link to="/updatePhotoTeacher" class="modal-student__button"
              >Редагувати</router-link
            >
          </div>
          <form @submit="changeHandler()" class="modal-student__bottom">
            <div class="modal-student__change">
              ПІБ<input
                type="text"
                v-model="studentData"
                placeholder="Петро Пяточкін"
              />
            </div>
            <div class="modal-student__change">
              Школа<input type="text" v-model="school" placeholder="№36" />
            </div>
            <div class="modal-student__change">
              Email<input
                type="text"
                v-model="email"
                placeholder="p.pyatochkin@gmail.com"
              />
            </div>
            <div class="modal-student__change">
              Пароль<input
                type="password"
                v-model="password"
                placeholder="••••••••"
              />
            </div>
            <div class="modal-student__save">
              <button type="submit">Зберегти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    studentData: "",
    school: "",
    classStudent: "",
    email: "",
    password: "",
  }),
  methods: {
    changeHandler() {
      console.log(this.school);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  background-color: rgba(41, 41, 41, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  margin: 10px 0;
  position: relative;
  height: auto;
  max-width: 530px;
  padding: 52px 46px 5px 60px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 20px;
}

.modal-close {
  position: absolute;
  top: 3%;
  left: 93%;
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

.modal-student {
  // .modal-student__body
  &__body {
    background: #ffffff;
  }

  &__title {
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #353535;
    margin-bottom: 26px;
  }

  // .modal-student__top
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .modal-student__photo
  &__photo {
    margin-bottom: 25px;
    margin-right: 30px;
    display: block;
    max-width: 100%;
    height: 10%;
  }

  // .modal-student__button
  &__button {
    position: relative;
    font-weight: 500;
    color: rgba(53, 53, 53, 0.6);
    background: #e5e5e5;
    border-radius: 10px;
    padding: 9px 18px 9px 38px;
    cursor: pointer;
  }
  &__button::before {
    align-self: center;
    position: absolute;
    top: 25%;
    left: 10%;
    content: url("../../assets/icon/ChangeIcon.svg");
  }

  // .modal-student__bottom
  &__bottom {
    max-width: 420px;
    color: rgba(53, 53, 53, 0.6);
  }
  &__bottom input {
    border: none;
    padding-left: 20px;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
    border-radius: 10px;
    color: #353535;
    max-width: 275px;
  }
  // .modal-student__change
  &__change {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__save {
    cursor: pointer;
    padding: 8px 28px;
    max-width: 140px;
    margin: 25px auto;
    line-height: 22px;
    background-color: rgba(170, 93, 129, 0.1);
    border-radius: 10px;
  }
  &__save button {
    cursor: pointer;
    color: rgba(53, 53, 53, 0.6);
  }
}

@media (max-width: 1440px) {
  .modal-container {
    max-width: calc(310px + (523 - 310) * ((100vw - 320px) / (1440 - 320)));
    padding: calc(30px + (52 - 30) * ((100vw - 320px) / (1440 - 320)))
      calc(30px + (46 - 30) * ((100vw - 320px) / (1440 - 320))) 5px
      calc(30px + (60 - 30) * ((100vw - 320px) / (1440 - 320)));
  }

  .modal-student {
    &__title {
      font-size: calc(20px + (36 - 20) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(22px + (44 - 22) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(5px + (36 - 5) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal-student__photo
    &__photo {
      margin-bottom: calc(5px + (25 - 5) * ((100vw - 320px) / (1440 - 320)));
      margin-right: calc(2px + (30 - 2) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal-student__button
    &__button {
      padding: calc(6px + (9 - 6) * ((100vw - 320px) / (1440 - 320)))
        calc(13px + (18 - 13) * ((100vw - 320px) / (1440 - 320)))
        calc(6px + (9 - 6) * ((100vw - 320px) / (1440 - 320)))
        calc(30px + (38 - 30) * ((100vw - 320px) / (1440 - 320)));
      font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1440 - 320)));
    }
    &__button::before {
      align-self: center;
      position: absolute;
      top: 25%;
      left: 10%;
      content: url("../../assets/icon/ChangeIcon.svg");
    }

    // .modal-student__bottom
    &__bottom {
      max-width: calc(320px + (420 - 320) * ((100vw - 320px) / (1440 - 320)));
    }
    &__bottom input {
      border: none;
      padding-left: 20px;
      background: #ffffff;
      box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
      border-radius: 10px;
      color: #353535;
      max-width: calc(175px + (275 - 175) * ((100vw - 320px) / (1440 - 320)));
    }
    &__save {
      padding: calc(5px + (8 - 5) * ((100vw - 320px) / (1440 - 320)))
        calc(15px + (28 - 15) * ((100vw - 320px) / (1440 - 320)));
      margin: calc(10px + (25 - 10) * ((100vw - 320px) / (1440 - 320))) auto;
    }
  }
  @media (max-width: 768px) {
    .modal-student {
      // .modal-student__top
      &__top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      &__bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      // .modal-student__change
      &__change {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
    }
  }
}
</style>
