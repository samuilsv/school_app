<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <router-link to="/" class="header__logo"></router-link>
        <Button />
      </div>
    </div>
  </header>
</template>

<script>
import Button from "../btn/Button";

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  &__container {
    margin: 45px 80px;
  }
  &__logo {
    width: 155px;
    height: 71px;
    background: #c4c4c4;
    border-radius: 20px;
  }
}

@media (max-width: 767px) {
  .header__logo {
    width: 155px;
    height: 71px;
    background: #c4c4c4;
    border-radius: 20px;
    margin: 10px auto;
  }
}
</style>
