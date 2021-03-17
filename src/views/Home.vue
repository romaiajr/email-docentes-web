<template>
  <div>
    <Navbar />
    <v-container>
      <v-row no-gutters>
        <DocentesTable :collection="docentes" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "@/db";
import DocentesTable from "../components/DocentesTable";
import Navbar from "../components/Navbar";
import Docentes from "../docentes.json";
export default {
  name: "Home",
  components: {
    DocentesTable,
    Navbar,
    Docentes,
  },
  data() {
    return {
      docentes: [],
      Docentes,
    };
  },
  firestore: {
    docentes: db
      .collection("docentes")
      .orderBy("name")
      .limit(15),
  },
};
</script>
