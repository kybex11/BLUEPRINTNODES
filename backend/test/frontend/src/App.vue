<template>
  <div>
    <div ref="plateContainer"></div>
  </div>
</template>

<script>
import { createPlate } from '../../../index';

export default {
  mounted() {
    const plateContainer = this.$refs.plateContainer;

    const plate = createPlate(window.innerWidth, window.innerHeight, 70);

    plateContainer.appendChild(plate);
  }
}
</script>
<style>
body {
  overflow: hidden;
}
</style>
