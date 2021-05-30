<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <router-link to="/" class="modal-header"></router-link>
        <div class="info-student">
          <div class="info-student__body">
            <div class="info-student__title">Видалити учня?</div>
            <div class="info-student__discription">
              Ви впевнені, що бажаєте видалити <br />учня з порталу?
            </div>
            <div class="button">
              <button class="button__save">Так</button>
              <button class="button__back">Ні, скасувати</button>
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
  max-width: 543px;
  padding: 45px 112px 0px 112px;
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
  left: 25rem;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-weight: bold;
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

  .button {
    // .button__save
    margin-bottom: 30px;
    &__save {
      font-weight: 500;
      border: 1px solid #aa5d81;
      background-color: #fff;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 8.5px 14px;
      margin-right: 20px;
    }

    // .button__back
    &__back {
      font-weight: 500;
      color: #ffffff;
      background: #aa5d81;
      border-radius: 10px;
      padding: 8.5px 14px;
    }
  }
}
</style>
