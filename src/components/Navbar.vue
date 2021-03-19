<template>
  <v-app-bar dark>
    <img src="../assets/Logo2.svg" />
    <v-toolbar-title style="margin-left: 12px !important"
      ><h4>Email dos Docentes UEFS</h4></v-toolbar-title
    >
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: "",
        password: "",
      },
      userRules: [(v) => !!v || "Usuário é requerido"],
      passwordRules: [(v) => !!v || "Senha é requerida"],
      alert: false,
    };
  },
  methods: {
    handleLogin() {
      this.$refs.form.validate();
      if (this.form.user == "romaiajr" && this.form.password == "07112000") {
        console.log("sucesso");
      } else {
        this.alert = true;
      }
    },
    resetForm() {
      this.form = {};
      this.alert = false;
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
img {
  height: 50px !important;
}
.v-toolbar__content {
  height: 75px !important;
}
.v-toolbar {
  background: var(--primary-light-color) !important;
}

.v-toolbar h4 {
  margin: 0px !important;
}
</style>
