<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option.name;
          open = false;
          $emit('input', option.name);
        "
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 40%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  border: 1px solid rgba(53, 53, 53, 0.6);
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #353535;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  transition: all 0.5s ease 0s;
}

.custom-select .selected.open {
  border: 1px solid rgba(213, 231, 255, 0.5);
  box-shadow: -1px 1px 1px rgba(159, 159, 161, 0.5);
  border-radius: 10px 10px 0px 0px;
}

.custom-select .selected::after {
  position: absolute;
  content: "";
  top: 45%;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #353535 transparent transparent transparent;
  transition: all 0.3s ease 0s;
}

.custom-select .items {
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
  border-right: 1px solid rgba(213, 231, 255, 0.5);
  border-left: 1px solid rgba(213, 231, 255, 0.5);
  border-bottom: 1px solid rgba(213, 231, 255, 0.5);
  box-shadow: -1px 1px 1px rgba(159, 159, 161, 0.5);
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  background-color: #fff;

  left: 0;
  right: 0;
  z-index: 4;
}

.custom-select .items div {
  display: flex;
  align-items: center;
  padding: 12px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #353535;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items > div > img {
  margin-right: 10px;
  max-width: 20px;
  height: 20px;
}

.custom-select .items div:hover {
  background: rgba(213, 231, 255, 0.5);
}

.selectHide {
  display: none;
}
</style>
