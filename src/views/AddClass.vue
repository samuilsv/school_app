<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <router-link to="/" class="modal-header"></router-link>
        <form @submit.prevent="sendInfoHandler()" class="modal-body">
          <div class="modal-title">Додати клас</div>
          <div class="modal-description">
            Заповніть необхідну інформацію для реєстрації нового класу
          </div>
          <div class="modal-input">
            <input v-model="school" type="text" placeholder="Школа" />
          </div>
          <div class="modal-category">
            <button>
              <img src="../assets/icon/down-arrow.png" alt="Load" />Завантажити
              список учнів
            </button>
            <button>
              <img src="../assets/icon/edit2.png" alt="Hand" />Додати список
              вручну
            </button>
          </div>
          <div class="modal-button">
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
  max-width: 850px;
  margin: 0px auto;
  padding: 45px 30px;
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
  left: 28rem;
  position: relative;
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

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal-title {
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  align-self: center;
  margin-bottom: 10px;
  font-stretch: normal;
}
.modal-description {
  line-height: 22px;
  align-self: center;
  text-align: center;
  max-width: 301px;

  color: #000000;
  margin-bottom: 45px;
}
.modal-input {
  margin: 0px 20px;
  width: 100%;
}
.modal-input input {
  margin-bottom: 10px;
  box-sizing: border-box;
  padding-left: 20px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
  border-radius: 10px;
}
.modal-input input:last-child {
  margin-bottom: 0px;
}
.modal-category {
  display: flex;
  margin-top: 26px;
  max-width: 425px;
}
.modal-category button {
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  background: #dbefdc;
  border-radius: 10px;
  padding: 5px 5px;
  margin-right: 36px;
}
.modal-category button:last-child {
  margin-right: 0px;
}
.modal-category button img {
  margin-left: 10px;
}
.modal-button {
  align-self: center;
  margin-top: 40px;
}
.modal-button button {
  line-height: 22px;
  padding: 8px 28px;

  color: rgba(53, 53, 53, 0.6);
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 20px;
}
.modal-button a:last-child {
  margin-right: 0px;
}
.back {
  border: 1px solid rgba(170, 93, 129, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
}
.save {
  background-color: rgba(170, 93, 129, 0.1);
  border-radius: 10px;
}
</style>
