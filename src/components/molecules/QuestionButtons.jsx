import { Box, VStack } from "@chakra-ui/react"
import Link from "next/link";
import { useRecoilState } from "recoil";

import QuestionLowerButton from "src/components/atoms/button/QuestionLowerButton";
import QuestionUpperButton from "src/components/atoms/button/QuestionUpperButton";
import { aiEState } from "src/store/aiEState";
import { appEState } from "src/store/appEState";
import { questionCountState } from "src/store/questionCountState";
import { useQuestionData } from "src/hooks/useQuestionData";
import { uxDState } from "src/store/uxDState";
import { webDState } from "src/store/webDState";
import { webEState } from "src/store/webEState";

export const QuestionButtons = () => {

    /**Recoil State */
    const [questionCount] = useRecoilState(questionCountState);
    const [webEWeight, setWebEWeight] = useRecoilState(webEState);
    const [aiEWeight, setAiEWeight] = useRecoilState(aiEState);
    const [appEWeight, setAppEWeight] = useRecoilState(appEState);
    const [webDWeight, setWebDWeight] = useRecoilState(webDState);
    const [uxDWeight, setUxDWeight] = useRecoilState(uxDState);

    const QUESTION_DATA = useQuestionData();

    return(
        questionCount<5 ?
            // true
            <VStack spacing="1vh">
                <QuestionUpperButton
                text={QUESTION_DATA[questionCount-1].btnText1}
                btnColor={QUESTION_DATA[questionCount-1].btnColor}
                onClick={QUESTION_DATA[questionCount-1].onClickUpperButtonInPage}
                />
                <QuestionLowerButton
                text={QUESTION_DATA[questionCount-1].btnText2}
                btnColor={QUESTION_DATA[questionCount-1].btnColor}
                onClick={QUESTION_DATA[questionCount-1].onClickLowerButtonInPage}
                />
            </VStack>

            :
            
            // false
            <Link href="/result">
                <VStack spacing="1vh">
                    <QuestionUpperButton
                    text={QUESTION_DATA[questionCount-1].btnText1}
                    btnColor={QUESTION_DATA[questionCount-1].btnColor}
                    onClick={QUESTION_DATA[questionCount-1].onClickUpperButtonInPage}
                    />
                    <QuestionLowerButton
                    text={QUESTION_DATA[questionCount-1].btnText2}
                    btnColor={QUESTION_DATA[questionCount-1].btnColor}
                    onClick={QUESTION_DATA[questionCount-1].onClickLowerButtonInPage}
                    />
                </VStack>
            </Link>
    )
}