<template>
  <div v-for="icon in iconList" :key="icon.id">
    <svg class="icon" :innerHTML="icon.svg" />
    <span>{{type}} {{icon.id}}</span>
  </div>
</template>

<script>
import './style.scss';

export default {
  name: 'IconList',
  props: {
    iconList: {
      type: Array,
      default: () => []
    },
    type: {
        type: String,
        default:''
    }
  }
};
</script>

<style scoped>
/* Gaya khusus untuk ikon-ikon di sini jika diperlukan */
.icon {
  /* Gaya ikon */
}
</style>
