<template>
  <v-row id="teachers-table">
    <v-col offset-md="2" md="8" sm="12">
      <v-card>
        <v-card-title>
          <h2>Docentes da UEFS</h2>
        </v-card-title>
        <v-card-subtitle>
          <v-spacer></v-spacer>
          <v-row align="center">
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
        <v-btn block v-if="filteredList.length != 0" color="error">
          Não encontrou o professor?
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
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
          value: "departmentCode",
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
        if (!departments.includes("D" + item.departmentCode)) {
          departments.push("D" + item.departmentCode);
        }
      });
      return departments.sort();
    },
    filteredList() {
      if (this.departmentQuery != "") {
        return this.collection.filter((item) => {
          return (
            ("d" + item.departmentCode).toLowerCase() ==
            this.departmentQuery.toLowerCase()
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
