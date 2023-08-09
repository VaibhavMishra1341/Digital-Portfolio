import { SEO } from '../components';
import {
  About,
  Contact,
  Experience,
  Hero,
  Layout,
  Projects,
  Skills,
} from '../containers';
import { seoData } from '../utils/portfolio';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <SEO {...seoData} />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
