import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeadMeta from "../../components/seo/HeadMeta";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import WorkList from "../../components/works/WorkList";
import { getAllWorks } from "../../lib/works-utils";

function WorksPage({ works }) {
    const { t } = useTranslation();

    const domain = process.env.SITE_URL;
    const url = `${domain}/works`;
    const ogImageUrl = `${domain}/images/og.jpg`;

    return (
        <Container>
            <HeadMeta
                title="Works | Henry Chuang"
                description={t("meta.works")}
                domain={domain}
                url={url}
                image={ogImageUrl}
            />
            <SectionTitle title="Works" />
            <WorkList works={works} />
        </Container>
    );
}

export async function getStaticProps(context) {
    const { locale } = context;
    const allWorks = getAllWorks(locale);

    return {
        props: {
            works: allWorks,
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

export default WorksPage;
