<template>
  <header class="header" :class="{ active: isActive }">
    <div class="header__container">
      <div class="header__wrapper">
        <div class="header__left">
          <div
            class="header__burger"
            :class="{ active: isActive }"
            @click="isActive = !isActive"
          >
            <span></span>
          </div>
          <div class="header__logo">
            <router-link to="/"></router-link>
          </div>
          <div class="header__people">
            <div v-for="person in personsNav" :key="person.id">
              <img
                class="header__person"
                :src="person.photo"
                :alt="person.id"
              />
            </div>
          </div>
        </div>

        <div class="person-info">
          <Search class="search" />
          <a
            class="person-dropdown dropdown-trigger"
            ref="dropdown"
            href="#"
            data-target="dropdown1"
          >
            <img
              src="../../../assets/headerAfterLog/Student.png"
              alt="Student"
            />
            <i class="arrow-down"></i>
          </a>
          <ul id="dropdown1" class="dropdown-content">
            <li>
              <router-link to="/cabinetStudentStatisticWeek"
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

<script>
import Search from "../SearchInput";
import M from "materialize-css";

export default {
  components: {
    Search,
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
  }),
  mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false,
    });
  },
};
</script>

<style scoped>
.header .header__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.header .header__ctr {
  display: flex;
}
.header__container {
  margin: 20px 80px 0 80px;
  max-width: 1180px;
  max-width: 100%;
}
.header__left {
  display: flex;
  justify-content: space-around;
  max-width: 700px;
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
  align-items: center;
}
.header__people div {
  margin-right: 10px;
}
.header__person {
  display: block;
  max-width: 100%;
  height: auto;
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
  justify-content: space-between;
}

.header__burger {
  display: none;
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

@media (max-width: 767px) {
  .header__container {
    margin: 10px;
    max-width: none;
  }

  .header__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .header__left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .header {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(62, 173, 173);
  }

  .header__people {
    position: fixed;
    margin: 30% auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    top: 0;
    z-index: 4;
  }

  .header__person {
    width: 100px;
    margin: 10px;
  }

  .header__logo {
    width: 30%;
    margin: 0 auto;
    margin-right: 10px;
  }

  .person-info {
    margin: 10px 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .person-info > a {
    display: flex;
    align-items: center;
  }

  .person-info > a > img {
    height: 80px;
  }

  .arrow-down {
    margin-left: 12px;
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-top: 14px solid #002202;
  }

  .header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
  }

  .header__burger .active::before {
    transform: rotate(45deg);
    top: 9px;
  }

  .header__burger .active::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }

  .header__burger span .active {
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
}

@media (max-width: 530px) {
  .header__burger {
    width: 40px;
  }
}
@media (max-width: 376px) {
  .header__burger {
    width: 50px;
  }
  .header__container {
    margin: 20px 20px 0 10px;
  }
}
</style>
