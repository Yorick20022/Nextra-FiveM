import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const description = frontMatter.description || "Documentation";
  return (
    <>
      {asPath === "/" && <title>Docs</title> || <title>{title} - Docs</title>}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
        {asPath === "/" && <meta name="og:title" content="Docs" />|| <meta name="og:title" content={title + " - Docs"} />}
      <meta name="og:type" content="website" />
      </>
  );
}


const config: DocsThemeConfig = {
  logo: <span>Docs</span>,
  project: {
    link: 'https://github.com/yorick20022',
  },
  docsRepositoryBase: 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
  footer: {
    content: (
      <span>
        Documentation made with Nextra
    </span>
    )
  },
}

export default config
