<template>
  <main>
    <div class="mentions" v-html="contact" />
  </main>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      contact: window.contact,
    };
  },
};
</script>
