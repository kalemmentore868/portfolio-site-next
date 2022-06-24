import Theme from '../styles/theme';
import "../styles/projectStyles.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 