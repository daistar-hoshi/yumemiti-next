import { Image } from "@chakra-ui/react";

import yumemitiIcon from "public/images/icon/yumemiti-icon.png";

export const BgYumemitiImage = () => {
    return(
        <Image
        src={yumemitiIcon.src}
        position="absolute"
        top={"25vh"}
        left={"-20vw"}
        zIndex={-1}
        maxW={"500px"}
        />
    )
}