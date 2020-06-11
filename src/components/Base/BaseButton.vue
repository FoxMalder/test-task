<template>
  <button :type="typeButton" class="button" :class="classButton">
    <slot />
  </button>
</template>
<script>
export default {
  name: "BaseButton",
  props: {
    typeButton: {
      type: String,
      default: "button"
    },
    classButton: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.button {
  cursor: pointer;
  border-radius: $border-radius;
  outline: none;
  border: none;
  font-weight: 500;
  white-space: nowrap;
  transition: border-color $animation-duration;
  &:hover {
    border: none;
  }
  &:disabled {
    background-color: #d5d5d5;
  }
  &--theme--primary {
    background-color: $primary-color;
    color: white;
    border: 1px solid $primary-border-color;
    transition: opacity $animation-duration,
      background-color $animation-duration, color $animation-duration;
  }
  &--theme--primary:disabled {
    background-color: $primary-color;
    opacity: 0.4;
  }
  &--theme--primary:not(:disabled):hover {
    color: $primary-color;
    background-color: white;
  }
  &--size--default {
    height: 48px;
    line-height: 48px;
    padding: 0 $spacer/2;
  }
}
</style>
