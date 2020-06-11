<template>
  <header class="header" :class="headerClass">
    <BaseTitle class="header__title">Каталог сериалов</BaseTitle>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    headerClass: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.header {
  &__title {
    font-size: 24px;
  }
}
</style>
