import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}
