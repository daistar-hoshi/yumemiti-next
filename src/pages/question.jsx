import { Image, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

import QuestionDialog from "src/components/organisms/layout/QuestionDialog";
import Copyright from "src/components/organisms/layout/Copyright";
import Header from "src/components/organisms/layout/Header";
import yumemitiIcon from "public/images/icon/yumemiti-icon.png";
import { questionCountState } from "src/store/questionCountState";
import { useQuestionData } from "src/hooks/useQuestionData";
import { BgYumemitiImage } from "src/components/atoms/background/bgYumemitiImage";


export default function Home() {
  
  /** RecoilState */
  const [questionCount] = useRecoilState(questionCountState);

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
      <BgYumemitiImage />
      <Copyright />
    </div>
  )
}
