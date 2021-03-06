<template>
  <v-container>
    <v-row id="teachers-table">
      <v-col
        cols="0"
        md="0"
        sm="12
      "
      >
        <!--<template>
          <div class="ad-container">
            <Adsense
              data-ad-client="ca-pub-4302003355134660"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              :data-full-width-responsive="true"
            >
            </Adsense>
          </div>
        </template>-->
      </v-col>
      <v-col offset-md="2" md="8" sm="12">
        <v-card>
          <v-card-title>
            <h4>Docentes da UEFS</h4>
          </v-card-title>
          <v-card-subtitle>
            <v-spacer></v-spacer>
            <v-row no-gutter align="center">
              <v-col class="d-flex" cols="12" sm="8">
                <v-text-field
                  align="center"
                  v-model="searchQuery"
                  append-icon="mdi-magnify"
                  label="Pesquisar Docente ..."
                  hide-details
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="4" id="select-dep">
                <v-select
                  :items="departmentFilter"
                  v-model="departmentQuery"
                  value="item"
                  label="Departamento"
                  dense
                  clearable
                ></v-select>
              </v-col>
            </v-row>
          </v-card-subtitle>
          <v-data-table
            @click:row="handleClick"
            :loading="collection.length == 0 ? true : false"
            loading-text="Carregando... Por favor, aguarde"
            :headers="headers"
            :items="filteredList"
            :items-per-page="10"
            class="elevation-1 row-pointer"
          >
          </v-data-table>
        </v-card>
      </v-col>
      <v-col md="2" sm="12" no-gutters align="center">
        <button class="a-button" @click="notFound = true">
          <h6>NÃO ACHEI O PROFESSOR</h6>
        </button>
        <button
          class="b-button"
          @click="wrongEmail = true"
          style="margin-top: 8px !important"
        >
          <h6>REPORTAR EMAIL ERRADO</h6>
        </button>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" timeout="4000" color="success">
      <p>
        {{ `${this.selectedRow.email} copiado!` }}
      </p>
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    <b-modal
      id="wrong-email-modal"
      title="Reportar Email Errado"
      v-model="wrongEmail"
      cancel-title="Cancelar"
      ok-title="Confirmar"
      ok-variant="success"
      @ok="handleInsert(1)"
      @cancel="cleanForm(1)"
    >
      <b-form>
        <label>Nome do Professor</label>
        <b-form-input
          v-model="wrongEmailForm.name"
          type="text"
          required
        ></b-form-input>
        <label>Email Correto do Professor<small> (Opcional)</small></label>
        <b-form-input
          v-model="wrongEmailForm.email"
          type="email"
        ></b-form-input>
        <b-form-text
          >Se você tem o Email correto, por favor nos ajude ;)</b-form-text
        >
      </b-form>
      <!-- </b-form-group> -->
    </b-modal>
    <b-modal
      id="not-found-modal"
      title="Professor Não Encontrado"
      v-model="notFound"
      cancel-title="Cancelar"
      ok-title="Confirmar"
      ok-variant="success"
      @ok="handleInsert(2)"
      @cancel="cleanForm(2)"
    >
      <b-form>
        <label>Nome do Professor</label>
        <b-form-input
          v-model="notFoundForm.name"
          type="text"
          required
        ></b-form-input>
        <b-form-text
          >Não se preocupe, vamos encontrar o email pra você ;)</b-form-text
        >
      </b-form>
    </b-modal>
  </v-container>
</template>

