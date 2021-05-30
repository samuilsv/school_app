<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <div class="footer__about">
          <span>2020</span><router-link to="/about">Про проект</router-link>
        </div>
        <div class="footer__love">Створено з любов’ю</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: #eff3f4;

  &__container {
    margin: 0 80px;
  }

  &__about span {
    margin-right: 38px;
  }

  &__about a {
    color: #212529;
  }

  &__wrapper {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    &__container {
      max-width: none;
      margin: 0 40px;
    }
    &__wrapper {
      display: flex;
      justify-content: center;
    }
    &__about a {
      margin-right: 10px;
      text-align: center;
    }
    &__about span {
      margin-right: 38px;
      text-align: center;
    }
  }
}
</style>
