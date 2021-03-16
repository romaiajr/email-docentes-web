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
export default {
  name: "Home",
  components: {
    DocentesTable,
    Navbar,
  },
  data() {
    return {
      docentes: [
        {
          name: "Angelo Conrado Loula",
          email: "angelocl@gmail.com",
          departmentName: "Departamento de Exatas",
          departmentCode: "EXA",
        },
        {
          name: "Danilo de Oliveira Gonçalves",
          email: "daniloxm@gmail.com",
          departmentName: "Departamento de Exatas",
          departmentCode: "EXA",
        },
        {
          name: "Maurício Santana Lordelo",
          email: "mslordelo@gmail.com",
          departmentName: "Departamento de Exatas",
          departmentCode: "EXA",
        },
        {
          name: "Rogerio Vitorio de Jesus",
          email: "roger.vj.mat@hotmail.com",
          departmentName: "Departamento de Exatas",
          departmentCode: "EXA",
        },
        {
          name: "Elma Raimunda Barreto",
          email: "elmabarreto@uefs.br",
          departmentName: "Departamento de Exatas",
          departmentCode: "EXA",
        },
        {
          name: "David Moises Barreto dos Santos",
          email: "davidmbs@uefs.br",
          departmentName: "Departamento de Exatas",
          departmentCode: "EXA",
        },
        {
          name: "Aécio Pereira Santiago Junior",
          email: "aeciojunior@gmail.com",
          departmentName: "Departamento de Exatas",
          departmentCode: "EXA",
        },
      ],
    };
  },
  // firestore: {
  //   docentes: db.collection("docentes").orderBy("name"),
  // },
};
</script>
