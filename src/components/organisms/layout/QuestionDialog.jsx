import { Box, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import QuestionLowerButton from "src/components/atoms/button/QuestionLowerButton";
import QuestionUpperButton from "src/components/atoms/button/QuestionUpperButton";

import OpacityContainer from "src/components/atoms/container/OpacityContainer";
import { SpacingText } from "src/components/atoms/text/shared/SpacingText";
import { QuestionButtons } from "src/components/molecules/QuestionButtons";
import { questionCountState } from "src/store/questionCountState";

export default function QuestionDialog(props) {
    /**Recoil State */
    const [questionCount] = useRecoilState(questionCountState);

    return(
        <VStack
        spacing={"none"}
        >
            <OpacityContainer rounded="top">
                <SpacingText text={`QUESTION${props.pageCount}/5`} />
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