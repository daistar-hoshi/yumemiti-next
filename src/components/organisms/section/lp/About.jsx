import { Divider, HStack, VStack } from "@chakra-ui/react";

import SectionTitle from "src/components/atoms/text/lp/about/SectionTitle";
import AboutLeftText from "src/components/atoms/text/lp/about/AboutLeftText";
import AboutRightText from "src/components/atoms/text/lp/about/AboutRightText";
import AbouBottomText from "src/components/atoms/text/lp/about/AboutBottomText";

export default function AbouLeftText() {
    return (
        <VStack
        spacing={20}
        py={"10vh"}
        bgColor={"rgb(250,250,250)"}
        >
            <SectionTitle />
            <HStack spacing={8}>
                <AboutLeftText />
                <Divider orientation="vertical" h={250}/>
                <AboutRightText />
            </HStack>
            <AbouBottomText />
        </VStack>
    )
}