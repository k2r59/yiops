<template>
  <main>
    <div class="form">
      <Form
        :class="'form_step' + step"
        id="monform"
        :form_id="form_id"
        :server="server"
        v-on:results="getResult"
        v-on:step-up="checkStep"
        v-on:step-down="checkStep"
        v-on:form_submit_loading="loading"
        @on_error="viewError"
        :hideError="hiderror"
      />
    </div>
    <div class="captcha">
      This site is protected by reCAPTCHA and the Google<br />
      <a href="https://policies.google.com/privacy" target="_blank"
        >Privacy Policy</a
      >
      and
      <a href="https://policies.google.com/terms" target="_blank"
        >Terms of Service</a
      >
      apply.
    </div>
  </main>
</template>
<script>
var consts = require("../config");
import axios from "axios";

export default {
  name: "form",
  data: function () {
    return {
      step: 0,
      hiderror: true,
      form_id: consts.FORM_ID,
      server: consts.SERVER_URL,
    };
  },
  methods: {
    loading(value) {
      if (value === true) {
        this.$swal({
          title: "Envois en cours",
          html: "Merci de bien vouloir patienter ...",
          timerProgressBar: true,
          onBeforeOpen: () => {
            this.$swal.showLoading();
          },
        });
      }
    },
    checkStep() {
      this.step = this.step++;
    },
    getResult(result) {
    
     if(window.redirection) {
         window.location.replace(window.redirection)
      } else {
        if (result._id) {
          this.$swal.close();
          this.$router.push("/play");
        } else {
          alert("Erreur interne");
        }
      }
    },
    viewError(err) {
      console.log(err);

      this.$swal({
        confirmButtonText: "OK",
        confirmButtonColor: "#C94330",
        title: "Désolé, une erreur est survenue.",
        text: "",
      }).then(function () {
        window.location.href = "/";
      });
    },
  },
  mounted() {},
  created: function () {},
};
</script>
