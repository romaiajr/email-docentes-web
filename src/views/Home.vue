<template>
  <div>
    <Navbar />
    <v-row no-gutters>
      <DocentesTable :collection="docentes" />
    </v-row>
    <Footer />
  </div>
</template>

<script>
// import firebase from "@/db";
// const db = firebase.firestore();
import DocenteService from "../services/DocenteService";
import DocentesTable from "../components/DocentesTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    DocentesTable,
    Navbar,
    Footer,
  },
  data() {
    return {
      docentes: [],
    };
  },
  methods: {
    getDocentes() {
      DocenteService.getDocentes().then((response) => {
        this.docentes = response.data.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        localStorage.setItem("docentes", JSON.stringify(this.docentes));
      });
    },
  },
  mounted() {
    this.docentes = JSON.parse(localStorage.getItem("docentes")) || [];
    this.getDocentes();
  },
};
</script>
