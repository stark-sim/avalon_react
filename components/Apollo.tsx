import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider,
  gql,
} from "@apollo/client";

import { ReactNode } from "react";

const _client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

_client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

type Props = {
  children?: ReactNode;
  client?: ApolloClient<NormalizedCacheObject>;
};

const Apollo = ({ children, client = _client }: Props) => (
  <div>
    <ApolloProvider client={client}>{children}</ApolloProvider>
  </div>
);
export default Apollo;
