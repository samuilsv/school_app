<template>
  <div class="cabinet-teacher">
    <div class="cabinet-teacher__container">
      <div class="cabinet-teacher__top">
        <div class="cabinet-teacher__title">Кабінет</div>
        <div class="cabinet-teacher__link">
          <router-link
            to="/cabinetTeacher"
            class="cabinet-teacher__button active"
            >Класи</router-link
          >
          <router-link
            to="/cabinetStatisticTeacher"
            class="cabinet-teacher__button"
            >Статистика</router-link
          >
        </div>
      </div>
      <div class="cabinet-teacher__bottom">
        <div class="cabinet-teacher__table">
          <div class="cabinet-teacher__filter">
            <div class="search">
              <img
                src="../../../assets/headerAfterLog/Search.svg"
                class="search-icon"
                @click="getInputData"
              />
              <input
                placeholder="Пошук по імені"
                v-model="searchValue"
                @keyup.enter="getInputData"
              />
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
          <div class="table-body">
            <table class="highlight desktop">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="filled-in" />
                      <span class="th-text">№</span>
                    </label>
                  </th>
                  <th>Клас</th>
                  <th>Школа</th>
                  <th>Кількість&nbsp;учнів<i class="arrow-down"></i></th>
                  <th>Бали<i class="arrow-down"></i></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox" class="filled-in" />
                      <span class="th-text">1</span>
                    </label>
                  </td>
                  <td>2-а</td>
                  <td>№36</td>
                  <td>25</td>
                  <td><strong>13&nbsp;/&nbsp;</strong>130</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox" class="filled-in" />
                      <span class="th-text">2</span>
                    </label>
                  </td>
                  <td>2-а</td>
                  <td>№36</td>
                  <td>22</td>
                  <td><strong>30 /</strong> 150</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
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
                </tr>
              </tbody>
              <tbody>
                <tr>
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
    searchValue: "",
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
    getInputData() {
      this.$router.push("/cabinetTeacherStudentClass");
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
strong {
  color: #62c567;
}
table {
  width: 100%;
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

.table-body {
  width: 100%;
  overflow-x: auto;
}

th label {
  display: flex;
}

[type="checkbox"].filled-in:checked + span:not(.lever):after {
  border: 2px solid #353535;
  background-color: #353535;
}

td,
th,
tr {
  // border: 1px solid #d5e7ff;
  border-bottom: 1px solid #d5e7ff;
  text-align: left;
  padding: 12px 27px;
  position: relative;
}
td {
  font-weight: 400;
  color: #353535;
}
th {
  font-weight: 500;
}

.th-text {
  color: #353535;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
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
  margin-right: 20px;

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
}
.search-icon {
  position: absolute;
  padding: 10px;
}

.add-icon {
  position: absolute;
  left: 15px;
}

.mobil {
  display: none;
}

@media (max-width: 1440px) {
  .cabinet-teacher {
    .desktop {
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

    .search input {
      margin-right: 0;
    }

    .mobil {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }

    td,
    th,
    tr:nth-child(1) {
      width: 33.3%;
    }
    th {
      font-weight: 500;
    }
    .mobil:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
