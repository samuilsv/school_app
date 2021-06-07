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
import Main from "../../components/afterLog/student/MainCabinetStudentStatisticMonth";
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
/* .home {
  height: 100vh;
  display: flex;
  flex-direction: column;
} */

/* .header {
  flex: 0 0 auto;
}
.main-content {
  flex: 1 0 auto;
}
.footer {
  flex: 0 0 auto;
} */

.home {
  margin-bottom: 170px;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
