import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloProvider,
} from "@apollo/client";

import { ReactNode } from "react";

const _client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "https://rosabi.cn/cas/api/graphql/",
  cache: new InMemoryCache(),
});

type Props = {
  children?: ReactNode;
  client?: ApolloClient<NormalizedCacheObject>;
};

const CasApollo = ({ children, client = _client }: Props) => (
  <div>
    <ApolloProvider client={client}>{children}</ApolloProvider>
  </div>
);
export default CasApollo;
