import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/home/Hero";
import HeadMeta from "../components/seo/HeadMeta";

export default function Home() {
    const { t } = useTranslation();

    const domain = process.env.SITE_URL;
    const url = `${domain}/`;
    const ogImageUrl = `${domain}/images/og.jpg`;

    return (
        <>
            <HeadMeta title="Henry Chuang" description={t("meta.index")} domain={domain} url={url} image={ogImageUrl} />
            <Hero />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}
