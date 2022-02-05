import { useSession } from "next-auth/react";
import Main from "@layout/main";

export default function Profile() {
  const { data } = useSession();

  return (
    <Main>
      {console.log(data)}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Main>
  );
}
