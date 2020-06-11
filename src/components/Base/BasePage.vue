<template>
  <div class="page container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BasePage"
};
</script>

<style lang="scss">
.page {
  // height: inherit;
  padding: $spacer 30px;
}
</style>
