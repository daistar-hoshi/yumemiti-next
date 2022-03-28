import { Flex, Heading, Image } from "@chakra-ui/react";

import yumemitiIcon from "public/images/icon/yumemiti-icon.png";

export default function HeaderButton() {
    return (
        <Flex
        align="center"
        as="a"
        _hover={{ cursor: "pointer", opacity: "0.8" }}
        >
            <Heading
            as="h1" 
            fontSize="30px"
            >
                Yumemiti
            </Heading>
            <Image
            src={yumemitiIcon.src} 
            alt="menu"
            boxSize="30px"
            ml={1}
            />
        </Flex>
    )
}