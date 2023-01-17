<template>
  <div class="header">
    <h2>URQL Books</h2>
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
import { useQuery } from "@urql/vue";
import { onBeforeMount, ref } from "vue";

const fetchBooksDocument = useQuery({
  query: `
      query {
        books {
          id
          name
        }
      }
    `,
});

const books = ref([]);
const isLoading = fetchBooksDocument.fetching;

const fetchBooks = async () => {
  isLoading.value = true;

  // wait 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { value } = await fetchBooksDocument.data;

  console.log(value);

  books.value = value.books;

  isLoading.value = false;

  onBeforeMount(() => {});

  // books.value = data.books;
};
</script>
