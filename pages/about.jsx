import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import SkillsSection from "../components/about/SkillsSection";
import HeadMeta from "../components/seo/HeadMeta";

function AboutPage() {
    const { t } = useTranslation("about");

    const domain = process.env.SITE_URL;
    const url = `${domain}/about`;
    const ogImageUrl = `${domain}/images/og.jpg`;

    return (
        <Container>
            <HeadMeta
                title="About | Henry Chuang"
                description={t("meta")}
                domain={domain}
                url={url}
                image={ogImageUrl}
            />
            <SectionTitle title="Skills" />
            <SkillsSection />
        </Container>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: { ...(await serverSideTranslations(locale, ["about"])) },
    };
}

export default AboutPage;
