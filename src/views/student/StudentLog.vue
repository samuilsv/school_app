<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close">
          <router-link to="/" class="modal-header"></router-link>
        </div>
        <div class="modal__body">
          <div class="modal__title">Вхід для учня</div>
          <div class="modal__description">Заповніть поля нижче</div>
          <form
            id="signin-form"
            @submit.prevent="submitHandler"
            class="modal__input"
          >
            <input v-model="name" type="text" placeholder="Введіть ім’я" />
            <input
              v-model="password"
              type="password"
              placeholder="Введіть пароль"
            />
            <div class="modal__button">
              <button type="submit">Далі</button>
            </div>
          </form>

          <div class="modal__button-forgot">
            <router-link to="/">Забув пароль?</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    password: "",
  }),
  methods: {
    submitHandler() {
      console.log({ name: this.name, password: this.password });
      this.$router.push("/homeAfterLogStudent");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(41, 41, 41, 0.5);
  transition: opacity 0.3s ease;
}

.modal-container {
  position: relative;
  width: 526px;
  margin: 0px auto;
  padding-top: 74px;
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
  margin-bottom: 34px;
}
.modal-input {
  display: flex;
  flex-direction: column;
  max-width: 315px;
  margin: 0 auto;
}
.modal-input input {
  background: #ffffff;
  border: none;
  box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
  border-radius: 10px;
  line-height: 22px;
  padding: 9px 20px;
  color: #525557;
  margin-bottom: 10px;
}

.modal-button {
  align-self: center;
  margin-bottom: 40px;
}
.modal-button button {
  line-height: 22px;
  padding: 8px 28px;

  color: rgba(53, 53, 53, 0.6);
  background: rgba(170, 93, 129, 0.1);
  border: 0px;
  border-radius: 10px;
  text-decoration: none;
}

.modal {
  // .modal__body
  &__body {
    display: flex;
    flex-direction: column;
  }

  // .modal__title
  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    align-self: center;
    margin-bottom: 10px;
  }

  // .modal__description
  &__description {
    line-height: 22px;
    align-self: center;
    max-width: 301px;

    color: #000000;
    margin-bottom: 34px;
  }

  // .modal__input
  &__input {
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 315px;
  }

  &__input input {
    background: #ffffff;
    border: none;
    box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
    border-radius: 10px;
    line-height: 22px;
    padding: 0px 20px;
    color: #525557;
    margin-bottom: 10px;
  }

  // .modal__button
  &__button {
    align-self: center;
    margin-bottom: 40px;
    margin-top: 40px;
  }

  &__button button {
    line-height: 22px;
    padding: 8px 28px;

    color: rgba(53, 53, 53, 0.6);
    background: rgba(170, 93, 129, 0.1);
    border: 0px;
    border-radius: 10px;
    text-decoration: none;
  }

  &__button-forgot {
    text-align: center;
    margin-bottom: 34px;
  }
  &__button-forgot a {
    color: #7b7b7b;
  }
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
      margin-bottom: calc(7px + (10 - 7) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal__button
    &__button {
      margin-bottom: calc(15px + (40 - 15) * ((100vw - 320px) / (1440 - 320)));
      margin-top: calc(15px + (40 - 15) * ((100vw - 320px) / (1440 - 320)));
    }

    &__button button {
      line-height: calc(16px + (22 - 16) * ((100vw - 320px) / (1440 - 320)));
      padding: 8px calc(18px + (28 - 18) * ((100vw - 320px) / (1440 - 320)));
    }

    &__button-forgot {
      margin-bottom: calc(10px + (34 - 10) * ((100vw - 320px) / (1440 - 320)));
    }
  }
}
</style>
