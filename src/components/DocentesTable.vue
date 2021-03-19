<template>
  <v-container>
    <v-row id="teachers-table">
      <v-col offset-md="2" md="8" sm="12">
        <v-card>
          <v-card-title>
            <h2>Docentes da UEFS</h2>
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
      <v-col md="2" sm="12" no-gutters>
        <b-button block size="sm" variant="danger"
          >NÃO ACHEI O PROFESSOR</b-button
        >
        <b-button block size="sm" variant="warning" style="color: #fff"
          >REPORTAR EMAIL ERRADO</b-button
        >
        <!-- <v-btn block color="error">
          NÃO ACHEI O PROFESSOR
        </v-btn>
        <v-btn
          block
          color="warning"
          style="margin-top: 8px; width=: 100% !important"
        >
          REPORTAR EMAIL ERRADO
        </v-btn> -->
      </v-col>
    </v-row>
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
      searchQuery: "",
      departmentQuery: "",
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
      if (this.departmentQuery != "") {
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
  methods: {},
  created() {},
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
</style>
