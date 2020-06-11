<template>
  <BaseForm class="search-form" @onSubmit.prevent="handleSubmit">
    <BaseInputField
      type="search"
      placeholder="Введите название"
      class="search-form__input"
      v-model="searchText"
    />
  </BaseForm>
</template>
<script>
// @ is an alias to /src
import BaseForm from "@/components/Base/BaseForm.vue";
import BaseInputField from "@/components/Base/BaseInputField.vue";

export default {
  name: "SearchForm",
  components: {
    BaseForm,
    BaseInputField
  },
  data: () => ({
    searchText: ""
  }),
  methods: {
    handleSubmit() {
      this.$store.commit("setSearchText", this.searchText);
      this.$store.dispatch("getSerials", this.searchText);
    }
  }
};
</script>

<style lang="scss">
.search-form {
  width: 100%;
  &__input {
    width: 100%;
  }
}
</style>
