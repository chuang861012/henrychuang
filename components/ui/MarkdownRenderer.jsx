import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Heading, Divider, Text, Link, OrderedList, UnorderedList, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import ruby from "react-syntax-highlighter/dist/cjs/languages/prism/ruby";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

import classes from "./markdownRenderer.module.css";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("ruby", ruby);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("bash", bash);

function MarkdownRenderer({ data, imageDir, showTitleDivider }) {
    const customComponents = {
        h1({ children }) {
            return (
                <>
                    <Heading
                        as="h1"
                        size="4xl"
                        lineHeight={2}
                        fontFamily='"Ubuntu", "Noto Sans TC", sans-serif;'
                        fontWeight={700}
                    >
                        {children}
                    </Heading>
                    {showTitleDivider ? (
                        <Divider borderColor="var(--color-grey-100)" className={classes.divider} />
                    ) : null}
                </>
            );
        },
        h2({ children }) {
            return (
                <>
                    <Heading
                        as="h2"
                        size="3xl"
                        lineHeight={2}
                        fontFamily='"Ubuntu", "Noto Sans TC", sans-serif;'
                        fontWeight={700}
                    >
                        {children}
                    </Heading>
                    {showTitleDivider ? (
                        <Divider borderColor="var(--color-grey-100)" className={classes.divider} />
                    ) : null}
                </>
            );
        },
        h3({ children }) {
            return (
                <>
                    <Heading
                        as="h3"
                        size="2xl"
                        lineHeight={2}
                        fontFamily='"Ubuntu", "Noto Sans TC", sans-serif;'
                        fontWeight={500}
                    >
                        {children}
                    </Heading>
                    {showTitleDivider ? (
                        <Divider borderColor="var(--color-grey-100)" className={classes.divider} />
                    ) : null}
                </>
            );
        },
        h4({ children }) {
            return (
                <Heading
                    as="h4"
                    size="xl"
                    lineHeight={2}
                    fontFamily='"Ubuntu", "Noto Sans TC", sans-serif;'
                    fontWeight={500}
                >
                    {children}
                </Heading>
            );
        },
        h5({ children }) {
            return (
                <Heading
                    as="h5"
                    size="lg"
                    lineHeight={2}
                    fontFamily='"Ubuntu", "Noto Sans TC", sans-serif;'
                    fontWeight={400}
                >
                    {children}
                </Heading>
            );
        },
        h6({ children }) {
            return (
                <Heading
                    as="h6"
                    size="lg"
                    lineHeight={2}
                    fontFamily='"Ubuntu", "Noto Sans TC", sans-serif;'
                    fontWeight={400}
                >
                    {children}
                </Heading>
            );
        },
        p({ children }) {
            return (
                <Text size="md" lineHeight={1.5}>
                    {children}
                </Text>
            );
        },
        a({ href, children }) {
            return (
                <Link href={href} isExternal color="var(--color-primary-100)">
                    {children}
                    <ExternalLinkIcon mx="2px" />
                </Link>
            );
        },
        ol({ children }) {
            return <OrderedList>{children}</OrderedList>;
        },
        ul({ children }) {
            return <UnorderedList>{children}</UnorderedList>;
        },
        li({ children }) {
            return <ListItem>{children}</ListItem>;
        },
        img({ src, alt, title }) {
            return (
                <span className={classes.markdownImageWrapper}>
                    <Image
                        src={`${imageDir}/${data.slug}/${src}`}
                        alt={alt}
                        title={title}
                        width={600}
                        height={300}
                        objectFit="contain"
                        objectPosition="left"
                        layout="responsive"
                    />
                </span>
            );
        },
        blockquote({ children }){
            return <blockquote className={classes.blockquote}>{children}</blockquote>
        },
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline ? (
                <SyntaxHighlighter style={style} language={match ? match[1] : null} {...props}>
                    {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
            ) : (
                <code className={classes.code}>{String(children).replace(/\n$/, "")}</code>
            );
        },
    };

    return (
        <ReactMarkdown components={customComponents} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {data.content}
        </ReactMarkdown>
    );
}

export default MarkdownRenderer;
