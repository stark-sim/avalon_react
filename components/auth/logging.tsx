import { gql, useQuery } from "@apollo/client";

const LOGIN = gql`
  query Login($req: loginReq!) {
    login(req: $req) {
      id
      name
      phone
      createdAt
    }
  }
`;

// 登录过程组件
function Logging(value: {phone: string}) {
  console.log("logging...")
  const { loading, error, data } = useQuery(LOGIN, {
    variables: {
      req: {
        phone: value.phone,
      },
    },
  });

  if (loading) return <p>登录中。。。</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>登陆成功 {data}</p>;
}

export default Logging;
