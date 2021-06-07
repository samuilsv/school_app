<template>
  <div class="cabinet-student">
    <div class="cabinet-student__container">
      <div class="cabinet-student__body">
        <div class="cabinet-student__top">
          <div class="cabinet-student__title">Кабінет</div>
          <a
            class="cabinet-student__button"
            @click="isActive = !isActive"
            :class="{ active: isActive }"
          >
            Герої
          </a>
          <a
            class="cabinet-student__button"
            @click="isActive = !isActive"
            :class="{ active: !isActive }"
          >
            Статистика
          </a>
        </div>

        <div class="cabinet-student__bottom">
          <Hero v-if="isActive" />
          <Statistic v-else />

          <StudentInfo class="student-info" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "./MainCabinetComponentStudent";
import Statistic from "./MainCabinetComponentStatistic";
import StudentInfo from "./StudentInfoBlock";

export default {
  data: () => ({
    isActive: false,
  }),
  components: {
    Hero,
    Statistic,
    StudentInfo,
  },
};
</script>

<style lang="scss" scoped>
.cabinet-student {
  // .cabinet-student__body
  &__container {
    margin: 0 80px;
  }

  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 30px;
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
  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 1440px) {
    &__container {
      margin: 0px calc(10px + (80 - 10) * ((100vw - 320px) / (1440 - 320)));
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
  }

  @media (max-width: 1235px) {
    &__bottom {
      display: flex;
      flex-direction: column;
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
</style>
