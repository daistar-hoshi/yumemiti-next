import { VStack } from "@chakra-ui/react"
import Link from "next/link";
import { useRecoilState } from "recoil";

import QuestionLowerButton from "src/components/atoms/button/QuestionLowerButton";
import QuestionUpperButton from "src/components/atoms/button/QuestionUpperButton";
import { questionCountState } from "src/store/questionCountState";
import { useQuestionData } from "src/hooks/useQuestionData";

export const QuestionButtons = () => {

    /**Recoil State */
    const [questionCount] = useRecoilState(questionCountState);

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