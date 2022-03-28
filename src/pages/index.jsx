import { Box } from "@chakra-ui/react";

import MainVisual from "src/components/organisms/section/lp/MainVisual";
import About from "src/components/organisms/section/lp/About";
import Header from "src/components/organisms/layout/Header";
import Lecture from "src/components/organisms/section/lp/Lecture";
import SelectJob from "src/components/organisms/section/lp/SelectJob";
import Footer from "src/components/organisms/layout/Footer";
import Cta from "src/components/organisms/section/lp/Cta";

export default function Home() {
  return (
    <div className="lp">
      <Header />
      <Box as="section">
        <MainVisual />
      </Box>
      <Box as="section">
        <About />
      </Box>
      <Box as="section">
        <Lecture />
      </Box>
      <Box as="section">
        <SelectJob />
      </Box>
      <Box as="section">
        <Cta />
      </Box>
      <Footer />
    </div>
  )
}
