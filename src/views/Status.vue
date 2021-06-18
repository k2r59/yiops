<template>
  <main>
    <div class="status-page">
      <Form
        id="form"
        :form_id="status_form_id"
        :uid="uid"
        :submission_id="submission_id"
        :server="server"
        v-on:results="getResult"
        v-on:form_submit_loading="loading"
        @on_error="viewError"
        :hideError="hiderror"
      />
    </div>
  </main>
</template>
<script>
var consts = require("../config");
import axios from "axios";

export default {
  name: "Status",
  data: function () {
    return {
      hiderror: true,
      submission_id: this.$route.params._id,
      status_form_id: consts.STATUS_FORM_ID,
      server: "https://api.lucien.ai",
      uid: this.$route.params._secu,
    };
  },
  async mounted() {
    try {
      let { data } = await axios.get(
        "https://api.lucien.ai/api/v2/submissions/" +
          this.$route.params._id +
          "?uid=" +
          this.$route.params._secu
      );
    } catch (e) {
      console.log(e);
      this.$swal({
        type: "error",
        confirmButtonText: "OK",
        allowOutsideClick: false,
        confirmButtonColor: "#C94330",
        html:
          "Identifiants non reconnus.<br > Merci de suivre le lien transmit par email.",
      }).then(function () {
        document.location.href = "/";
      });
      return;
    }
  },
  methods: {
    loading(value) {
      if (value === true) {
        this.$swal({
          title: "Envoi en cours",
          html: "Merci de bien vouloir patienter ...",
          timerProgressBar: true,
          onBeforeOpen: () => {
            this.$swal.showLoading();
          },
        });
      }
    },
    getResult: function (result) {
      if (result._id) {
        this.$swal({
          type: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#C94330",
          html:
            "<b>Votre status a bien été mises à jour. Vous serez informé de sa validation par email.</b>",
        }).then((result) => {
          this.$router.push("/");
        });
      } else {
        this.$swal({
          type: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#C94330",
          text: "Une erreur est survenue",
        });
      }
    },
    viewError(err) {
      console.log(err);

      this.$swal({
        confirmButtonText: "OK",
        confirmButtonColor: "#C94330",
        title: "Désolé, une erreur est survenue.",
        text: err,
      }).then(function () {
        window.location.href = "/";
      });
    },
  },
};
</script>
