<template>
  <div class="serial">
    <router-link to="/" class="serial__back-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492">
        <path
          fill="white"
          d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
      c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
      L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
      c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
      c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
      C492,219.198,479.172,207.418,464.344,207.418z"
        />
      </svg>
    </router-link>
    <img
      :src="serialData.image.medium"
      :alt="serialData.name"
      class="serial__img"
    />
    <div class="serial__info">
      <h4>{{ serialData.name }}</h4>
      <p class="serial__summary" v-html="serialSummary"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSerial",
  props: {
    serialData: {
      type: Object,
      required: true
    }
  },
  computed: {
    serialSummary() {
      return this.serialData.summary;
    }
  }
};
</script>

<style lang="scss">
.serial {
  display: flex;
  position: relative;
  &__back-link {
    position: absolute;
    right: 0;
    top: -50px;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    background-color: $primary-color;
  }
  &__img {
    max-width: 250px;
    height: 295px;
    object-fit: cover;
  }
  &__info {
    margin-left: 20px;
  }
}
</style>
