<template>
  <v-app-bar color="light-blue darken-4" dense dark>
    <v-toolbar-title>Qual o email do professor?</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-dialog
      transition="dialog-top-transition"
      max-width="600"
      @click:outside="resetForm"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">Login</v-btn>
      </template>
      <template v-slot:default="">
        <v-card>
          <v-toolbar color="primary" dark><h3>Realizar Login</h3></v-toolbar>
          <v-container style="margin-top: 24px">
            <v-form ref="form">
              <v-text-field
                v-model="form.user"
                label="Usuário"
                :rules="userRules"
                required
                outlined
              ></v-text-field>

              <v-text-field
                v-model="form.password"
                label="Senha"
                :rules="passwordRules"
                required
                outlined
              ></v-text-field>
              <v-btn
                @click="handleLogin"
                block
                color="primary"
                style="margin-bottom: 24px"
                >Login</v-btn
              >
            </v-form>
          </v-container>
        </v-card>
        <v-alert
          style="margin-top: 8px"
          :value="alert"
          type="error"
          border="top"
          transition="scale-transition"
          dismissible
        >
          Login ou Senha incorreto! Por favor, insira novamente</v-alert
        >
      </template>
    </v-dialog>
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
