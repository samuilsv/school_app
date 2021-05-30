<template>
  <div class="info-student">
    <div class="info-student__body">
      <div class="info-student__top">
        <img
          class="info-student__photo"
          src="../../../assets/main/Teacher.png"
          alt="Child"
        />
        <router-link to="/changeInfoTeacher" class="info-student__button"
          >Редагувати</router-link
        >
      </div>
      <div class="info-student__bottom">
        <div class="info-student__name">Ольга Шевченко</div>
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
.info-student {
  // .info-student__body
  &__body {
    margin-top: 3rem;
    background: #ffffff;
    box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
    border-radius: 20px;
    padding: 32px 40px;
    margin-bottom: 100px;
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
</style>
