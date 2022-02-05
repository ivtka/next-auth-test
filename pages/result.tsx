import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Main from "@layout/main";
import AccessDenied from "@components/access-denied";
import styles from "@styles/result.module.css";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Main>
        <AccessDenied />

        <span className={styles.notSignedInText}>You are not signed in</span>
        <a
          href={`/api/auth/signin`}
          className={styles.buttonPrimary}
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign in
        </a>
      </Main>
    );
  }

  // If session exists, display content
  return (
    <Main>
      <h1>Protected Page</h1>
      <p>
        <strong>{content ?? "\u00a0"}</strong>
      </p>
    </Main>
  );
}
