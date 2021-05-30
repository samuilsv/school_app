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
            <img src="../../assets/main/ChildPhoto.jpg" alt="ChildPhoto" />
            <div class="modal__zoom">
              <i class="modal__plus"></i>
              <i class="modal__scale"></i>
              <i class="modal__minus"></i>
            </div>
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
  max-width: 472px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 20px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &__action img {
    margin-bottom: 30px;
  }

  // .modal__button
  &__button {
    align-self: center;
    margin-top: 40px;
  }
  &__button button {
    padding: 8px 28px;

    box-sizing: border-box;
    border-radius: 10px;
    line-height: 22px;
    margin-right: 20px;
    margin-bottom: 58px;
  }
  &__button button:last-child {
    margin-right: 0px;
  }
  &__zoom {
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__plus {
    position: relative;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 0;
  }
  &__plus::before,
  &__plus::after {
    position: absolute;
    border-radius: 20px;
    background-color: #b4b1b1;
    content: "";
  }
  &__plus::before {
    top: 50%;
    left: 12.7rem;
    width: 16px;
    height: 3px;
    margin-top: -2px;
  }
  &__plus::after {
    top: 10%;
    left: 13rem;
    width: 3px;
    height: 16px;
    margin-left: 2px;
  }
  &__minus {
    position: relative;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
  }
  &__minus::before,
  &__minus::after {
    position: absolute;
    border-radius: 20px;
    background-color: #b4b1b1;
    content: "";
  }
  &__minus::before {
    top: 50%;
    left: -13rem;
    width: 16px;
    height: 3px;
    margin-top: -2px;
  }

  &__scale {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &__scale::before,
  &__scale::after {
    position: absolute;
    content: "";
  }
  &__scale::before {
    border-radius: 20px;
    background-color: #b4b1b1;
    top: 50%;
    left: -10rem;
    width: 320px;
    height: 3px;
    margin-top: -2px;
  }
  &__scale::after {
    border-radius: 20px;
    top: -1rem;
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(196, 196, 196, 0.5);
    left: -10rem;
    width: 28px;
    height: 28px;
  }
}

.back {
  border: 1px solid #aa5d81;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 10px;
  color: rgba(53, 53, 53, 0.6);
}
.save {
  background: #aa5d81;
  border-radius: 10px;
  color: #ffffff;
}

@media (max-width: 1440px) {
  .modal {
    // .modal__title
    &__title {
      font-weight: bold;
      font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(26px + (44 - 26) * ((100vw - 320px) / (1440 - 320)));
      color: #353535;
      margin: 36px calc(70px + (97 - 70) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal__action
    &__action {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    &__action img {
      margin-bottom: 30px;
    }

    // .modal__button
    &__button {
      align-self: center;
      margin-top: 40px;
    }
    &__button button {
      padding: 8px 28px;

      box-sizing: border-box;
      border-radius: 10px;
      line-height: 22px;
      margin-right: 20px;
      margin-bottom: 58px;
    }
    &__button button:last-child {
      margin-right: 0px;
    }
    &__zoom {
      max-width: 400px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__plus {
      position: relative;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 0;
    }
    &__plus::before,
    &__plus::after {
      position: absolute;
      border-radius: 20px;
      background-color: #b4b1b1;
      content: "";
    }
    &__plus::before {
      top: 50%;
      left: 12.7rem;
      width: 16px;
      height: 3px;
      margin-top: -2px;
    }
    &__plus::after {
      top: 10%;
      left: 13rem;
      width: 3px;
      height: 16px;
      margin-left: 2px;
    }
    &__minus {
      position: relative;
      width: 24px;
      height: 24px;
      top: 0;
      left: 0;
    }
    &__minus::before,
    &__minus::after {
      position: absolute;
      border-radius: 20px;
      background-color: #b4b1b1;
      content: "";
    }
    &__minus::before {
      top: 50%;
      left: -13rem;
      width: 16px;
      height: 3px;
      margin-top: -2px;
    }

    &__scale {
      position: relative;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    &__scale::before,
    &__scale::after {
      position: absolute;
      content: "";
    }
    &__scale::before {
      border-radius: 20px;
      background-color: #b4b1b1;
      top: 50%;
      left: -10rem;
      width: 320px;
      height: 3px;
      margin-top: -2px;
    }
    &__scale::after {
      border-radius: 20px;
      top: -1rem;
      background: #ffffff;
      box-shadow: 0px 2px 15px rgba(196, 196, 196, 0.5);
      left: -10rem;
      width: 28px;
      height: 28px;
    }
  }
}
</style>
