<template>
  <div class="choise-class">
    <div class="choise-class__body">
      <div class="choise-class__left">
        <div class="choise-class__title">Обери класс</div>
        <img
          class="choise-class__img"
          src="../assets/icon/Arrow.svg"
          alt="Arrow"
        />
      </div>
      <div class="choise-class__right">
        <router-link to="#" class="choise-class__button">1-й класс</router-link>
        <router-link to="#" class="choise-class__button">2-й класс</router-link>
        <router-link to="#" class="choise-class__button">3-й класс</router-link>
        <router-link to="#" class="choise-class__button">4-й класс</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.choise-class {
  // .choise-class__body
  &__body {
    display: flex;
  }
  &__left {
    display: flex;
  }
  &__right {
    display: flex;
  }

  // .choise-class__title
  &__title {
    align-self: center;
    color: #353535;
    font-weight: 500;
    margin-right: 18px;
    min-width: 122px;
  }

  &__img {
    margin-right: 54px;
  }

  // .choise-class__button
  &__button {
    margin-right: 20px;
    padding: 9px 14px;

    background: #dbefdc;
    border-radius: 10px;
    text-decoration: none;
    align-items: center;
    color: #002202;
  }
  &__button:last-child {
    margin-right: 0;
  }

  @media (max-width: 650px) {
    &__body {
      display: flex;
      flex-direction: column;
    }
    &__left {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
    &__right {
      display: flex;
      justify-content: center;
    }
    &__img {
      margin-right: 0px;
      transform: rotate(90deg);
    }
    &__button {
      text-align: center;
      margin-right: calc(10px + (20 - 10) * ((100vw - 320px) / (1180 - 320)));
      padding: 9px 10px;
    }
  }
}
</style>
