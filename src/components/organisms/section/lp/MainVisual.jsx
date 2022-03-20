import { Divider, Image, VStack } from "@chakra-ui/react";
// import Image from "next/image";

import PrimaryButton from "src/components/atoms/button/PrimaryButton";
import AboutLine from "src/components/atoms/text/lp/mainVisual/AboutLine";
import Catchcopy from "src/components/atoms/text/lp/mainVisual/Catchcopy";
import bgMainVisual from "public/images/background/bgMainVisual.png";

export default function MainVisual() {
return (
<div>
    <VStack>
        <Image
            src={bgMainVisual.src}
            alt="bgMainVisual"
            w={"100%"}
            h={"90%"}
            position={"fixed"}
            zIndex={-1}
            top={0}
            bgRepeat={"no-repeat"}
            bgPos={"center"}
            objectFit={"cover"}
        />
        <Catchcopy />
        <Divider w={"60%"} />
        <AboutLine />
        <PrimaryButton text="診断" color="white" />
    </VStack>
</div>
)
}
