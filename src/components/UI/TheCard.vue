<template>
  <div class="card">
    <div class="card__container">
      <img
        :src="item.show.image.medium"
        :alt="item.show.name"
        class="card__img"
      />
      <div class="card__info">
        <router-link
          class="card__name"
          :to="{ name: 'SerialPage', params: { id: item.show.id } }"
        >
          {{ item.show.name }}
        </router-link>
        <p class="card__descr" v-html="serialSummary"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCard",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    serialSummary() {
      return this.item.show.summary
        ? String(this.item.show.summary).substr(0, 80) + "..."
        : "";
    }
  }
};
</script>

<style lang="scss">
.card {
  flex: 0 0 25%;
  padding: 0 16px;
  background: white;
  margin-bottom: 20px;
  &__container {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  &__info {
    padding: 12px;
  }
  &__name {
    display: block;
    color: $success-color;
    text-decoration: none;
  }
  &__img {
    width: 100%;
    max-height: 260px;
    object-fit: cover;
  }
  &__descr {
    font-size: 15px;
    min-height: 64px;
  }
}
</style>
