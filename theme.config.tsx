import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://nextra-five-m.vercel.app${asPath}`;
  const description = frontMatter.description || "Documentation";
  return (
    <>
      {asPath === "/" && <title>Docs</title> || <title>{title} - Docs</title>}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      {asPath === "/" && <meta name="og:title" content="Docs" />|| <meta name="og:title" content={title + " - Docs"} />}
      <meta name="og:type" content="website" />
      </>
  );
}


function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  if (asPath === "/") {
      return {
          titleTemplate: `Docs`,
      }
  } else {
      return {
          titleTemplate: `${title} - Docs`,
      }
  }
}

const config: DocsThemeConfig = {
  logo: <span>Docs</span>,
  project: {
    link: 'https://github.com/yorick20022',
  },
  docsRepositoryBase: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
  head: useHead,
  useNextSeoProps: useNextSeoProps,
  footer: {
    text: "Powered by Nextra",
    },
}

export default config
