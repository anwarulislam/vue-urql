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
      <li v-for="book in data?.books" :key="book.id">
        {{ book.author }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { gql, useQuery } from "@urql/vue";
import { computed, onBeforeMount, ref, watch } from "vue";
import { FetchBooksDocument } from "../gql/graphql";

const query = gql`
  query FetchBooks {
    books {
      id
      name
      author
    }
  }
`;

type Book = {
  id: string;
  name: string;
};

const { fetching, data } = useQuery({
  query: FetchBooksDocument,
});
</script>
