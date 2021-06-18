<template>
  <main>
  </main>
</template>
<script>

export default {
  name: 'confirm',
   data: function () {
        return {
            lot: 'lot1',
            demo : false
        };
    },
  mounted() {
    
    if(this.$route.params._lot == 'lot1' || this.$route.params._lot == 'lot2' || this.$route.params._lot == 'lot3')  {
      this.lot = this.$route.params._lot
      this.demo = true;
    } else {
      this.lot ='lot1'
    }
  }
}
</script>
<style>

</style>