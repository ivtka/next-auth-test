import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "@styles/globals.css";

export default function Hilka({Component, pageProps}: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}