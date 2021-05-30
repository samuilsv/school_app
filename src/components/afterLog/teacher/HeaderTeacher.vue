<template>
  <header class="header">
    <div class="header__container">
      <div class="header__wrapper">
        <div class="header__left">
          <router-link to="/" class="header__logo"></router-link>
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
          <div class="header__load">
            <img src="../../../assets/icon/Load.svg" alt="Load" />
          </div>
          <Search />

          <a
            class="person-dropdown dropdown-trigger"
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
          <div class="header__icon">
            <span></span>
          </div>
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
  margin-bottom: 30px;
}
.header .header__ctr {
  display: flex;
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
  max-width: 100%;
  height: auto;
}
.header__load {
  display: flex;
}
.header__load {
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

/* @media (max-width: 1120px) {
  .header .header__wrapper {
    display: flex;
    justify-content: center;
    position: fixed;
    flex-wrap: wrap;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: auto;
  }
  .header .header__logo {
    margin-bottom: 10px;
  }
  .person-info .arrow-down,
  .person-info img {
    display: none;
  }
  .header__people {
    z-index: 5;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 70px;
    height: 58px;
    cursor: pointer;
  }
  .header__icon span,
  .header__icon::after,
  .header__icon::before {
    left: 0;
    position: absolute;
    height: 10%;
    width: 100%;
    transition: all 0.3s ease 0s;
    background-color: #c4c4c4;
  }
  .header__icon::after,
  .header__icon::before {
    content: "";
  }
  .header__icon::before {
    top: 0;
  }
  .header__icon::after {
    bottom: 0;
  }
  .header__icon span {
    top: 50%;
    transform: scale(1) translate(0px, -50%);
  }
} */
/* @media (max-width: 767px) {
  .header .header__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .header .header__logo {
    margin-bottom: 10px;
    position: relative;
  }

  .header .search {
    position: absolute;
    top: 6rem;
    left: 5rem;
  }
} */
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
</style>
