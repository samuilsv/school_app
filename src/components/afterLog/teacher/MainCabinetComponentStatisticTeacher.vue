<template>
  <div class="cabinet-teacher">
    <div class="cabinet-teacher__container">
      <div class="cabinet-teacher__body">
        <div class="cabinet-teacher__title">Кабінет</div>
        <router-link
          to="/cabinetCabinetTeacher"
          class="cabinet-teacher__button active"
          >Класи</router-link
        >
        <router-link
          to="/cabinetStatisticTeacher"
          class="cabinet-teacher__button"
          >Статистика</router-link
        >
      </div>
      <div class="cabinet-teacher__bottom">
        <div class="cabinet-teacher__table">
          <div class="cabinet-teacher__filter">
            <div class="cabinet-teacher__list">
              <input type="text" placeholder="Безстрашні" />
              <i class="cabinet-teacher__arrow-down"></i>
            </div>
            <div class="search">
              <img
                src="../../../assets/headerAfterLog/Search.svg"
                class="search-icon"
                @click="getInputData"
              />
              <input placeholder="Пошук по імені" />
            </div>
            <div class="cabinet-teacher__add-child">
              <router-link to="/addStudent"
                ><img
                  src="../../../assets/icon/Add.svg"
                  class="add-icon"
                />Додати учня</router-link
              >
            </div>
          </div>
          <table class="highlight">
            <thead>
              <tr>
                <th>
                  <label class="form-checkbox">
                    <input type="checkbox" v-model="selectAll" />
                    <i class="form-icon"></i>
                  </label>
                </th>
                <th>№</th>
                <th>ПІБ учня</th>
                <th>Тестів <i class="arrow-down"></i></th>
                <th>Вірно <i class="arrow-down"></i></th>
                <th>Не вірно <i class="arrow-down"></i></th>
                <th>Не пройдено <i class="arrow-down"></i></th>
                <th>Бали <i class="arrow-down"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label class="form-checkbox">
                    <input type="checkbox" v-model="selected" />
                    <i class="form-icon"></i>
                  </label>
                </td>
                <td>1</td>
                <td>Арбузова Ольга Олександрівна</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td><strong>13 /</strong> 130</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <label class="form-checkbox">
                    <input type="checkbox" v-model="selected" />
                    <i class="form-icon"></i>
                  </label>
                </td>
                <td>2</td>
                <td>Пяточкін Петро Іванович</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td><strong>13 /</strong> 130</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <Hero /> -->
        <!-- <Statistic /> -->
        <InfoTeacher />
      </div>
    </div>
  </div>
</template>

<script>
import InfoTeacher from "./InfoTeacher";

export default {
  components: {
    InfoTeacher,
  },
  data: () => ({
    items: [
      {
        id: 2,
        name: "Пяточкін Петро Іванович",
        value: 1,
      },
      {
        id: 1,
        name: "Арбузова Ольга Олександрівна",
        value: 1,
      },
    ],
    selected: [],
    selectAll: false,
  }),
  methods: {
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].id);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cabinet-teacher {
  // .cabinet-student__body
  &__container {
    margin: 40px 80px 0 80px;
  }
  &__body {
    display: flex;
    align-items: center;
  }

  // .cabinet-student__title
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-right: 60px;
  }

  &__img {
    margin-right: 54px;
  }

  // .cabinet-student__button
  &__button {
    margin-right: 20px;
    padding: 9px 14px;

    border: 1px solid #d5e7ff;
    box-sizing: border-box;
    border-radius: 10px;
    text-decoration: none;
    color: #7b7b7b;
  }

  &__button:last-child {
    margin-right: 0;
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__list input {
    max-width: 203px;
    height: 100%;
    border: none;
    border: 1px solid rgba(53, 53, 53, 0.6);
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    padding: 10px;
    position: relative;
    z-index: 1;
  }

  &__list i {
    position: absolute;
    top: 1;
    margin-right: 10px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #002202;
  }

  &__filter {
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-top: 37px;
    margin-bottom: 24px;
  }

  &__filter p {
    font-weight: 500;
    color: #353535;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }
  &__add-child {
    color: #ffffff;
  }
  &__add-child a {
    box-sizing: border-box;
    width: 203px;
    height: 40px;
    padding: 10px 47px;
    font-size: 16px;
    line-height: 20px;

    border: none;
    color: #ffffff;
    background: #62c567;
    border-radius: 10px;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
  }
}

.active {
  font-weight: 500;
  padding: 9px 20px;
  color: #353535;
  background: #d5e7ff;
  border-radius: 10px;
}
strong {
  color: #62c567;
}
table {
  max-width: 780px;
  font-family: Montserrat;
  background: #ffffff;
  border: 1px solid #d5e7ff;
  box-sizing: border-box;
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
.table-input {
  border: 1px solid #353535;
  box-sizing: border-box;
  border-radius: 3px;
}

td,
th,
tr {
  // border: 1px solid #d5e7ff;
  border-bottom: 1px solid #d5e7ff;
  text-align: left;
  padding: 12px 17px;
  position: relative;
}
td {
  font-weight: 400;
  color: #353535;
}
th {
  font-weight: 500;
}

.arrow-down {
  position: absolute;
  top: 50%;
  margin-left: 10px;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #002202;
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
  border: 1px solid rgba(53, 53, 53, 0.6);
  box-sizing: border-box;
  border-radius: 10px;
  position: relative;
  z-index: 1;
}
.search-icon {
  position: absolute;
  padding: 10px;

  z-index: 3;
}

.add-icon {
  position: absolute;
  left: 15px;
  z-index: 3;
}
</style>
