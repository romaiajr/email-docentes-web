<template>
  <v-app-bar color="light-blue darken-4" dense dark>
    <v-toolbar-title>Qual o email do professor?</v-toolbar-title>
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
