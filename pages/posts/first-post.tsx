import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {NextPage} from "next";
import variables from "../../styles/variables.module.scss";

const FirstPost: NextPage = () => {
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h5>
                <Link href="/">
                    <a color={variables.primaryColor}>&larr;&nbsp;Back to home</a>
                </Link>
            </h5>
            <h1 color={variables.primaryColor}>First Post</h1>
        </>
    );
};

export default FirstPost;