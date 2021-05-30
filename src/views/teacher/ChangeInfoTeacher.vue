<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <router-link to="/" class="modal-header"></router-link>
        <div class="info-student">
          <div class="info-student__body">
            <div class="info-student__title">Оновити інформацію</div>
            <div class="info-student__top">
              <img
                class="info-student__photo"
                src="../../assets/main/Teacher.png"
                alt="Teacher"
              />
              <router-link to="/updatePhoto" class="info-student__button"
                >Редагувати</router-link
              >
            </div>
            <form @submit="changeHandler()" class="info-student__bottom">
              <div class="info-student__change">
                ПІБ<input
                  type="text"
                  v-model="studentData"
                  placeholder="Петро Пяточкін"
                />
              </div>
              <div class="info-student__change">
                Школа<input type="text" v-model="school" placeholder="№36" />
              </div>
              <div class="info-student__change">
                Email<input
                  type="text"
                  v-model="email"
                  placeholder="p.pyatochkin@gmail.com"
                />
              </div>
              <div class="info-student__change">
                Пароль<input
                  type="password"
                  v-model="password"
                  placeholder="••••••••"
                />
              </div>
              <div class="info-student__save">
                <button type="submit">Зберегти</button>
              </div>
            </form>
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
  max-width: 530px;
  padding: 52px 46px 5px 60px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 20px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  opacity: 0.4;
  width: 24px;
  height: 24px;
  top: -1rem;
  left: 26rem;
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
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  transform: rotate(45deg);
  left: -12px;
}

.modal-header::after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  transform: rotate(-45deg);
  right: -13px;
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
  }

  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #353535;
    margin-bottom: 26px;
  }

  // .info-student__top
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .info-student__photo
  &__photo {
    margin-bottom: 25px;
    margin-right: 30px;
    display: block;
    max-width: 100%;
    height: 10%;
  }

  // .info-student__button
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

  // .info-student__bottom
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
  // .info-student__change
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
</style>
