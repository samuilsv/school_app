<template>
  <div class="cabinet-teacher">
    <div class="cabinet-teacher__container">
      <div class="cabinet-teacher__top">
        <div class="cabinet-teacher__title">Кабінет</div>
        <div class="cabinet-teacher__link">
          <router-link to="/cabinetTeacher" class="cabinet-teacher__button"
            >Класи</router-link
          >
          <router-link
            to="/cabinetStatisticTeacher"
            class="cabinet-teacher__button active"
            >Статистика</router-link
          >
        </div>
      </div>
      <div class="cabinet-teacher__bottom">
        <div class="cabinet-teacher__table">
          <div class="cabinet-teacher__filter">
            <CustomSelect
              :options="options"
              :default="'Всі класи'"
              class="select"
            />
            <div class="search">
              <img
                src="../../../assets/headerAfterLog/Search.svg"
                class="search-icon"
                @click="getInputData"
              />
              <input placeholder="Пошук по імені" />
            </div>
            <div class="cabinet-teacher__add-child">
              <router-link to="/addClass"
                ><img
                  src="../../../assets/icon/Add.svg"
                  class="add-icon"
                />Додати класс</router-link
              >
            </div>
          </div>
          <div class="table-body">
            <table class="highlight">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="filled-in" />
                      <span class="th-text">№&nbsp;&nbsp;ПІБ&nbsp;учня</span>
                    </label>
                  </th>
                  <th>
                    <div class="table-row">
                      Тестів<i class="arrow-down"></i>
                    </div>
                  </th>
                  <th>
                    <div class="table-row">Вірно<i class="arrow-down"></i></div>
                  </th>
                  <th>
                    <div class="table-row">
                      Не&nbsp;вірно<i class="arrow-down"></i>
                    </div>
                  </th>
                  <th>
                    <div class="table-row">
                      Не&nbsp;пройдено<i class="arrow-down"></i>
                    </div>
                  </th>
                  <th>
                    <div class="table-row">Бали<i class="arrow-down"></i></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        @click="isActive = !isActive"
                        class="filled-in"
                      />
                      <span class="th-text"
                        >1&nbsp;&nbsp;Арбузова&nbsp;Ольга&nbsp;Олександрівна</span
                      >
                    </label>
                  </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <router-link
                      to="/deleteStudent"
                      class="active-button"
                      v-if="!isActive"
                    >
                      <img
                        src="../../../assets/icon/Minus.svg"
                        alt="Minus"
                      />Видалити&nbsp;учня
                    </router-link>
                    <div v-else><strong>13&nbsp;/&nbsp;</strong>130</div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox" class="filled-in" />
                      <span class="th-text"
                        >2&nbsp;&nbsp;Пяточкін&nbsp;Петро&nbsp;Іванович</span
                      >
                    </label>
                  </td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td><strong>13&nbsp;/&nbsp;</strong>130</td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <InfoTeacher class="teacher-info" />
      </div>
    </div>
  </div>
</template>

<script>
import InfoTeacher from "./InfoTeacher";
import CustomSelect from "./Select";

export default {
  components: {
    InfoTeacher,
    CustomSelect,
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
    options: [
      {
        id: 1,
        name: "2-б",
      },
      {
        id: 2,
        name: "3-б",
      },
      {
        id: 3,
        name: "4-б",
      },
      {
        id: 4,
        name: "Безстрашні",
      },
      {
        id: 5,
        name: "Всі класи",
      },
    ],
    selected: [],
    selectAll: false,
    isActive: true,
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

  &__top {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
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

  &__filter {
    max-width: 700px;
    display: flex;
    align-items: center;
    margin-top: 37px;
    margin-bottom: 24px;
  }

  .select {
    margin-right: 20px;
    flex: 0 1 20%;
    min-width: 182px;
  }

  &__filter p {
    font-weight: 500;
    color: #353535;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  &__table {
    flex: 1 0 60%;
    margin-right: 20px;
  }

  .teacher-info {
    flex: 1 0 40%;
  }

  &__add-child {
    color: #ffffff;
    margin-bottom: 10px;
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
  }
}

.active {
  font-weight: 500;
  padding: 9px 20px;
  color: #353535;
  background: #d5e7ff;
  border-radius: 10px;
}

.active-button {
  display: flex;
  align-items: center;
  background: #ff7d54;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 10px 20px 10px 20px;
  margin-left: 10px;
}
.active-button img {
  margin-right: 14px;
}
strong {
  color: #62c567;
}
.table-body {
  width: 100%;
  overflow-x: auto;
}
table {
  margin: 0 auto;
  border-collapse: collapse; /* Способ отображения границы */
  width: 100%;
  // border-spacing: 50px 50px; /* Расстояние между ячейками */
  border: 1px solid #d5e7ff;
  border-radius: 20px;
}
.table-input {
  border: 1px solid #353535;
  box-sizing: border-box;
  border-radius: 3px;
}

td,
th {
  border-bottom: 1px solid #d5e7ff;
  padding: 12px 47px;
}
td {
  font-weight: 400;
  color: #353535;
}
th {
  font-weight: 500;
}

th label {
  display: flex;
}

[type="checkbox"].filled-in:checked + span:not(.lever):after {
  border: 2px solid #353535;
  background-color: #353535;
}

.th-text {
  color: #353535;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.th-last-col {
  display: flex;
  align-items: center;
}

.table-row {
  position: relative;
}

.arrow-down {
  position: absolute;
  top: 40%;
  margin-left: 7px;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #002202;
}

.search input {
  margin-right: 20px;

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
}
.search-icon {
  position: absolute;
  padding: 10px;
}

.add-icon {
  position: absolute;
  left: 15px;
}

@media (max-width: 1440px) {
  .cabinet-teacher {
    table {
      margin: 0 auto;
      border-collapse: separate; /* Способ отображения границы */
      width: 100%;
    }
    &__container {
      margin: calc(10px + (20 - 10) * ((100vw - 320px) / (1440 - 320)))
        calc(10px + (80 - 10) * ((100vw - 320px) / (1440 - 320)));
    }
    // .cabinet-student__title
    &__title {
      font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(22px + (29 - 22) * ((100vw - 320px) / (1440 - 320)));
      margin-right: calc(20px + (60 - 20) * ((100vw - 320px) / (1440 - 320)));
    }

    // .cabinet-student__button
    &__button {
      margin-right: calc(10px + (20 - 10) * ((100vw - 320px) / (1440 - 320)));
      padding: 9px calc(10px + (14 - 10) * ((100vw - 320px) / (1440 - 320)));
    }
    &__info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 15px;
    }

    td,
    th,
    tr {
      padding: calc(6px + (12 - 6) * ((100vw - 320px) / (1440 - 320))) 18px;
      font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1440 - 320)));
      line-height: calc(16px + (20 - 16) * ((100vw - 320px) / (1440 - 320)));
    }
  }
}

@media (max-width: 1050px) {
  .cabinet-teacher {
    &__choise-class {
      display: flex;
    }
    &__bottom {
      display: flex;
      flex-direction: column;
    }
  }
}

@media (max-width: 767px) {
  .cabinet-teacher {
    &__filter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .select {
      margin-right: 0px;
      margin-bottom: 10px;
      min-width: 250px;
    }

    .search {
      margin-right: 0px;
      margin-bottom: 10px;
    }

    .search input {
      margin-right: 0px;
      min-width: 250px;
    }

    td,
    th,
    tr:nth-child(1) {
      width: 33.3%;
    }
    th {
      font-weight: 500;
    }
  }
}
</style>
