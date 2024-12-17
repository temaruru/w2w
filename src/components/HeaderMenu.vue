<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-item logo">Медучреждение №1</div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Врачи</router-link>
          <router-link class="navbar-item" to="/nurses">Медсестры</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
  .logo {
    color: #4691c8;
    text-transform: uppercase;
    font-weight: bold;
  }
</style>
