<template>
  <div class="home">
    <Header class="header" />
    <div class="main-content"><Main /></div>
  </div>
  <Footer class="footer" />
</template>

<script>
// @ is an alias to /src
import Header from "../../components/afterLog/student/HeaderStudent";
import Main from "../../components/afterLog/student/MainHomeStudent";
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

<style lang="scss" scoped>
.home {
  margin-bottom: 170px;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
