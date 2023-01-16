<template>
  <div class="header">
    <h2>Apollo Client</h2>
    <button @click="fetchBooks">
      {{ isLoading ? "Loading..." : "Fetch Books" }}
    </button>
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

const fetchBooks = async () => {
  isLoading.value = true;
  // wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          books {
            id
            name
          }
        }
      `,
    }),
  });

  const { data } = await response.json();

  isLoading.value = false;

  books.value = data.books;
};
</script>
