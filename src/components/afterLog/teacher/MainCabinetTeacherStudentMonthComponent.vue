<template>
  <div class="cabinet-student">
    <div class="cabinet-student__container">
      <div class="cabinet-table">
        <div class="cabinet-student__body">
          <div class="cabinet-student__title">Кабінет</div>
          <router-link to="#" class="cabinet-student__button active"
            >Класи</router-link
          >
          <router-link to="#" class="cabinet-student__button"
            >Статистика</router-link
          >
        </div>
        <div class="cabinet-student__choise-class">
          <p>Класс Безстрашні</p>
          <div class="input-field col s12 change-select">
            <select ref="select">
              <option value="" disabled selected>Діти</option>
              <option value="1">Андрусевич Анна</option>
              <option value="2">Босун Денис</option>
              <option value="3">Горішко Олена</option>
              <option value="4">Пяточкін Петро</option>
              <option value="5">Всі</option>
            </select>
          </div>
          <router-link to="#" class="cabinet-student__button"
            >Герої</router-link
          >
          <router-link to="#" class="cabinet-student__button active"
            >Статистика</router-link
          >
        </div>
        <div class="cabinet-student__bottom">
          <!-- <Hero /> -->
          <div class="cabinet-student__table">
            <div class="cabinet-student__filter">
              <div class="cabinet-student__message">
                Обери героя та часовий проміжок для показу статистики
              </div>
            </div>
            <div class="cabinet-student__body">
              <router-link to="#" class="cabinet-student__button"
                >Тиждень</router-link
              >
              <router-link to="#" class="cabinet-student__button active"
                >Місяць</router-link
              >
              <div class="cabinet-student__calendar">
                <img src="../../../assets/icon/Calendar.svg" alt="Calendar" />
                <input type="text" placeholder="Лютий - березень" />
              </div>
              <p>Сумма балів<strong>34</strong></p>
            </div>

            <table class="highlight">
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
                    <div class="progress">
                      <div
                        class="determinate green-col"
                        style="width: 70%"
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
                    <div class="progress">
                      <div
                        class="determinate green-col"
                        style="width: 30%"
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
          </div>

          <div class="info-student">
            <div class="info-student__body">
              <div class="info-student__top">
                <img
                  class="info-student__photo"
                  src="../../../assets/main/Child.png"
                  alt="Child"
                />
                <button class="info-student__button">Редагувати</button>
              </div>
              <div class="info-student__bottom">
                <div class="info-student__name">Петро Пяточкін</div>
                <p>Бали<strong class="bold-green">134</strong></p>
                <p>Школа<strong class="bold">№36</strong></p>
                <p>Клас<strong class="bold">Безстрашні</strong></p>
                <p>
                  E-mail<strong class="bold">p.pyatochkin@gmail.com</strong>
                </p>
                <p>
                  Пароль<strong class="bold">••••••••</strong
                  ><img
                    class="icon"
                    src="../../../assets/icon/ChangePhoto.svg"
                    alt=""
                  /><img
                    class="icon"
                    src="../../../assets/icon/Copy.svg"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  mounted() {
    M.FormSelect.init(this.$refs.select, {});
  },
};
</script>

<style lang="scss" scoped>
.cabinet-student {
  // .cabinet-student__body
  &__body {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
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
  &__calendar {
    display: flex;
    align-items: center;
  }

  &__calendar input {
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
    margin-left: 19px;
  }
  &__body p {
    font-weight: 500;
    color: #353535;
  }
  &__body > p > strong {
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
  background-color: rgba(53, 53, 53, 0.6);
  border: 1px solid rgba(53, 53, 53, 0.6);
}

.center {
  display: flex;
}
.center .circular {
  margin-right: 5px;
}

.info-student {
  // .info-student__body
  &__body {
    margin-top: 3rem;
    background: #ffffff;
    box-shadow: 0px 2px 25px rgba(204, 219, 224, 0.5);
    border-radius: 20px;
    padding: 32px 40px;
    margin-bottom: 100px;
  }

  // .info-student__top
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  // .info-student__photo
  &__photo {
    margin-bottom: 25px;
    margin-right: 30px;
    display: block;
    max-width: 100%;
    height: 10%;
  }

  // .info-student__button
  &__button {
    position: relative;
    font-weight: 500;
    color: rgba(53, 53, 53, 0.6);
    background: #e5e5e5;
    border-radius: 10px;
    padding: 9px 18px 9px 38px;
    cursor: pointer;
  }
  &__button::before {
    align-self: center;
    position: absolute;
    top: 25%;
    left: 10%;
    content: url("../../../assets/icon/ChangeIcon.svg");
  }

  // .info-student__name
  &__name {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 25px;
  }
  p {
    font-weight: 500;
    margin-bottom: 12px;
  }
  p button {
    padding-left: 20px;
    cursor: pointer;
    font-weight: 500;
    color: rgba(53, 53, 53, 0.6);
    background-color: #fff;
    position: relative;
  }
  p button::before {
    padding-right: 10px;
    position: relative;
    content: url("../../../assets/icon/ChangeIcon.svg");
    top: 2px;
    left: 0;
  }
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
.selected {
  background-color: rgba(213, 231, 255, 0.5);
}
.change-select {
  margin: 0 20px;
  max-width: 203px;
  border: 1px solid rgba(53, 53, 53, 0.6);
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #353535;
  padding: 0 10px;
}
.change-select select {
  color: #353535;
  padding: 8px 12px;
  border-bottom: none;
}
.select-wrapper input.select-dropdown {
  border-bottom: none;
}
</style>
