<template>
  <div class="progress loader" v-if="showLoader">
    <div
      class="progress-bar"
      role="progressbar"
      :style="loaderStyle"
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["loaderStyle", "showLoader"]
};
</script>
