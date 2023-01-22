import type { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import type { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['ID'];
  isbn: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: Scalars['ID'];
};


export type MutationAddBookArgs = {
  author: Scalars['String'];
  isbn: Scalars['String'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Book>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  books?: Maybe<Array<Book>>;
};

export type FetchBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', id: string, name: string, author: string }> | null };

export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Book?: (data: WithTypename<Book>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    books?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<Book> | string>>
  },
  Book?: {
    author?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['ID'] | string>,
    isbn?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>,
    name?: GraphCacheResolver<WithTypename<Book>, Record<string, never>, Scalars['String'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  addBook?: GraphCacheOptimisticMutationResolver<MutationAddBookArgs, Scalars['ID']>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    addBook?: GraphCacheUpdateResolver<{ addBook: Scalars['ID'] }, MutationAddBookArgs>
  },
  Subscription?: {
    books?: GraphCacheUpdateResolver<{ books: Maybe<Array<WithTypename<Book>>> }, Record<string, never>>
  },
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};

export const FetchBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}}]} as unknown as DocumentNode<FetchBooksQuery, FetchBooksQueryVariables>;