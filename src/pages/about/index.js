import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function About() {
  return (
    <Layout title="About" description="About us">
      <div className={styles.container}>
        <div className="container">
          <Heading as="h1" className={styles.title}>
            About
          </Heading>
          <p className={styles.subtitle}>
            Learn more about our team and mission.
          </p>
        </div>
      </div>
    </Layout>
  );
}
