import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroPill}>Unmold Documentation</div>
        <Heading as="h1" className={styles.heroTitle}>
          Ship reusable OpenTofu modules with simplicity.
        </Heading>
        <p className={styles.heroSubtitle}>
          Learn how to publish, version, secure, and automate your private
          module registry workflows with Unmold.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Read Documentation
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started/">
            Quick Start Guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  const quickLinks = [
    {
      title: 'Get Started',
      description: 'Set up your account, authenticate, and publish your first module.',
      to: '/docs/getting-started/',
    },
    {
      title: 'CLI Reference',
      description: 'Use the unmold CLI for login, listing modules, and publishing releases.',
      to: '/docs/cli/',
    },
    {
      title: 'CI Workflows',
      description: 'Automate module publishing from GitHub Actions and delivery pipelines.',
      to: '/docs/ci/',
    },
    {
      title: 'Subscriptions',
      description: 'Manage plans and billing for teams scaling internal module adoption.',
      to: '/docs/subscriptions',
    },
  ];

  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Technical documentation for publishing and managing private OpenTofu modules with Unmold.">
      <HomepageHeader />
      <main className={styles.mainSection}>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Start With The Right Path</Heading>
              <p>
                Whether you are onboarding a single repository or standardizing
                module workflows across an organization, these guides cover the
                core journeys end to end.
              </p>
            </div>

            <div className={styles.cardGrid}>
              {quickLinks.map((item) => (
                <Link key={item.title} to={item.to} className={styles.cardLink}>
                  <article className={styles.card}>
                    <Heading as="h3">{item.title}</Heading>
                    <p>{item.description}</p>
                    <span className={styles.cardCta}>Explore</span>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
