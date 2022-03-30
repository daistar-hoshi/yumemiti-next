import { Box, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import QuestionLowerButton from "src/components/atoms/button/QuestionLowerButton";
import QuestionUpperButton from "src/components/atoms/button/QuestionUpperButton";

import OpacityContainer from "src/components/atoms/container/OpacityContainer";
import QuestionCount from "src/components/atoms/text/question/QuestionCount";
import { questionCountState } from "src/store/questionCountState";

export default function QuestionDialog(props) {
    /**Recoil State */
    const [questionCount, setQuestionCount] = useRecoilState(questionCountState);

    return(
        <VStack
        spacing={"none"}
        >
            <OpacityContainer rounded="top">
                <QuestionCount pageCount={props.pageCount}/>
            </OpacityContainer>
            <OpacityContainer rounded="bottom">
                <VStack py={30}>
                    <Image
                    src={props.image.src}
                    w={150}
                    h={150}
                    m={"auto"}
                    my={8}
                    />
                    <VStack spacing="1vh">
                        <QuestionUpperButton
                        text={props.btnText1}
                        btnColor={props.btnColor}
                        onClick={props.onClickUpperButtonInPage}
                        />
                        <QuestionLowerButton
                        text={props.btnText2}
                        btnColor={props.btnColor}
                        onClick={props.onClickLowerButtonInPage}
                        />
                    </VStack>
                </VStack>
            </OpacityContainer>
        </VStack>
    )
}