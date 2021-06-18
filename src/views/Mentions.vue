<template>
  <main>
    <div class="mentions" v-html="mentions" />
  </main>
</template>
<script>
export default {
  name: "mentions",
  data() {
    return {
      mentions: window.mentions,
    };
  },
};
</script>
