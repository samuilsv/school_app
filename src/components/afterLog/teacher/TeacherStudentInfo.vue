<template>
  <div class="info-student">
    <div class="info-student__body">
      <div class="info-student__top">
        <img
          class="info-student__photo"
          src="../../../assets/main/Child.png"
          alt="Child"
        />
        <router-link to="/changeInfoTeacher" class="info-student__button"
          >Редагувати</router-link
        >
      </div>
      <div class="info-student__bottom">
        <div class="info-student__name">Петро Пяточкін</div>
        <p>Бали<strong class="bold-green">134</strong></p>
        <p>Школа<strong class="bold">№36</strong></p>
        <p>Клас<strong class="bold">Безстрашні</strong></p>
        <p>E-mail<strong class="bold">p.pyatochkin@gmail.com</strong></p>
        <p>
          Пароль<strong class="bold">••••••••</strong
          ><router-link class="icon" to="/changeInfoTeacher"
            ><img
              src="../../../assets/icon/ChangePhoto.svg"
              alt="" /></router-link
          ><router-link class="icon" to="#"
            ><img src="../../../assets/icon/Copy.svg" alt="Copy"
          /></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-student {
  // .info-student__body
  &__body {
    margin-top: 3rem;
    background: #ffffff;
    box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
    border-radius: 20px;
    padding: 32px 40px;
    margin-bottom: 100px;
    min-width: 395px;
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
    content: url("../../../assets/icon/ChangeIcon.svg");
  }

  // .info-student__name
  &__name {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 25px;
  }
  p {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  p button {
    padding-left: 20px;
    cursor: pointer;
    font-weight: 500;
    color: rgba(53, 53, 53, 0.6);
    background-color: #fff;
    position: relative;
  }
  p button::before {
    padding-right: 10px;
    position: relative;
    content: url("../../../assets/icon/ChangeIcon.svg");
    top: 2px;
    left: 0;
  }
  &__bottom p {
    display: flex;
    align-items: center;
  }

  &__bottom .icon img {
    padding: 10px 11px;
    background: rgba(53, 53, 53, 0.6);
    border-radius: 10px;
    margin-left: 13px;
    max-width: 42px;
  }

  &__bottom .icon:last-child {
    max-width: 50px;
  }

  .bold-green {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #62c567;
    margin-left: 30px;
  }
  .bold {
    font-weight: bold;
    color: #353535;
    margin-left: 30px;
  }

  @media (max-width: 1440px) {
    &__body {
      padding: calc(10px + (32 - 10) * ((100vw - 320px) / (1440 - 320)))
        calc(20px + (40 - 20) * ((100vw - 320px) / (1440 - 320)));
      margin: calc(1rem + (3 - 1) * ((100vw - 320px) / (1440 - 320))) auto;
    }

    // .info-student__photo
    &__photo {
      max-width: calc(70% + (100 - 70) * ((100vw - 320px) / (1440 - 320)));
      margin-right: calc(0px + (20 - 0) * ((100vw - 320px) / (1440 - 320)));
      height: calc(8% + (10 - 8) * ((100vw - 320px) / (1440 - 320)));
    }

    // .info-student__name
    &__name {
      font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1180 - 320)));
      line-height: calc(22px + (29 - 22) * ((100vw - 320px) / (1180 - 320)));
      margin-bottom: calc(15px + (25 - 15) * ((100vw - 320px) / (1180 - 320)));
    }
    p {
      margin-bottom: calc(6px + (12 - 6) * ((100vw - 320px) / (1180 - 320)));
    }

    &__top {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &__button {
      padding: calc(6px + (9 - 6) * ((100vw - 320px) / (1180 - 320)))
        calc(15px + (18 - 15) * ((100vw - 320px) / (1180 - 320)))
        calc(6px + (9 - 6) * ((100vw - 320px) / (1180 - 320)))
        calc(35px + (38 - 35) * ((100vw - 320px) / (1180 - 320)));
      font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1180 - 320)));
    }

    .bold-green {
      font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1180 - 320)));
      line-height: calc(22px + (29 - 22) * ((100vw - 320px) / (1180 - 320)));
      margin-left: calc(10px + (30 - 10) * ((100vw - 320px) / (1180 - 320)));
    }
    .bold {
      font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1180 - 320)));
      line-height: calc(22px + (29 - 22) * ((100vw - 320px) / (1180 - 320)));
      margin-left: calc(10px + (30 - 10) * ((100vw - 320px) / (1180 - 320)));
    }
  }
  @media (max-width: 767px) {
    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: none;
    }
    // .info-student__top
    &__top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__photo {
      margin-right: 0px;
    }

    &__name {
      margin-top: 10px;
      text-align: center;
    }

    &__bottom p {
      font-size: 14px;
    }
    p button {
      padding-left: 0px;
    }
  }
}
</style>
