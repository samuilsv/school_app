<template>
  <div class="cabinet-student__table">
    <div class="cabinet-student__filter">
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
        class="select"
      />
      <div class="cabinet-student__message">Бали набрали за завдання</div>
      <p><strong>34</strong></p>
    </div>
    <div class="table-body">
      <table class="highlight desktop">
        <tr>
          <th>Дата <i class="arrow-down"></i></th>
          <th>Герой <i class="arrow-down"></i></th>
          <th>Назва <i class="arrow-down"></i></th>
          <th>Клас <i class="arrow-down"></i></th>
          <th>Бали <i class="arrow-down"></i></th>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>п. Читайський</td>
          <td>Рима на А</td>
          <td>3-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>Цікавинка</td>
          <td>Смола</td>
          <td>1-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>п. Читайський</td>
          <td>Рима на А</td>
          <td>3-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>Цікавинка</td>
          <td>Смола</td>
          <td>1-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>п. Читайський</td>
          <td>Рима на А</td>
          <td>3-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
        <tr>
          <td>13.05.2020</td>
          <td>Цікавинка</td>
          <td>Смола</td>
          <td>1-й клас</td>
          <td><strong>13 /</strong> 130</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import CustomSelect from "./Select";
export default {
  components: {
    CustomSelect,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 40px 80px 0 80px;
}
.cabinet-student {
  // .cabinet-student__body
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
    align-items: center;
    color: #7b7b7b;
  }
  &__button:last-child {
    margin-right: 0;
  }
  & input {
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
  & input::after {
    position: absolute;
    content: "";
    z-index: 2;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #002202;
  }
  &__filter {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 19px;
  }

  .select {
    flex: 0 1 30%;
    align-self: flex-end;
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
  &__message {
    margin-left: 40px;
    margin-right: 10px;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  .mobil {
    display: none;
  }

  @media (max-width: 1440px) {
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

    .select {
      flex: 0 1 30%;
      align-self: flex-end;
    }
    .mobil {
      display: block;
    }
    .desktop {
      display: none;
    }
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

.table-body {
  width: 100%;
  overflow-x: auto;
}

table {
  min-width: 770px;
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
.green {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #62c567;
  margin-left: 30px;
}
</style>