<script>
import WrongEmailService from "../services/WrongEmailService";
import NotFoundService from "../services/NotFoundService";
export default {
  name: "DocentesTable",
  props: {
    collection: Array,
  },
  data() {
    return {
      headers: [
        { text: "Nome", value: "name", sortable: false },
        { text: "Email", value: "email", filterable: false, sortable: false },
        {
          text: "Departamento",
          value: "department",
          sortable: false,
          filterable: false,
        },
      ],
      landHeaders: [{ text: "Nome", value: "name", sortable: false }],
      searchQuery: "",
      departmentQuery: null,
      snackbar: false,
      wrongEmail: false,
      notFound: false,
      selectedRow: "",
      notFoundForm: { name: "" },
      wrongEmailForm: { name: "", email: "" },
    };
  },
  computed: {
    departmentFilter() {
      let departments = [];
      this.collection.map((item) => {
        if (!departments.includes(item.department)) {
          departments.push(item.department);
        }
      });
      return departments.sort();
    },
    filteredList() {
      let search = this.removeSpecial(this.searchQuery.toLowerCase().trim());
      if (this.departmentQuery != null) {
        return this.collection.filter((item) => {
          if (search != null || search != "") {
            return (
              this.removeSpecial(item.name.toLowerCase()).includes(search) &&
              item.department.toLowerCase() ==
                this.departmentQuery.toLowerCase()
            );
          } else {
            return (
              item.department.toLowerCase() ==
              this.departmentQuery.toLowerCase()
            );
          }
        });
      } else {
        if (search != null || search != "") {
          return this.collection.filter((item) => {
            return this.removeSpecial(item.name.toLowerCase()).includes(search);
          });
        } else return this.collection;
      }
    },
  },
  methods: {
    handleClick(value) {
      navigator.clipboard.writeText(value.email);
      this.snackbar = true;
      this.selectedRow = value;
    },
    async handleInsert(type) {
      try {
        if (type == 1) {
          await WrongEmailService.addWrongEmail(this.wrongEmailForm);
          this.wrongEmailForm = {};
          this.wrongEmail = false;
        } else if (type == 2) {
          await NotFoundService.addNotFound(this.notFoundForm);
          this.notFoundForm = {};
          this.notFound = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    cleanForm(type) {
      if (type == 1) {
        (this.wrongEmailForm = {}), (this.wrongEmail = false);
      } else if (type == 2) {
        (this.notFoundForm = {}), (this.notFound = false);
      }
    },
    removeSpecial(texto) {
      texto = texto.replace(/[ÀÁÂÃÄÅ]/, "A");
      texto = texto.replace(/[àáâãäå]/, "a");
      texto = texto.replace(/[ÈÉÊË]/, "E");
      texto = texto.replace(/[Ç]/, "C");
      texto = texto.replace(/[ç]/, "c");
      return texto;
    },
  },
};
</script>
<style scoped>
#teachers-table {
  margin-bottom: 80px;
}

.row {
  background: #fff !important;
}
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
#select-dep {
  margin-top: 18px !important;
}

.a-button,
.b-button {
  display: inline-block;
  padding: 0.35em 1.2em;
  /* width: 100%; */
  /* margin: 0 0.3em 0.3em 0; */
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 600 !important;
  color: #fff;
  width: 100%;
  text-align: center;
  transition: all 0.2s;
}
.a-button {
  background-color: var(--danger-color);
  border: 0.1em solid var(--danger-color);
}
.b-button {
  background-color: var(--warning-color);
  border: 0.1em solid var(--warning-color);
}
.a-button h6,
.b-button h6 {
  margin: 0px !important;
}

.a-button:hover {
  color: #ffffff;
  background-color: var(--danger-dark-color);
  border: 0.1em solid var(--danger-dark-color);
  /* box-shadow: 0 15px 20px -10px var(--danger-color); */
}

.b-button:hover {
  color: #ffffff;
  background-color: var(--warning-dark-color);
  border: 0.1em solid var(--warning-dark-color);
  /* box-shadow: 0 15px 20px -10px var(--warning-color); */
}

.v-snack {
  background-color: var(--sucess-color) !important;
}

.v-snack p {
  margin: 0px !important;
}

@media screen and (max-width: 760px) {
  .b-button {
    margin-bottom: 8px;
  }

  .v-card__subtitle {
    padding-bottom: 0px !important;
  }
}
</style>
