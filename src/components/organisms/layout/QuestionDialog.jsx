import { Box, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import QuestionLowerButton from "src/components/atoms/button/QuestionLowerButton";
import QuestionUpperButton from "src/components/atoms/button/QuestionUpperButton";

import OpacityContainer from "src/components/atoms/container/OpacityContainer";
import QuestionCount from "src/components/atoms/text/question/QuestionCount";
import { QuestionButtons } from "src/components/molecules/QuestionButtons";
import { questionCountState } from "src/store/questionCountState";

export default function QuestionDialog(props) {
    /**Recoil State */
    const [questionCount] = useRecoilState(questionCountState);

    //三項演算子で、5ページ目だけにnext/Linkをつけようとするとエラー（動きはする）
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
                    <QuestionButtons />
                </VStack>
            </OpacityContainer>
        </VStack>
    )
}