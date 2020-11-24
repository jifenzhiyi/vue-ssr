<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'Home',
  asyncData({ store }) {
    return store.dispatch('getCount');
  },
};
</script>
