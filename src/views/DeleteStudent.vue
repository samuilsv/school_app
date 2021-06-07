<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close">
          <router-link to="/" class="modal-header"></router-link>
        </div>
        <div class="info-student">
          <div class="info-student__body">
            <div class="info-student__title">Видалити учня?</div>
            <div class="info-student__discription">
              Ви впевнені, що бажаєте видалити <br />учня з порталу?
            </div>
            <div class="info-student__button">
              <button class="info-student__button-save">Так</button>
              <router-link
                to="/cabinetStatisticTeacher"
                class="info-student__button-back"
                >Ні, скасувати</router-link
              >
            </div>
          </div>
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
  max-width: 543px;
  padding: 45px 112px 0px 112px;
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

.info-student {
  // .info-student__body
  &__body {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-weight: bold;
    text-align: center;
    font-size: 36px;
    line-height: 44px;
    color: #353535;
    margin-bottom: 26px;
  }

  &__discription {
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
  }

  // .button__save
  &__button {
    margin-bottom: 30px;
  }
  &__button-save {
    font-weight: 500;
    border: 1px solid #aa5d81;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 8.5px 14px;
    margin-right: 20px;
  }

  // .button__back
  &__button-back {
    font-weight: 500;
    color: #ffffff;
    background: #aa5d81;
    border-radius: 10px;
    padding: 8.5px 14px;
  }
}

@media (max-width: 1440px) {
  .modal-container {
    width: calc(300px + (543 - 300) * ((100vw - 320px) / (1440 - 320)));
    padding: calc(15px + (45 - 15) * ((100vw - 320px) / (1440 - 320)))
      calc(60px + (112 - 60) * ((100vw - 320px) / (1440 - 320))) 0
      calc(60px + (112 - 60) * ((100vw - 320px) / (1440 - 320)));
  }
  .info-student {
    // .modal__title
    &__title {
      font-size: calc(20px + (36 - 20) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(22px + (44 - 22) * ((100vw - 320px) / (1440 - 320)));
    }

    &__description {
      line-height: calc(16px + (22 - 16) * ((100vw - 320px) / (1440 - 320)));
      max-width: calc(200px + (301 - 200) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(15px + (34 - 15) * ((100vw - 320px) / (1440 - 320)));
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
  .info-student {
    &__category {
      display: flex;
      flex-direction: column;
    }

    &__button {
      margin-top: 10px;
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__button button {
      padding: 8px 58px;
      margin-right: 0px;
      margin-bottom: 10px;
    }
    &__button button:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
