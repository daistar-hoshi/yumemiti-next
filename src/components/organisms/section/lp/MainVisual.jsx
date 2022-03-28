import { Divider, Image, VStack } from "@chakra-ui/react";
// import Image from "next/image";

import PrimaryButton from "src/components/atoms/button/PrimaryButton";
import AboutLine from "src/components/atoms/text/lp/mainVisual/AboutLine";
import Catchcopy from "src/components/atoms/text/lp/mainVisual/Catchcopy";
import bgMainVisual from "public/images/background/bgMainVisual.png";

export default function MainVisual() {
return (
<div>
    <VStack py={"10vh"}>
        <Image
            src={bgMainVisual.src}
            alt="bgMainVisual"
            h={"90%"}
            position={"fixed"}
            zIndex={-1}
            top={0}
            bgRepeat={"no-repeat"}
            bgPos={"center"}
            objectFit={"cover"}
            transformOrigin={"center"}
            transform="scale(2)"
        />
        <Catchcopy />
        <Divider w={"60%"} />
        <AboutLine />
        <PrimaryButton text="診断" color="white"/>
    </VStack>
</div>
)
}
