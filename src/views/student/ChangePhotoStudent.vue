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
            <form action="#">
              <div class="modal__zoom range-field">
                <span class="modal__minus"></span>
                <input
                  type="range"
                  ref="range"
                  min="0"
                  max="100"
                  step="1"
                  class="modal__scale"
                />
                <span class="modal__plus"></span>
              </div>
            </form>
          </div>
          <div class="modal__button">
            <router-link to="/updatePhotoStudent" class="back"
              >Скасувати</router-link
            >
            <button type="submit" class="save">Зберегти</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import M from "materialize-css";

export default {
  // mounted() {
  //   let range = M.Range.init(this.$refs.range);
  //   console.log("range", range);
  // },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
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
    cursor: pointer;
  }
  &__plus::before,
  &__plus::after {
    position: absolute;
    border-radius: 20px;
    background-color: #b4b1b1;
    content: "";
  }
  &__plus::before {
    top: 55%;
    left: 0.7rem;
    width: 17px;
    height: 3px;
    margin-top: -2px;
  }
  &__plus::after {
    top: 13%;
    left: 1rem;
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
    cursor: pointer;
  }
  &__minus::before,
  &__minus::after {
    position: absolute;
    border-radius: 20px;
    background-color: #b4b1b1;
    content: "";
  }
  &__minus::before {
    top: 55%;
    left: -0.5rem;
    width: 16px;
    height: 3px;
    margin-top: -2px;
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

input[type="range"]::-moz-range-thumb {
  width: 28px;
  height: 28px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(196, 196, 196, 0.5);
}
input[type="range"]::-ms-thumb {
  width: 28px;
  height: 28px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(196, 196, 196, 0.5);
}

/***** These are to edit the thumb and the text inside the thumb *****/
input[type="range"] + .thumb {
  background-color: #dedede;
}
input[type="range"] + .thumb.active .value {
  width: 28px;
  height: 28px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(196, 196, 196, 0.5);
}

input[type="range"]::-webkit-slider-thumb {
  width: 28px;
  height: 28px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(196, 196, 196, 0.5);
}
.modal__scale {
  width: 307px;
}

@media (max-width: 1440px) {
  .modal-container {
    max-width: calc(300px + (472 - 300) * ((100vw - 320px) / (1440 - 320)));
  }
  .modal {
    // .modal__title
    &__title {
      font-weight: bold;
      font-size: calc(24px + (36 - 24) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(26px + (44 - 26) * ((100vw - 320px) / (1440 - 320)));
      color: #353535;
      margin: 36px calc(70px + (97 - 70) * ((100vw - 320px) / (1440 - 320)));
    }

    &__action img {
      margin-bottom: calc(10px + (30 - 10) * ((100vw - 320px) / (1440 - 320)));
    }

    // .modal__button
    &__button {
      align-self: center;
      margin-top: calc(15px + (40 - 15) * ((100vw - 320px) / (1440 - 320)));
    }
    &__button button {
      padding: calc(4px + (8 - 4) * ((100vw - 320px) / (1440 - 320)))
        calc(20px + (28 - 20) * ((100vw - 320px) / (1440 - 320)));

      margin-right: calc(10px + (20 - 10) * ((100vw - 320px) / (1440 - 320)));
      margin-bottom: calc(20px + (58 - 20) * ((100vw - 320px) / (1440 - 320)));
    }
    &__zoom {
      max-width: calc(250px + (400 - 250) * ((100vw - 320px) / (1440 - 320)));
    }
  }

  .modal__scale {
    width: calc(250px + (307 - 250) * ((100vw - 320px) / (1440 - 320)));
  }
}
</style>
