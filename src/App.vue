<template>
  <div id="app">
    <BasePage>
      <router-view />
    </BasePage>
  </div>
</template>

<style lang="scss">
#app {
  height: calc(100% - 36px);
  min-height: 300px;
  padding: 36px 0;
}
</style>
