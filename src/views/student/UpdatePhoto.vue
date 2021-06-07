<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close">
          <router-link to="/" class="modal-header"></router-link>
        </div>
        <div class="modal__body">
          <div class="modal__title">Оновити фото</div>
          <div class="modal__action">
            <button class="modal__choise">
              <img src="../../assets/icon/UploadPhoto.svg" alt="ChangePhoto" />
              <p>Завантажити <br />нове фото</p>
            </button>
            <router-link to="/changePhotoStudent" class="modal__choise">
              <img src="../../assets/icon/ChangePhoto.svg" alt="ChangePhoto" />
              <p>Редагувати <br />поточне фото</p>
            </router-link>
          </div>
          <div class="modal__button">
            <button class="back">Скасувати</button>
            <button type="submit" class="save">Зберегти</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  position: relative;
  max-width: 472px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 5%;
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
    justify-content: center;
    align-items: center;
  }

  // .modal__title
  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #353535;
    margin: 36px 97px;
  }

  // .modal__action
  &__action {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__choise {
    max-width: 180px;
    margin-right: 20px;
    background-color: #fff;
    cursor: pointer;
    color: #000;
  }
  &__choise:last-child {
    margin-right: 0px;
  }

  &__action img {
    background-color: #c4c4c4;
    border-radius: 50%;
    padding: 68px 65px;
  }

  &__action p {
    text-align: center;
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
    margin-bottom: 58px;
  }
  &__button button:last-child {
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
    max-width: calc(350px + (472 - 350) * ((100vw - 320px) / (1440 - 320)));
    background: #ffffff;
    box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
    border-radius: 20px;
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header {
    margin-top: 25px;
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
    right: 12px;
  }

  .modal-header::after {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: -13px;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .modal {
    // .modal__title
    &__title {
      font-size: calc(26px + (36 - 26) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(26px + (44 - 26) * ((100vw - 320px) / (1440 - 320)));
      margin: calc(15px + (36 - 15) * ((100vw - 320px) / (1440 - 320)))
        calc(80px + (97 - 80) * ((100vw - 320px) / (1400 - 320)));
    }

    &__choise {
      max-width: calc(120px + (180 - 120) * ((100vw - 320px) / (1440 - 320)));
      margin-right: calc(10px + (20 - 10) * ((100vw - 320px) / (1440 - 320)));
    }
    &__choise:last-child {
      margin-right: 0px;
    }

    &__action img {
      padding: calc(38px + (68 - 38) * ((100vw - 320px) / (1440 - 320)))
        calc(35px + (65 - 35) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal__button
    &__button {
      align-self: center;
      margin-top: calc(15px + (40 - 15) * ((100vw - 320px) / (1440 - 320)));
    }
    &__button button {
      padding: calc(4px + (8 - 4) * ((100vw - 320px) / (1440 - 320)))
        calc(18px + (28 - 18) * ((100vw - 320px) / (1440 - 320)));

      margin-right: calc(10px + (20 - 10) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(18px + (58 - 18) * ((100vw - 320px) / (1440 - 320)));
    }
  }
}
@media (max-width: 767px) {
  .modal {
    // .modal__action
    &__action {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__choise {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }
}
</style>
