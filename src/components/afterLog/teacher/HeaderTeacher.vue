<template>
  <header class="header">
    <div class="header__container" :class="{ active: isActive }">
      <div class="header__wrapper" :class="{ active: isActive }">
        <div class="header__left">
          <div class="header__mobil">
            <router-link to="/" class="header__logo"></router-link>

            <a
              class="header__burger"
              @click="isActive = !isActive"
              :class="{ active: isActive }"
            >
              <span></span>
            </a>
          </div>
          <div class="header__people" :class="{ active: isActive }">
            <div v-for="person in personsNav" :key="person.id">
              <img
                class="header__person"
                :src="person.photo"
                :alt="person.id"
              />
            </div>
          </div>
        </div>

        <div class="person-info" :class="{ active: isActive }">
          <div class="header__load" :class="{ active: isActive }">
            <img src="../../../assets/icon/Load.svg" alt="Load" />
          </div>
          <div class="search" :class="{ active: isActive }">
            <img
              src="../../../assets/headerAfterLog/Search.svg"
              class="search-icon"
              @click="getInputData"
            />
            <input
              placeholder="Пошук"
              v-model="searchValue"
              @keyup.enter="getInputData"
            />
          </div>

          <a
            class="person-dropdown dropdown-trigger"
            :class="{ active: isActive }"
            ref="dropdown"
            href="#"
            data-target="dropdown1"
          >
            <img
              src="../../../assets/headerAfterLog/Teacher.png"
              alt="Teacher"
            />
            <i class="arrow-down"></i>
          </a>
          <ul id="dropdown1" class="dropdown-content">
            <li>
              <router-link to="/cabinetTeacher"
                ><img
                  src="../../../assets/icon/Сabinet.png"
                  alt="Сabinet"
                />Кабінет</router-link
              >
            </li>
            <li>
              <router-link to="/test"
                ><img
                  src="../../../assets/icon/Exercise.png"
                  alt="Exercise"
                />Завдання</router-link
              >
            </li>
            <li>
              <router-link to="/log"
                ><img
                  src="../../../assets/icon/Outsign.png"
                  alt="Outsign"
                />Вийти</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

//cabinetTeacherStudentClass

<script>
// import Search from "../SearchInput";
import M from "materialize-css";

export default {
  components: {
    // Search,
  },
  data: () => ({
    personsNav: [
      { id: 1, photo: require("@/assets/headerAfterLog/Icon_1.svg") },
      { id: 2, photo: require("@/assets/headerAfterLog/Icon_2.svg") },
      { id: 3, photo: require("@/assets/headerAfterLog/Icon_3.svg") },
      { id: 4, photo: require("@/assets/headerAfterLog/Icon_4.svg") },
      { id: 5, photo: require("@/assets/headerAfterLog/Icon_5.svg") },
      { id: 6, photo: require("@/assets/headerAfterLog/Icon_6.svg") },
    ],
    isActive: false,
    searchValue: "",
  }),
  mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });
  },
  methods: {
    getInputData() {
      console.log(this.searchValue);
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
.header__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.header__container {
  margin: 20px 80px 0 80px;
}
.header__left {
  display: flex;
  justify-content: space-around;
  max-width: 650px;
}
.header__logo {
  width: 155px;
  height: 71px;
  background: #c4c4c4;
  border-radius: 20px;
  margin-right: 70px;
}
.header__people {
  display: flex;
}
.header__person {
  display: block;
  max-width: calc(70px + (100 - 50) * ((100vw - 320px) / (1400 - 320)));
  height: auto;
}

.header__load {
  display: flex;
  padding: 10px;
  margin-right: 20px;
  background: #62c567;
  border-radius: 10px;
}
.arrow-down {
  margin-left: 7px;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #002202;
}
.person-info {
  display: flex;
  align-items: center;
}

.person-dropdown {
  display: flex;
  align-items: center;
}

.dropdown-content {
  width: 260px;
  background: #ffffff;
  box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
  border-radius: 10px;
}
.dropdown-content li > a {
  border-bottom: 1px solid #c4c4c4;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #353535;
}
.dropdown-content li > a > img {
  margin-right: 15px;
}

.color-gray {
  color: #c4c4c4;
}

.search {
  display: flex;
  align-items: center;
}
.search input {
  box-sizing: border-box;
  width: 203px;
  height: 40px;
  padding: 10px 47px;
  font-size: 16px;
  line-height: 20px;

  border: none;
  color: #7b7b7b;
  background: #e5e5e5;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  margin-right: 20px;
}
.search-icon {
  position: absolute;
  padding: 10px;
  z-index: 3;
}

@media (max-width: 1440px) {
  .header__logo {
    width: calc(100px + (155 - 100) * ((100vw - 320px) / (1440 - 320)));
    height: calc(50px + (71 - 50) * ((100vw - 320px) / (1440 - 320)));
    background: #c4c4c4;
    border-radius: calc(10px + (20 - 10) * ((100vw - 320px) / (1440 - 320)));
    margin-right: calc(10px + (50 - 10) * ((100vw - 320px) / (1440 - 320)));
  }
  .header__container {
    margin: 20px calc(20px + (80 - 20) * ((100vw - 320px) / (1440 - 320))) 0
      calc(20px + (80 - 20) * ((100vw - 320px) / (1440 - 320)));
  }

  .header__mobil {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__mobil .header__burger {
    order: 1;
    display: none;
  }
  .header__mobil .header__logo {
    order: 2;
  }
}

@media (max-width: 1135px) {
  .header__people {
    display: none;
  }
  .header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
  }

  .header__burger.active::before {
    transform: rotate(45deg);
    top: 9px;
  }

  .header__burger.active::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }

  .header__burger.active span {
    transform: scale(0);
  }

  .header__burger::before,
  .header__burger::after,
  .header__burger span {
    position: absolute;
    content: "";
    background-color: #c4c4c4;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 0.3s ease 0s;
  }
  .header__burger::before {
    top: 0;
  }
  .header__burger::after {
    bottom: 0;
  }
  .header__burger span {
    bottom: 9px;
  }
  .header__mobil {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__mobil .header__burger {
    display: block;
    order: 1;
    margin-right: 10px;
  }
  .header__mobil .header__logo {
    order: 2;
  }
  .header__container.active {
    position: fixed;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(104, 102, 102, 0.432);
    z-index: 1;
  }
  .header__wrapper.active {
    box-sizing: border-box;
    overflow-y: auto;
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 20px;
    position: fixed;
    display: flex;
    flex-flow: column;
    justify-content: start;
    background-color: rgb(255, 255, 255);
    width: 60%;
    height: 100vh;
    z-index: 10;
  }
  .header__left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header__people.active {
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    z-index: 7;
  }
}

@media (max-width: 767px) {
  .search,
  .header__load {
    display: none;
  }
  .person-info.active {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-bottom: 20px;
  }
  .search.active {
    display: block;
    margin-top: 10px;
    order: 1;
  }
  .header__load.active {
    display: block;
    order: 2;
    margin-bottom: 10px;
  }
  .person-dropdown.active {
    order: 3;
  }
  .search.active input {
    width: 150px;
    padding: 5px 40px;
  }
}
</style>
