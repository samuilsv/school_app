<template>
  <div class="home">
    <Header class="header" />
    <div class="main-content"><Main /></div>
    <Footer class="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../../components/afterLog/student/HeaderStudent";
// import Main from "../components/afterLog/MainHomeStudent";
import Main from "../../components/afterLog/student/MainReadPage";
import Footer from "../../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
.home {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
  margin-bottom: 30px;
}
.main-content {
  /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 1 0 auto;
}
.footer {
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  height: 60px;
  flex: 0 0 auto;
}
</style>
