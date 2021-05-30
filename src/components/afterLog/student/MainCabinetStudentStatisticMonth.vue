<template>
  <div class="cabinet-student">
    <div class="cabinet-student__container">
      <div class="cabinet-table">
        <div class="cabinet-student__top">
          <div class="cabinet-student__title">Кабінет</div>
          <div class="cabinet-student__list">
            <router-link to="#" class="cabinet-student__button"
              >Герої</router-link
            >
            <router-link to="#" class="cabinet-student__button active"
              >Статистика</router-link
            >
          </div>
        </div>
        <div class="cabinet-student__bottom">
          <!-- <Hero /> -->
          <div class="cabinet-student__table">
            <div class="cabinet-student__filter">
              <div class="cabinet-student__message">
                Обери героя та часовий проміжок для показу статистики
              </div>
              <p>Сумма балів<strong>34</strong></p>
            </div>
            <div class="cabinet-student__body">
              <router-link
                to="/cabinetStudentStatisticWeek"
                class="cabinet-student__button"
                >Тиждень</router-link
              >
              <router-link
                to="/cabinetStudentStatisticMonth"
                class="cabinet-student__button active"
                >Місяць</router-link
              >
              <div class="cabinet-student__calendar">
                <img src="../../../assets/icon/Calendar.svg" alt="Calendar" />
                <input type="text" ref="datapicker" class="datepicker" />
              </div>
              <CustomSelect
                :options="[
                  {
                    id: 1,
                    name: 'Граматика',
                    url: require('../../../assets/headerAfterLog/Icon_1.svg'),
                  },
                  {
                    id: 2,
                    name: 'Гуглик',
                    url: require('../../../assets/headerAfterLog/Icon_2.svg'),
                  },
                  {
                    id: 3,
                    name: 'Нишпорка',
                    url: require('../../../assets/headerAfterLog/Icon_3.svg'),
                  },
                  {
                    id: 4,
                    name: 'Римуся',
                    url: require('../../../assets/headerAfterLog/Icon_4.svg'),
                  },
                  {
                    id: 5,
                    name: 'Цікавинка',
                    url: require('../../../assets/headerAfterLog/Icon_5.svg'),
                  },
                  {
                    id: 6,
                    name: 'Читайський',
                    url: require('../../../assets/headerAfterLog/Icon_6.svg'),
                  },
                  {
                    id: 7,
                    name: 'Всі герої',
                    url: require('../../../assets/headerAfterLog/AllPerson.svg'),
                  },
                ]"
                :default="'Всі герої'"
                class="select cabinet-student__element"
              />
            </div>

            <table class="highlight desktop">
              <thead>
                <tr>
                  <th>Дата <i class="arrow-down"></i></th>
                  <th>Тестів</th>
                  <th>
                    <div class="center">
                      <div class="circular green-col"></div>
                      Правильно
                    </div>
                  </th>
                  <th>
                    <div class="center">
                      <div class="circular red-col"></div>
                      Не вірно
                    </div>
                  </th>
                  <th>
                    <div class="center">
                      <div class="circular grey-col"></div>
                      Не пройдено
                    </div>
                  </th>
                  <th>Бали <i class="arrow-down"></i></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Лютий</td>
                  <td>1</td>
                  <td colspan="3">
                    <div class="progress miniBar">
                      <div
                        class="determinate green-col miniBarProgress"
                        style="width: 50%; left: 0; z-index: 3"
                      ></div>
                      <div
                        class="determinate red-col miniBarProgress"
                        style="width: 30%; left: 40%; z-index: 2"
                      ></div>
                      <div
                        class="determinate grey-col miniBarProgress"
                        style="width: 0%; left: 0%; z-index: 1"
                      ></div>
                    </div>
                  </td>
                  <td>13 / <strong>20</strong></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Березень</td>
                  <td>2</td>
                  <td colspan="3">
                    <div class="progress miniBar">
                      <div
                        class="determinate green-col miniBarProgress"
                        style="width: 75%; left: 0; z-index: 3"
                      ></div>
                      <div
                        class="determinate red-col miniBarProgress"
                        style="width: 30%; left: 55%; z-index: 2"
                      ></div>
                      <div
                        class="determinate grey-col miniBarProgress"
                        style="width: 20%; left: 70%; z-index: 1"
                      ></div>
                    </div>
                  </td>
                  <td>30 / <strong>32</strong></td>
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
            <table class="highlight mobil">
              <thead>
                <tr>
                  <th>Дата <i class="arrow-down"></i></th>
                  <th>Тестів</th>
                  <th>Бали <i class="arrow-down"></i></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>13.04.2020</td>
                  <td>1</td>
                  <td>13 / <strong>20</strong></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>14.04.2020</td>
                  <td>2</td>
                  <td>30 / <strong>32</strong></td>
                </tr>
              </tbody>
              <tbody>
                <tr>
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
                </tr>
              </tbody>
              <tbody>
                <tr>
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
                </tr>
              </tbody>
            </table>
            <table class="highlight mobil">
              <thead>
                <tr>
                  <th>
                    <div class="center">
                      <div class="circular green-col"></div>
                      Правильно
                    </div>
                  </th>
                  <th>
                    <div class="center">
                      <div class="circular red-col"></div>
                      Не вірно
                    </div>
                  </th>
                  <th>
                    <div class="center">
                      <div class="circular grey-col"></div>
                      Не пройдено
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="3">
                    <div class="progress miniBar">
                      <div
                        class="determinate green-col miniBarProgress"
                        style="width: 50%; left: 0; z-index: 3"
                      ></div>
                      <div
                        class="determinate red-col miniBarProgress"
                        style="width: 30%; left: 40%; z-index: 2"
                      ></div>
                      <div
                        class="determinate grey-col miniBarProgress"
                        style="width: 0%; left: 0%; z-index: 1"
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td colspan="3">
                    <div class="progress miniBar">
                      <div
                        class="determinate green-col miniBarProgress"
                        style="width: 50%; left: 0; z-index: 3"
                      ></div>
                      <div
                        class="determinate red-col miniBarProgress"
                        style="width: 30%; left: 40%; z-index: 2"
                      ></div>
                      <div
                        class="determinate grey-col miniBarProgress"
                        style="width: 0%; left: 0%; z-index: 1"
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
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
                </tr>
              </tbody>
              <tbody>
                <tr>
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
                </tr>
              </tbody>
            </table>
          </div>

          <StudentInfo class="student-info" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from "../Select";
