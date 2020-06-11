<template>
  <div class="serialPage">
    <BaseSpinner class="spinner--size--giant" v-if="!serialData" />
    <TheSerial :serialData="serialData" v-else />
  </div>
</template>

<script>
import TheSerial from "@/components/UI/TheSerial.vue";

export default {
  name: "SerialPage",
  components: {
    TheSerial
  },
  computed: {
    serialData() {
      return this.$store.state.serial;
    },
    serialId() {
      return this.$route.params.id;
    }
  },
  mounted() {
    this.$store.dispatch("getSerial", this.serialId);
  },
  beforeDestroy() {
    this.$store.commit("clearSerial");
  }
};
</script>

<style lang="scss"></style>
