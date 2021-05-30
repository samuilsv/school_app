<template>
  <div class="home">
    <Header class="header" />
    <div class="main-content">
      <div class="main__container">
        <h1 class="main__title">Завдання від Римусі для 1-го класу</h1>
        <div class="main__body">
          <img src="../assets/main/ResultTest.svg" alt="ResultTest" />
          <div class="main__discription">
            <div class="main__subtitle">Ти молодець, завершив завдання!</div>
            <p>Правильних відповідей - <strong class="bolt">13 з 15</strong></p>
            <p>Набрано балів - <strong class="bolt-green">13</strong></p>
            <div class="main__button">
              <router-link to="/homeAfterLogStudent"
                >Наступні тести</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/afterLog/student/HeaderStudent";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.home {
  height: 120vh;
  display: flex;
  flex-direction: column;
}

.header {
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
}
.main-content {
  /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 1 0 auto;
}
.main {
  &__container {
    padding: 0 80px;
  }
  // .main__title
  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: #353535;
    margin-bottom: 120px;
  }

  // .main__body
  &__body {
    display: flex;
    align-items: center;
  }

  &__discription {
    margin-left: 42px;
  }

  &__discription p {
    margin-bottom: 10px;
  }

  &__discription p:last-child {
    margin-bottom: 0;
  }

  &__button {
    margin-top: 35px;
  }

  &__button a {
    font-weight: 500;
    color: #ffffff;
    padding: 8.5px 23.5px;
    background: #aa5d81;
    border-radius: 10px;
  }
  // .main__subtitle
  &__subtitle {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-bottom: 32px;
  }
}
.bolt {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #353535;
}
.bolt-green {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #62c567;
}

.footer {
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
}
</style>
