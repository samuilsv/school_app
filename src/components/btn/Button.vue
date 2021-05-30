<template>
  <div class="header__ctr">
    <router-link to="/log" class="default_btn login_btn">Вхід</router-link>
    <router-link to="#" class="default_btn sign_up_btn">Реєстрація</router-link>
  </div>
</template>

<style lang="scss">
.header__ctr {
  display: flex;
  flex-wrap: wrap;
}
.login_btn {
  background: #cb8aa8;
  border-radius: 10px;
  padding: 5px 38px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}
.sign_up_btn {
  padding: 5px 38px;
  border: 1px solid #aa5d81;
  border-radius: 10px;
  color: #cb8aa8;
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;
}

@media (max-width: 767px) {
  .header__ctr {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
}
@media (max-width: 432px) {
  .login_btn {
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .sign_up_btn {
    margin: 0 auto;
  }
}
</style>
