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


export default function Home() {
  
  /** RecoilState */
  const [questionCount, setQuestionCount] = useRecoilState(questionCountState);
  const [webEWeight, setWebEWeight] = useRecoilState(webEState);
  const [aiEWeight, setAiEWeight] = useRecoilState(aiEState);
  const [appEWeight, setAppEWeight] = useRecoilState(appEState);
  const [webDWeight, setWebDWeight] = useRecoilState(webDState);
  const [uxDWeight, setUxDWeight] = useRecoilState(uxDState);

  /**func */
  const onClickAnswerButton = () => {
    if(questionCount<5){
      setQuestionCount(questionCount+1);
    }
  }
  
  // page1
  const onClickUpperButtonInPage1 = () => {
    setWebEWeight(webEWeight+1);
    setAiEWeight(aiEWeight+2);
    setAppEWeight(appEWeight+1);
    onClickAnswerButton();
    console.log("success");
  };
  const onClickLowerButtonInPage1 = () => {
    setWebDWeight(webDWeight+2);
    setUxDWeight(uxDWeight+1);
    onClickAnswerButton();
    console.log("success");
  };
  
  // page2
  const onClickUpperButtonInPage2 = () => {
    setAppEWeight(appEWeight+1);
    setWebDWeight(webDWeight+2);
    setUxDWeight(uxDWeight+2);
    onClickAnswerButton();
    console.log("success");
  };
  const onClickLowerButtonInPage2 = () => {
    setWebEWeight(webEWeight+1);
    setAiEWeight(aiEWeight+2);
    onClickAnswerButton();
    console.log("success");
  };
  
  // page3
  const onClickUpperButtonInPage3 = () => {
    setWebEWeight(webEWeight+1);
    setWebDWeight(webDWeight+2);
    setUxDWeight(uxDWeight+1);
    onClickAnswerButton();
    console.log("success");
  };
  const onClickLowerButtonInPage3 = () => {
    setAiEWeight(aiEWeight+1);
    setAppEWeight(appEWeight+2);
    onClickAnswerButton();
    console.log("success");
  };
  
  // page4
  const onClickUpperButtonInPage4 = () => {
    setAiEWeight(aiEWeight+2);
    setWebDWeight(webDWeight+1);
    setUxDWeight(uxDWeight+2);
    onClickAnswerButton();
    console.log("success");
  };
  const onClickLowerButtonInPage4 = () => {
    setWebEWeight(webEWeight+2);
    setAppEWeight(appEWeight+1);
    onClickAnswerButton();
    console.log("success");
  };
  
  // page5
  const onClickUpperButtonInPage5 = () => {
    setWebEWeight(webEWeight+2);
    setAiEWeight(aiEWeight+1);
    setAppEWeight(appEWeight+2);
    onClickAnswerButton();
    console.log("success");
  };
  const onClickLowerButtonInPage5 = () => {
    setWebDWeight(webDWeight+1);
    setUxDWeight(uxDWeight+2);
    onClickAnswerButton();
    console.log("success");
  };
  
  /**object */
  const QUESTIONS = [
    {
      // pageCount: "1",
      question: "サービスの開発ではどちらが大切だと思う？",
      btnText1: "ソフトウェアの内部プログラム",
      btnText2: "アプリケーションのデザイン",
      btnColor: "red",
      image: page1Image,
      onClickUpperButtonInPage: onClickUpperButtonInPage1,
      onClickLowerButtonInPage: onClickLowerButtonInPage1
    },
    {
      // pageCount: "2",
      question: "自分の魅力は？",
      btnText1: "数学的な思考力",
      btnText2: "アイデア豊富な発想力",
      btnColor: "blue",
      image: page2Image,
      onClickUpperButtonInPage: onClickUpperButtonInPage2,
      onClickLowerButtonInPage: onClickLowerButtonInPage2
    },
    {
      // pageCount: "3" ,
      question: "かっこいいと思うクリエイター像は？",
      btnText1: "ジェネラリスト",
      btnText2: "プロフェッショナル",
      btnColor: "orange",
      image: page3Image,
      onClickUpperButtonInPage: onClickUpperButtonInPage3,
      onClickLowerButtonInPage: onClickLowerButtonInPage3
    },
    {
      // pageCount: "4",
      question: "どっちの技術を習得したい？",
      btnText1: "ブルーオーシャンな最新技術",
      btnText2: "多くの方に利用される技術",
      btnColor: "green",
      image: page4Image,
      onClickUpperButtonInPage: onClickUpperButtonInPage4,
      onClickLowerButtonInPage: onClickLowerButtonInPage4
    },
    {
      // pageCount: "5",
      question: "歳をとっても、プログラミングに携わりたい？",
      btnText1: "そう思う",
      btnText2: "そうは思はない",
      btnColor: "purple",
      image: page5Image,
      onClickUpperButtonInPage: onClickUpperButtonInPage5,
      onClickLowerButtonInPage: onClickLowerButtonInPage5
    }
  ]

  /**state */
  // const [questionCount, setQuestionCount] = useState(1);

  
  console.log(questionCount);
  
  return (
    <div className="question">
      <Header />
      <VStack>
        <QuestionDialog
        pageCount={questionCount}
        question={QUESTIONS[questionCount-1].question}
        btnText1={QUESTIONS[questionCount-1].btnText1}
        btnText2={QUESTIONS[questionCount-1].btnText2}
        btnColor={QUESTIONS[questionCount-1].btnColor}
        image={QUESTIONS[questionCount-1].image}
        onClickUpperButtonInPage={QUESTIONS[questionCount-1].onClickUpperButtonInPage}
        onClickLowerButtonInPage={QUESTIONS[questionCount-1].onClickLowerButtonInPage}
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
