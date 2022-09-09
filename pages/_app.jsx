import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Layout>
                <Head>
                    <title>Henry Chuang</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default appWithTranslation(MyApp);
