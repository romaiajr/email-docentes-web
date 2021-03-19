<template>
  <div>
    <Navbar />
    <v-row no-gutters>
      <DocentesTable :collection="docentes" />
    </v-row>
  </div>
</template>

<script>
// import firebase from "@/db";
// const db = firebase.firestore();
import DocenteService from "../services/DocenteService";
import DocentesTable from "../components/DocentesTable";
import Navbar from "../components/Navbar";
export default {
  name: "Home",
  components: {
    DocentesTable,
    Navbar,
  },
  data() {
    return {
      docentes: [],
    };
  },
  // watch: {
  //   docentes: function() {
  //     console.log("entrou");
  //     sessionStorage.setItem("stored", JSON.stringify(this.docentes));
  //   },
  // },
  methods: {
    getDocentes() {
      DocenteService.getDocentes().then((response) => {
        this.docentes = response.data.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        sessionStorage.setItem("docentes", JSON.stringify(this.docentes));
      });
    },

    // readTeachers() {
    //   var list = JSON.parse(sessionStorage.getItem("stored" || []));
    //   db.collection("docentes").onSnapshot((snapshot) => {
    //     let changes = snapshot.docChanges();
    //     changes.forEach((change) => {
    //       console.log(change.type);
    //       if (change.type == "added") {
    //         list.push(change.doc.data());
    //       }
    //     });
    //   });
    //   this.docentes = list || [];
    // },
  },
  mounted() {
    this.docentes = JSON.parse(sessionStorage.getItem("docentes")) || [];
    this.getDocentes();
    // sessionStorage.setItem("stored", JSON.stringify(this.docentes));
    // this.readTeachers();
  },
};
</script>
