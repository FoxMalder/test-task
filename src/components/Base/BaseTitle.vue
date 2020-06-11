<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: "VPageTitle"
};
</script>

<style lang="scss">
.title {
  width: 100%;
  margin-top: 0;
  margin-bottom: 18px;
  color: $primary-color;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.2;
}
</style>
