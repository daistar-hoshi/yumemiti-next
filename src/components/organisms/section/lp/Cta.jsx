import { Divider, HStack, Image, VStack } from "@chakra-ui/react";

import SectionTitle from "src/components/atoms/text/lp/cta/SectionTitle";
import YellText from "src/components/atoms/text/lp/cta/YellText";
import PrimaryButton from "src/components/atoms/button/PrimaryButton";
import yumemitiIcon from "public/images/icon/yumemiti-icon.png"
import bgCta from "public/images/background/bgCta.png"

export default function Cta() {
    return (
        <VStack
            spacing={10}
            pt={"10vh"}
            bgColor={"rgb(253,253,253)"}
        >
            <SectionTitle />
            <HStack spacing={6}>
                <Image
                    src={yumemitiIcon.src}
                    alt="yumemiti-icon"
                    boxSize="80px"
                />
                <VStack spacing={6}>
                    <YellText />
                    <Divider />
                    <PrimaryButton text="診断" color="glay"/>
                </VStack>
            </HStack>
            <Image
                src={bgCta.src}
            />
        </VStack>
    )
}