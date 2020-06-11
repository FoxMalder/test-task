<template>
  <input
    :type="typeInput"
    class="input"
    :class="classInput"
    :placeholder="placeholderInput"
    :name="nameInput"
    :value="value"
    v-model="inputValue"
  />
</template>

<script>
export default {
  name: "BaseInputField",
  props: {
    typeInput: {
      type: String,
      default: "text"
    },
    placeholderInput: {
      type: String
    },
    classInput: {
      type: String
    },
    nameInput: {
      type: String
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  watch: {
    inputValue() {
      this.$emit("input", this.inputValue);
    }
  }
};
</script>

<style lang="scss">
.input {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  border: 1px solid $grayLight-color;
  border-radius: $border-radius;
  &--error {
    border: 1px solid $error-color;
  }
}
</style>
