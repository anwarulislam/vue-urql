<template>
  <div class="header">
    <h1>Testing {{ client === "apollo" ? "Apollo" : "URQL" }} Client</h1>
    <button @click="changeClient">
      {{ client === "apollo" ? "Switch to Urql" : "Switch to Apollo" }}
    </button>
  </div>

  <!-- toggle to switch to apollo or urql -->

  <ApolloClientContent v-if="client === 'apollo'" />
  <UrqlClientContent v-else />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ApolloClientContent from "./components/Apollo.vue";
import UrqlClientContent from "./components/Urql.vue";

const client = ref("apollo");

const changeClient = () => {
  client.value = client.value === "apollo" ? "urql" : "apollo";
};
</script>
