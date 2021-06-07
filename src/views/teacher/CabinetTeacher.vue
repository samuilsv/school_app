<template>
  <div class="home">
    <Header class="header" />
    <div class="main-content"><Main /></div>
    <Footer class="footer" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../../components/afterLog/teacher/HeaderTeacher";
import Main from "../../components/afterLog/teacher/MainComponentCabinetTeacher";
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
  margin-bottom: 170px;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
