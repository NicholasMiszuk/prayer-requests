/* eslint-disable import/no-extraneous-dependencies */
import { ApolloClient, InMemoryCache } from "@apollo/client";
import fetch from "node-fetch";
import { useMemo } from "react";
import { createUploadLink } from "apollo-upload-client";

let apolloClient = ApolloClient.NormalizedCacheObject;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createUploadLink({
      uri: "/api/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NEXT_PUBLIC_CONNECT_DEV_TOOLS,
  });
}

export function initializeApollo(initialState = null) {
  const tApolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    tApolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return tApolloClient;
  apolloClient = apolloClient ?? tApolloClient;

  return apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
