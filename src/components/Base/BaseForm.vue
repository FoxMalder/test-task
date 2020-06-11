<template>
  <form class="form" :class="classForm" @submit="$emit('onSubmit', $event)">
    <slot />
  </form>
</template>

<script>
export default {
  name: "BaseForm",
  props: {
    classForm: {
      type: String
    }
  }
};
</script>
