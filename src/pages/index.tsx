import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { DocSearch } from '@docsearch/react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Lua Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`SM Docs`}
      description="Website to describe all you need to know about the Scrap Mechanic modding API.">
      <HomepageHeader />
      <>
        {/* Your existing code */}
        <DocSearch
          appId="NNH0JJX9RD"
          apiKey="f0ce6b5dcf56169c8b8372d051e46631"
          indexName="scrapmechanicdocs" />
      </>
    </Layout>
  );
}
