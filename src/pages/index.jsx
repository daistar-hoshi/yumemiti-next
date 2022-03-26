import { Box } from "@chakra-ui/react";

import MainVisual from "src/components/organisms/section/lp/MainVisual";
import About from "src/components/organisms/section/lp/About";
import Header from "src/components/organisms/layout/Header";
import DiagnosisStep from "src/components/organisms/layout/DiagnosisStep";
import Lecture from "src/components/organisms/section/lp/Lecture";

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
    </div>
  )
}
