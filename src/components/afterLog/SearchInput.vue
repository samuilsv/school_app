<template>
  <div class="search">
    <img
      src="../../assets/headerAfterLog/Search.svg"
      class="search-icon"
      @click="getInputData"
    />
    <input
      placeholder="Пошук"
      v-model="searchValue"
      @keyup.enter="getInputData"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    searchValue: "",
  }),
  methods: {
    getInputData() {
      console.log(this.searchValue);
      this.$router.push("/search");
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
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
  background: #e5e5e5;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  margin-right: 20px;
}
.search-icon {
  position: absolute;
  padding: 10px;
  z-index: 3;
}

@media (max-width: 767px) {
  .search input {
    padding: 10px 57px;
    width: 303px;
    height: 60px;
    font-size: 24px;
    line-height: 32px;
  }
  .search-icon {
    height: 50px;
    margin-bottom: 10px;
  }
}
</style>
