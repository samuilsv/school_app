<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close">
          <router-link to="/" class="modal-header"></router-link>
        </div>
        <div class="modal-body">
          <div class="modal-title">Вхід</div>
          <div class="modal-description">
            Для входу оберіть необхідний підрозділ порталу
          </div>
          <div class="modal-button">
            <router-link to="/studentLog">Учень</router-link>
            <router-link to="/teacherLog">Вчитель</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  position: relative;
  width: 526px;
  margin: 0px auto;
  padding: 90px 30px;
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

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-body {
  display: flex;
  flex-direction: column;
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
.modal-button {
  align-self: center;
}
.modal-button a {
  line-height: 22px;
  padding: 8px 28px;
  text-decoration: none;

  color: rgba(53, 53, 53, 0.6);
  background: rgba(170, 93, 129, 0.1);
  border: 0px;
  border-radius: 10px;
  margin-right: 10px;
}
.modal-button a:last-child {
  margin-right: 0px;
}

@media (max-width: 1440px) {
  .modal-container {
    width: calc(300px + (526 - 300) * ((100vw - 320px) / (1440 - 320)));
    padding: calc(40px + (90 - 40) * ((100vw - 320px) / (1440 - 320)))
      calc(15px + (30 - 15) * ((100vw - 320px) / (1440 - 320)));
  }
  .modal {
    // .modal__title
    &__title {
      font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(26px + (44 - 26) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(5px + (10 - 5) * ((100vw - 320px) / (1440 - 320)));
    }

    .modal-description {
      line-height: calc(16px + (22 - 16) * ((100vw - 320px) / (1440 - 320)));
      max-width: calc(200px + (301 - 200) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(15px + (45 - 15) * ((100vw - 320px) / (1440 - 320)));
    }
    .modal-button a {
      line-height: calc(16px + (22 - 16) * ((100vw - 320px) / (1440 - 320)));
      padding: calc(4px + (8 - 4) * ((100vw - 320px) / (1440 - 320)))
        calc(18px + (28 - 18) * ((100vw - 320px) / (1440 - 320)));
      margin-right: calc(5px + (10 - 5) * ((100vw - 320px) / (1440 - 320)));
    }
  }
}
</style>
