<template>
  <HeaderMenu />
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderMenu from './components/HeaderMenu.vue';

export default defineComponent({
  components: {
    HeaderMenu,
  },
});
</script>
