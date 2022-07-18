<template>
  <div>
    <!-- サンプルのコンポーネントです -->
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'SampleComponent',
  props: {
    sample: {
      type: String as PropType<string | undefined>,
      required: false,
      default: undefined,
    },
  },
  methods: {
    // sample
  },
});
</script>

<style scoped lang="scss">
// sample
</style>
