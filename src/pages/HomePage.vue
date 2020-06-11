<template>
  <div>
    <TheHeader />
    <SearchForm />
    <div class="content">
      <div class="items" v-if="!checkItemsIsEmpty">
        <TheCard v-for="item in items" :key="item.id" :item="item" />
      </div>
      <div v-else>
        <h5>{{ setText }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/UI/TheHeader.vue";
import SearchForm from "@/components/UI/SearchForm.vue";
import TheCard from "@/components/UI/TheCard.vue";

export default {
  name: "HomePage",
  components: {
    TheHeader,
    TheCard,
    SearchForm
  },
  computed: {
    checkItemsIsEmpty() {
      return this.items.length === 0;
    },
    checkSearchTextIsEmpty() {
      return this.searchText.length === 0;
    },
    items() {
      return this.$store.state.serials;
    },
    searchText() {
      return this.$store.state.searchText;
    },
    setText() {
      return this.checkItemsIsEmpty && this.checkSearchTextIsEmpty
        ? 'Напишите название сериала и нажмите "Enter"'
        : "Ничего не найдено";
    }
  }
};
</script>

<style lang="scss">
.content {
  margin-top: 16px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
}
</style>
