<template>
  <div class="header">
    <h2>Apollo Client</h2>
    <!-- <button @click="fetchBooks">
      {{ isLoading ? "Loading..." : "Fetch Books" }}
    </button> -->
  </div>

  <div>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const books: any = ref([]);
const isLoading = ref(false);
</script>
