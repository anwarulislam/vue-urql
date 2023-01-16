<template>
  <div class="header">
    <h1>Testing Apollo and Urql</h1>
    <button @click="changeClient">
      {{ client === "apollo" ? "Switch to Urql" : "Switch to Apollo" }}
    </button>
  </div>

  <!-- toggle to switch to apollo or urql -->

  <ApolloClient v-if="client === 'apollo'" />
  <UrqlClient v-else />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ApolloClient from "./components/Apollo.vue";
import UrqlClient from "./components/Urql.vue";

const client = ref("apollo");

const changeClient = () => {
  client.value = client.value === "apollo" ? "urql" : "apollo";
};
</script>
