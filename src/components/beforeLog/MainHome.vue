<template>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <h2 class="h2">Ласкаво просимо!</h2>
        </div>
        <div class="col-xl-11 ml-auto mr-auto">
          <div class="hero__list">
            <a
              v-for="person in persons"
              :key="person.id"
              :class="{ mb: !person.isHover }"
            >
              <div>
                <p
                  :class="{
                    speech: person.isHover,
                    hide: !person.isHover,
                  }"
                >
                  Опис героя. Опис героя. Опис героя. Опис героя. Опис героя.
                  Опис героя. Опис героя. Опис героя. Опис героя. Опис героя.
                </p>
                <div
                  class="person-info"
                  @mouseover="person.isHover = true"
                  @mouseout="person.isHover = false"
                >
                  <img :src="person.photo" />
                  <p class="text-center">{{ person.name }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    persons: [
      {
        id: 1,
        photo: require("@/assets/homePersons/Gramatyka.svg"),
        name: "Граматика",
        isHover: false,
      },
      {
        id: 2,
        photo: require("@/assets/homePersons/Googlyk.svg"),
        name: "Гуглик",
        isHover: false,
      },
      {
        id: 3,
        photo: require("@/assets/homePersons/Nyshporka.svg"),
        name: "Нишпорка",
        isHover: false,
      },
      {
        id: 4,
        photo: require("@/assets/homePersons/Rysja-Rymysja.svg"),
        name: "Римуся",
        isHover: false,
      },
      {
        id: 5,
        photo: require("@/assets/homePersons/Cikavynka.svg"),
        name: "Цікавинка",
        isHover: false,
      },
      {
        id: 6,
        photo: require("@/assets/homePersons/Chytajskyj.svg"),
        name: "Читайський",
        isHover: false,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
}

.h2 {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #353535;
  margin-bottom: 5rem;
  margin-top: 103px;
}

.hero {
  // .hero_list

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    // flex-wrap: wrap;
    margin-bottom: 208px;
  }
  // &__list a:hover {
  //   background-image: url("../../assets/homePersons/Tooltip.png");
  // }
}
.text-center {
  color: #000;
}

.person-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fixed {
  position: fixed;
  top: 1;
}

.mb {
  margin-bottom: 250px;
}

.hide {
  display: none;
}

.speech {
  padding: 16px;
  width: 270px;
  position: relative;
  background: #ffffff;
  color: #000;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: -390px;
  margin-left: 100px;
}
.speech:after,
.speech:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.speech:after {
  border-top-color: #ffffff;
  border-width: 18px;
  left: 10%;
  margin-left: 30px;
}
.speech:before {
  border-width: 19px;
  left: 0%;
  margin-left: 0px;
}

@media (max-width: 767px) {
  .hero {
    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
