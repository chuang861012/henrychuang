import Head from "next/head";
import MarkdownRenderer from "../components/ui/MarkdownRenderer.jsx";

import fs from "fs";
import path from "path";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";

function PrivacyPolicyPage({ data }) {
    return (
        <Container>
            <Head>
                <title>Privacy Policy | Henry Chuang</title>
                <meta name="description" content="Privacy Policy" />
            </Head>
            <div style={{ color: "var(--color-white)", maxWidth: "1000px", margin: "auto", fontSize: "1.6rem" }}>
                <SectionTitle title="隱私權政策 Privacy Policy" />
                <MarkdownRenderer data={{ content: data }} imageDir={`/images`} showTitleDivider={false} />
            </div>
        </Container>
    );
}

export function getStaticProps(context) {
    const { locale } = context;
    const filePath = path.join(process.cwd(), "policy", `${locale}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    return {
        props: {
            data: fileContent,
        },
    };
}

export default PrivacyPolicyPage;
