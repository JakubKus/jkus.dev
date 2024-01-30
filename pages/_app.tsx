import { AppProps } from "next/app";
import "../styles/index.css";
import "prism-themes/themes/prism-dracula.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
