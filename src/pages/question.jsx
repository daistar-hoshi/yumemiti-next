import { VStack } from "@chakra-ui/react";

import QuestionDialog from "src/components/organisms/layout/QuestionDialog";
import Copyright from "src/components/organisms/layout/Copyright";
import Header from "src/components/organisms/layout/Header";

export default function Home() {
  return (
    <div className="question">
      <Header />
      <VStack bgColor={"rgb(250,250,250)"}>
        <QuestionDialog />
      </VStack>
      <Copyright />
    </div>
  )
}
