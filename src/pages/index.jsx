import { Box } from "@chakra-ui/react";

import MainVisual from "src/components/organisms/section/lp/MainVisual";
import About from "src/components/organisms/section/lp/About";
import Header from "src/components/organisms/layout/Header";

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
    </div>
  )
}
