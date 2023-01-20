<template>
  <div class="header">
    <h2>URQL Books</h2>
    <!-- <button @click="fetchBooks">
      {{ isLoading ? "Loading..." : "Fetch Books" }}
    </button> -->
  </div>

  <h1 v-if="fetching">Loading...</h1>
  <div>
    <ul>
      <li v-for="book in data.books" :key="book.id">
        {{ book.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useQuery } from "@urql/vue";
import { onBeforeMount, ref } from "vue";

const { fetching, data } = useQuery({
  query: `
      query {
        books {
          id
          name
        }
      }
    `,
});
</script>
