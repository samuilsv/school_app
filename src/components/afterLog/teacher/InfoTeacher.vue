<template>
  <div class="info-teacher">
    <div class="info-teacher__body">
      <div class="info-teacher__top">
        <img
          class="info-teacher__photo"
          src="../../../assets/main/Teacher.png"
          alt="Child"
        />
        <router-link to="/changeInfoTeacher" class="info-teacher__button"
          >Редагувати</router-link
        >
      </div>
      <div class="info-teacher__bottom">
        <div class="info-teacher__name">Ольга Шевченко</div>
        <p>Школа<strong class="bold">№36</strong></p>
        <p>E-mail<strong class="bold">p.pyatochkin@gmail.com</strong></p>
        <p>
          Пароль<strong class="bold">••••••••</strong
          ><button>Змінити пароль</button>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-teacher {
  // .info-teacher__body
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    background: #ffffff;
    box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
    border-radius: 20px;
    padding: 32px 40px;
    margin-bottom: 100px;
  }

  // .info-teacher__top
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .info-teacher__photo
  &__photo {
    margin-bottom: 25px;
    margin-right: 30px;
    display: block;
    max-width: 100%;
    height: 10%;
  }

  // .info-teacher__button
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

  // .info-teacher__name
  &__name {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 25px;
  }
  p {
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
}
.bold {
  color: #353535;
  margin-left: 30px;
}

@media (max-width: 1440px) {
  .info-teacher {
    &__body {
      padding: calc(10px + (32 - 10) * ((100vw - 320px) / (1440 - 320)))
        calc(20px + (40 - 20) * ((100vw - 320px) / (1440 - 320)));
      margin: calc(1rem + (3 - 1) * ((100vw - 320px) / (1440 - 320))) auto;
    }

    // .info-student__photo
    &__photo {
      max-width: calc(50% + (100 - 50) * ((100vw - 320px) / (1440 - 320)));
      margin-right: calc(0px + (30 - 0) * ((100vw - 320px) / (1440 - 320)));
      height: calc(5% + (10 - 5) * ((100vw - 320px) / (1440 - 320)));
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
}
@media (max-width: 767px) {
  .info-teacher {
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
