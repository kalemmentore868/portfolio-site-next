import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import ContactForm from "../components/ContactForm/ContactForm";
import Hero from "../components/Hero/Hero";

import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import WaterRippleAnimation from "../components/WaterRippleAnimation/WaterRippleAnimation";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Kalem Mentore</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />

      <Section grid>
        <Technologies />
        <WaterRippleAnimation />
      </Section>
      <Timeline />
      <Acomplishments />
      <ContactForm />
    </Layout>
    </>
  );
};

export default Home;