import StudentInfo from "./StudentInfoBlock";
import M from "materialize-css";

export default {
  data: () => ({
    options: [],
  }),
  mounted() {
    M.Datepicker.init(this.$refs.datapicker, {
      firstDay: 1,
      disableWeekends: true,
      setDefaultDate: true,
      defaultDate: new Date(),
      onSelect: function datePickerHandler() {
        console.log("hi");
      },
      format: "mmmm",
      i18n: {
        months: [
          "Січень",
          "Лютий",
          "Березень",
          "Квітень",
          "Травень",
          "Червень",
          "Липень",
          "Серпень",
          "Вересень",
          "Жовтень",
          "Листопад",
          "Грудень",
        ],
        monthsShort: [
          "сiч",
          "лют",
          "бер",
          "квiт",
          "трав",
          "черв",
          "лип",
          "серп",
          "вер",
          "жовт",
          "лист",
          "груд",
        ],
        weekdays: [
          "Неділя",
          "Понеділок",
          "Вівторок",
          "Середа",
          "Четвер",
          "П’ятниця",
          "Субота",
        ],
        weekdaysShort: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
        weekdaysAbbrev: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      },
    });
  },
  components: {
    CustomSelect,
    StudentInfo,
  },
};
</script>

<style lang="scss" scoped>
.cabinet-student {
  // .cabinet-student__body
  &__body {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__container {
    margin: 0px 80px 0 80px;
  }

  // .cabinet-student__title
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #353535;
    margin-right: 60px;
  }

  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  // .cabinet-student__button
  &__button {
    margin-right: 20px;
    padding: 9px 14px;

    border: 1px solid #d5e7ff;
    box-sizing: border-box;
    border-radius: 10px;
    text-decoration: none;
    align-items: center;
    color: #7b7b7b;
  }
  &__button:last-child {
    margin-right: 0;
  }
  &__message {
    font-weight: 500;
    color: rgba(53, 53, 53, 0.6);
    background: #ffffff;
    box-shadow: 0px 2px 15px rgba(204, 219, 224, 0.5);
    border-radius: 10px;
    margin-right: 10px;
    padding: 6px 10px;
  }
  &__calendar {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__calendar > input {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #353535;
    border: 1px solid rgba(53, 53, 53, 0.6);
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px 19px 10px 49px;
    margin-right: 20px;
  }

  &__calendar > img {
    top: 23%;
    left: 1.5rem;
    position: absolute;
  }

  &__filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 19px;
  }

  &__filter p {
    font-weight: 500;
    color: #353535;
  }
  &__filter > p > strong {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #62c567;
    margin-left: 10px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  &__bottom p {
    display: flex;
    align-items: center;
  }

  &__bottom img.icon {
    padding: 10px 11px;
    background: rgba(53, 53, 53, 0.6);
    border-radius: 10px;
    margin-left: 13px;
    max-width: 42px;
  }

  &__bottom img.icon:last-child {
    max-width: 50px;
  }

  &__choise-class {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .mobil {
    display: none;
  }

  @media (max-width: 1180px) {
    .desktop {
      margin: 0 auto;
      border-collapse: separate; /* Способ отображения границы */
      width: 100%;
      border-spacing: 2px 5px; /* Расстояние между ячейками */
    }
    &__container {
      margin: calc(10px + (20 - 10) * ((100vw - 320px) / (1180 - 320)))
        calc(10px + (80 - 10) * ((100vw - 320px) / (1180 - 320)));
    }
    // .cabinet-student__title
    &__title {
      font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1180 - 320)));
      line-height: calc(22px + (29 - 22) * ((100vw - 320px) / (1180 - 320)));
      margin-right: calc(20px + (60 - 20) * ((100vw - 320px) / (1180 - 320)));
    }

    // .cabinet-student__button
    &__button {
      margin-right: calc(10px + (20 - 10) * ((100vw - 320px) / (1180 - 320)));
      padding: 9px calc(10px + (14 - 10) * ((100vw - 320px) / (1180 - 320)));
    }
    &__body {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 15px;
    }

    &__body a {
      margin: 10px;
    }

    &__element {
      flex: 0 1 20%;
    }
    &__calendar {
      flex: 0 1 40%;
    }

    .desktop {
      margin: 0 auto;
      border-collapse: separate; /* Способ отображения границы */
      width: 100%;
      border-spacing: 2px 5px; /* Расстояние между ячейками */
    }

    td,
    th,
    tr {
      // border: 1px solid #d5e7ff;
      border-bottom: 1px solid #d5e7ff;
      padding: calc(6px + (12 - 6) * ((100vw - 320px) / (1180 - 320)))
        calc(6px + (18 - 6) * ((100vw - 320px) / (1180 - 320)));
      position: relative;
      font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1180 - 320)));
      line-height: calc(16px + (20 - 16) * ((100vw - 320px) / (1180 - 320)));
    }
    td {
      font-weight: 400;
      color: #353535;
    }
    th {
      font-weight: 500;
    }
  }

  @media (max-width: 1235px) {
    &__bottom {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 666px) {
    &__body {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 15px;
    }

    &__element {
      flex: 0 1 20%;
    }
    &__calendar {
      flex: 0 1 50%;
    }
    .select {
      flex: 0 1 50%;
      align-self: flex-end;
    }
    .mobil {
      display: block;
    }
    .mobil {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
}

.miniBarProgress {
  height: 100%;
  position: absolute;
  top: 0rem;
  left: 0rem;
}
.miniBar {
  height: 0.5rem;
  position: relative;
  width: -webkit-calc(100% - 2rem);
  width: -moz-calc(100% - 2rem);
  width: calc(100% - 2rem);
  margin-right: 0.5rem;
}

.active {
  font-weight: 500;
  padding: 9px 20px;
  color: #353535;
  background: #d5e7ff;
  border-radius: 10px;
}

strong {
  color: #ea4335;
}
table {
  font-family: arial, sans-serif;
  background: #ffffff;
  border: 1px solid #d5e7ff;
  box-sizing: border-box;
  border-radius: 20px;
}

td,
th,
tr {
  // border: 1px solid #d5e7ff;
  border-bottom: 1px solid #d5e7ff;
  padding: 12px 18px;
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

.circular {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
.green-col {
  border: 1px solid #62c567;
  background-color: #62c567;
}
.red-col {
  background-color: #ea4335;
  border: 1px solid #ea4335;
}

.grey-col {
  background-color: rgb(134, 134, 134);
}

.center {
  display: flex;
}
.center .circular {
  margin-right: 5px;
}

.determinate {
  border-radius: 20px;
}
.progress {
  height: 28px;
  border-radius: 20px;
  background-color: #fff;
}
.selected {
  background-color: rgba(213, 231, 255, 0.5);
}
</style>
