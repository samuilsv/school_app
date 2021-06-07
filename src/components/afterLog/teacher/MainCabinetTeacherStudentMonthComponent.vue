<template>
  <div class="cabinet-student">
    <div class="cabinet-student__container">
      <div class="cabinet-table">
        <div class="cabinet-student__top">
          <div class="cabinet-student__title">Кабінет</div>
          <div class="cabinet-student__link">
            <router-link to="#" class="cabinet-student__button active"
              >Класи</router-link
            >
            <router-link to="#" class="cabinet-student__button"
              >Статистика</router-link
            >
          </div>
        </div>
        <div class="cabinet-student__choise-class">
          <p>Класс Безстрашні</p>
          <CustomSelect
            :options="options"
            :default="'Всі'"
            class="select cabinet-student__element"
          />
          <div class="cabinet-student__link">
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
            </div>
            <div class="cabinet-student__info">
              <router-link
                to="/cabinetTeacherStudentClass"
                class="cabinet-student__button"
                >Тиждень</router-link
              >
              <router-link
                to="/cabinetTeacherStudentMonth"
                class="cabinet-student__button active"
                >Місяць</router-link
              >
              <div class="cabinet-student__calendar">
                <img src="../../../assets/icon/Calendar.svg" alt="Calendar" />
                <input type="text" ref="datapicker" class="datepicker" />
              </div>
              <p>Сумма балів<strong>34</strong></p>
            </div>

            <div class="table-body">
              <table class="highlight desktop">
                <thead>
                  <tr>
                    <th>
                      <div class="table-row">
                        Дата <i class="arrow-down"></i>
                      </div>
                    </th>
                    <th>Тестів</th>
                    <th>
                      <div class="center-th">
                        <div class="circular green-col"></div>
                        Правильно
                      </div>
                    </th>
                    <th>
                      <div class="center-th">
                        <div class="circular red-col"></div>
                        Не&nbsp;вірно
                      </div>
                    </th>
                    <th>
                      <div class="center-th">
                        <div class="circular grey-col"></div>
                        Не&nbsp;пройдено
                      </div>
                    </th>
                    <th>
                      <div class="table-row">
                        Бали <i class="arrow-down"></i>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Лютий</td>
                    <td>1</td>
                    <td colspan="3">
                      <div class="progress">
                        <div
                          class="determinate green-col"
                          style="width: 70%"
                        ></div>
                      </div>
                    </td>
                    <td>13&nbsp;/&nbsp;<strong>20</strong></td>
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
                    <td>30&nbsp;/&nbsp;<strong>32</strong></td>
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

          <StudentInfo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import CustomSelect from "./Select";
import StudentInfo from "./TeacherStudentInfo";

export default {
  data: () => ({
    options: [
      {
        id: 1,
        name: "Андрусевич Анна",
      },
      {
        id: 2,
        name: "Босун Денис",
      },
      {
        id: 3,
        name: "Горішко Олена",
      },
      {
        id: 4,
        name: "Пяточкін Петро",
      },
      {
        id: 5,
        name: "Всі",
      },
    ],
  }),
  components: {
    CustomSelect,
    StudentInfo,
  },
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
};
</script>

<style lang="scss" scoped>
.cabinet-student {
  // .cabinet-student__body
  &__top {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  &__table {
    margin-right: 20px;
  }

  &__choise-class {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  &__choise-class p {
    flex: 0 1 15%;
    min-width: 140px;
  }

  &__button {
    flex: 0 1 20%;
  }

  .select {
    margin: 0 20px;
    flex: 0 1 20%;
    min-width: 182px;
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

  &__info {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  &__info a {
    flex: 0 1 10%;
    text-align: center;
  }

  &__calendar {
    display: flex;
    align-items: center;
  }

  &__calendar input {
    flex: 0 1 80%;
    position: relative;
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

  &__calendar img {
    position: absolute;
    padding-left: 19px;
    padding-bottom: 10px;
  }

  &__info p {
    flex: 0 1 15%;
    font-weight: 500;
    color: #353535;
    min-width: 130px;
  }
  &__info > p > strong {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #62c567;
    margin-left: 10px;
  }

  &__filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 19px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  &__bottom p {
    display: flex;
    align-items: center;
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
  color: #ea4335;
}

.table-body {
  width: 100%;
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d5e7ff;
  border-radius: 20px;
  min-width: 760px;
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
  top: 45%;
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
  background-color: rgba(53, 53, 53, 0.6);
  border: 1px solid rgba(53, 53, 53, 0.6);
}

.center-th {
  display: flex;
}
.center-th .circular {
  margin-right: 5px;
}

.bold-green {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #62c567;
  margin-left: 30px;
}
.bold {
  color: #353535;
  margin-left: 30px;
}
.determinate {
  border-radius: 20px;
}
.progress {
  height: 28px;
  border-radius: 20px;
  background-color: #fff;
}

@media (max-width: 1440px) {
  .cabinet-student {
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
    &__info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 15px;
    }

    td,
    th,
    tr {
      // border: 1px solid #d5e7ff;
      padding: calc(6px + (12 - 6) * ((100vw - 320px) / (1180 - 320)))
        calc(6px + (18 - 6) * ((100vw - 320px) / (1180 - 320)));
      font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1180 - 320)));
      line-height: calc(16px + (20 - 16) * ((100vw - 320px) / (1180 - 320)));
    }
  }
}

@media (max-width: 1235px) {
  .cabinet-student {
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
  .cabinet-student {
    &__choise-class {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    &__choise-class p {
      flex: 1 1 100%;
      margin-bottom: 10px;
    }

    &__link a {
      flex: 1 1 50%;
    }

    .select {
      flex: 1 1 100%;
      margin-bottom: 20px;
    }

    &__filter {
      justify-content: center;
    }
    &__info {
      justify-content: center;
    }

    &__info a {
      flex: 1 1 50%;
      margin-bottom: 10px;
    }

    &__calendar input {
      flex: 1 1 97%;
      margin-right: 10px;
    }

    &__info p {
      flex: 0 0 0%;
      text-align: center;
    }

    .select {
      flex: 0 1 30%;
    }
  }
}
</style>
