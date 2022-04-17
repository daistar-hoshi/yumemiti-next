import { Button, Image, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import QuestionDialog from "src/components/organisms/layout/QuestionDialog";
import Copyright from "src/components/organisms/layout/Copyright";
import Header from "src/components/organisms/layout/Header";
import yumemitiIcon from "public/images/icon/yumemiti-icon.png";
import page1Image from "public/images/diagnosis/page1.svg";
import page2Image from "public/images/diagnosis/page2.svg";
import page3Image from "public/images/diagnosis/page3.svg";
import page4Image from "public/images/diagnosis/page4.svg";
import page5Image from "public/images/diagnosis/page5.svg";
import { webEState } from "src/store/webEState";
import { aiEState } from "src/store/aiEState";
import { appEState } from "src/store/appEState";
import { webDState } from "src/store/webDState";
import { uxDState } from "src/store/uxDState";
import { questionCountState } from "src/store/questionCountState";
import { useQuestionData } from "src/hooks/useQuestionData";


export default function Home() {
  
  /** RecoilState */
  const [questionCount, setQuestionCount] = useRecoilState(questionCountState);

  const QUESTION_DATA = useQuestionData();

  return (
    <div className="question">
      <Header />
      <VStack>
        <QuestionDialog
        pageCount={questionCount}
        question={QUESTION_DATA[questionCount-1].question}
        image={QUESTION_DATA[questionCount-1].image}
        />
      </VStack>
      <Image
      src={yumemitiIcon.src}
      position="absolute"
      top={"25vh"}
      left={"-20vw"}
      zIndex={-1}
      maxW={"500px"}
      />
      <Copyright />
    </div>
  )
}
