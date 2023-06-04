import { gql, useQuery } from "@apollo/client";
import LoadingComponent from "../loadding";

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

interface LoggingComponentProps {
  phone: string
}

// 登录过程组件
const Logging: React.FC<LoggingComponentProps> = ({ phone }) => {
  console.log("logging...")
  const { loading, error, data } = useQuery(LOGIN, {
    variables: {
      req: {
        phone: phone
      },
    },
  });

  if (loading) return <LoadingComponent/>;
  if (error) return (
    <div>Error: {error.message}</div>
  );

  return <p>登陆成功 {data.login.name}</p>;
}

export default Logging;
