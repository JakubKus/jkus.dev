import { AppProps } from "next/app";
import "../styles/index.css";
import "prism-themes/themes/prism-darcula.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
