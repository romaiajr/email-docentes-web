<template>
  <v-container>
    <v-row id="teachers-table">
      <v-col
        cols="0"
        md="0"
        sm="12
      "
      >
        <!-- <template>
          <div class="ad-container">
            <Adsense
              data-ad-client="ca-pub-1234567891234567"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              :data-full-width-responsive="true"
            >
            </Adsense>
          </div>
        </template> -->
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
            :items-per-page="15"
            class="elevation-1 row-pointer"
            :search="searchQuery"
          >
          </v-data-table>
        </v-card>
      </v-col>
      <v-col md="2" sm="12" no-gutters align="center">
        <button class="a-button">
          <h6>NÃO ACHEI O PROFESSOR</h6>
        </button>
        <button class="b-button" style="margin-top: 8px !important">
          <h6>REPORTAR EMAIL ERRADO</h6>
        </button>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" timeout="5000" color="success">
      <p>
        {{ `Email copíado para a área de transferência` }}
      </p>

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
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
      selectedRow: "",
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
      if (this.departmentQuery != null) {
        return this.collection.filter((item) => {
          return (
            item.department.toLowerCase() == this.departmentQuery.toLowerCase()
          );
        });
      } else {
        return this.collection;
      }
    },
  },
  methods: {
    handleClick(value) {
      navigator.clipboard.writeText(value.email);
      this.snackbar = true;
      this.selectedRow = value;
    },
  },
};
</script>
<style scoped>
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
</style>
