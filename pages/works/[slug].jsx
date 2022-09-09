import HeadMeta from "../../components/seo/HeadMeta";
import Container from "../../components/ui/Container";
import WorkDetail from "../../components/works/WorkDetail";
import { getWorkData, getWorkSlugs } from "../../lib/works-utils";

function WorkDetailPage({ work }) {
    const domain = process.env.SITE_URL;
    const url = `${domain}/works/${work.slug}`;
    const ogImageUrl = `${domain}/images/og.jpg`;

    return (
        <Container>
            <HeadMeta
                title={`${work.title} | Henry Chuang`}
                description={work.excerpt}
                domain={domain}
                url={url}
                image={ogImageUrl}
            />
            <WorkDetail work={work} />
        </Container>
    );
}

export function getStaticProps(context) {
    const { params, locale } = context;
    const { slug } = params;

    const workData = getWorkData(slug, locale);

    return {
        props: {
            work: workData,
        },
        revalidate: 600,
    };
}

export function getStaticPaths() {
    const workSlugs = getWorkSlugs();

    return {
        paths: workSlugs.flatMap((slug) => [{ params: { slug }, locale: "en-US" }, { params: { slug } }]),
        fallback: false,
    };
}

export default WorkDetailPage;
