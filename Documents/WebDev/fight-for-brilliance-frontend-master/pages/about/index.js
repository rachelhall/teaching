import React from "react";

// components
import PhotoText from "../../components/content/photoText";
import CtaSlider from "../../components/content/ctaSlider";

import Layout from "../../components/layout";
import { Title } from "../../theme/fonts";

const About = props => {
  return (
    <Layout>
      <PhotoText />
      <CtaSlider />
      <PhotoText layout="photo-right" />
    </Layout>
  );
};

export default About;
