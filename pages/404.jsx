import Head from "next/head";
import ErrorMessage from "../components/error/ErrorMessage";

function Custom404Page() {
    return (
        <>
            <Head>
                <title>404 | Henry Chuang</title>
                <meta name="description" content="Page not found" />
            </Head>
            <ErrorMessage code="404" message="Not Found" />
        </>
    );
}

export default Custom404Page;
