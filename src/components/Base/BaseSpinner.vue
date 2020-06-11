<template>
  <div class="spinner" :class="spinnerSize"></div>
</template>
<script>
export default {
  name: "BaseSpinner",
  props: {
    spinnerSize: {
      type: String,
      default: "spinner--size--medium"
    }
  }
};
</script>
<style lang="scss">
.spinner {
  margin: 0 auto;
  border-radius: 100%;
  animation: spinner-spin 0.6s linear infinite;
  transition: all 0.3s linear;
  &--size--tiny {
    width: 12px;
    height: 12px;
    border: 1px solid $gray-color;
    border-top: 1px solid $blue-color;
  }
  &--size--medium {
    width: 32px;
    height: 32px;
    border: 3px solid $gray-color;
    border-top: 3px solid $blue-color;
  }
  &--size--giant {
    width: 128px;
    height: 128px;
    border: 5px solid $gray-color;
    border-top: 5px solid $blue-color;
  }
}

@keyframes spinner-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
