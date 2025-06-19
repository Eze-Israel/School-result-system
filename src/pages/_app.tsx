import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  const router = useRouter();

  // Defines pages where you want to hide the header and footer
  const hideLayoutFor = ["/dashboard", "/dashboard2"];
  const shouldHideLayout = hideLayoutFor.includes(router.pathname);

    return (
    <QueryClientProvider client={queryClient}>
      <div>
        {!shouldHideLayout ? <Header /> : ""}
        <main>
          <Component {...pageProps} />
        </main>
        {!shouldHideLayout ? <Footer /> : ""}
      </div>
    </QueryClientProvider>
  );

}



  

  
