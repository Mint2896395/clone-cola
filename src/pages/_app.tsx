import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Noto_Sans_Thai } from '@next/font/google';
 
const roboto = Noto_Sans_Thai({
  weight: '400',
  subsets: ['latin'],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
