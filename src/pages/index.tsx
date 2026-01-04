import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Hero from '@site/src/components/Hero';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`All In  ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero />
    </Layout>
  );
}

export default Home;