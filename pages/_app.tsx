import "@/styles/globals.css";
import type { AppProps } from "next/app";
// test to link with codesanbox
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
