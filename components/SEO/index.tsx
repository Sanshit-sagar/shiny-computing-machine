import React from 'react';
import Head from 'next/head'
import settings from '../../settings'

interface SeoSnapshotProps {
    title: string;
    description: string;
    image: string; 
};

interface SocialTagsProps {
    openGraphType?: string;
    schemaType?: string; 
    url?: string;
    title: string;
    description?: string;
    image?: string;
    createdAt?: string;
    updatedAt?: string; 
};

interface MetaTag {
    name: string;
    content: string; 
};

type SeoProps = SeoSnapshotProps & SocialTagsProps

const socialTags = ({
    openGraphType,
    schemaType = "Article",
    url = "/",
    title = "website",
    description,
    image,
    createdAt,
    updatedAt
}: SocialTagsProps) => {
    const metaTags = [
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:site",
        content: settings && settings.meta && settings.meta.social && settings.meta.social.twitter,
      },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:creator",
        content: settings && settings.meta && settings.meta.social && settings.meta.social.twitter,
      },
      { name: "twitter:image:src", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "og:title", content: title },
      { name: "og:type", content: openGraphType },
      { name: "og:url", content: url },
      { name: "og:image", content: image },
      { name: "og:description", content: description },
      {
        name: "og:site_name",
        content: settings && settings.meta && settings.meta.title,
      },
      {
        name: "og:published_time",
        content: createdAt || new Date().toISOString(),
      },
      {
        name: "og:modified_time",
        content: updatedAt || new Date().toISOString(),
      },
    ];
  
    return metaTags;
};

export const SEO = (props: SeoProps) => {
    let { url, title, description, image, schemaType } = props

    return (
        <Head>
            <title>{title} | App</title>
            <meta name="description" content={description} />
            <meta name="name" content={title} />
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            {socialTags(props).map(({ name, content }: MetaTag, index: number) => {
                return (
                    <meta 
                        key={`seo-meta-tag-${index}`} 
                        name={name} 
                        content={content}
                    />
                );
            })}
            <script
                type="application/ld+json"
                    dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": schemaType,
                        name: title,
                        about: description,
                        url: url,
                    }),
                }}
            />
        </Head>
    );
}

