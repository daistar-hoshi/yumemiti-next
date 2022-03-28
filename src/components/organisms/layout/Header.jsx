import { Flex } from "@chakra-ui/react";

import HeaderButton from "src/components/atoms/button/HeaderButton";
import HamburgerButton from "src/components/atoms/button/HamburgerButton";

export default function Header() {
    return (
        <div>
        <Flex   //make a white-frame
            as="Header"
            position={"fixed"}
            direction="column"
            zIndex={999}
            top={0}
            left={0}
            w={"100%"}
        >
            <Flex   
                bg="rgba(255,255,255,0.5)"
                align="center" 
                justify="space-between"
                p={{ base: 3, md: 5 }}
            >
                <HeaderButton />
                <HamburgerButton />
            </Flex>
        </Flex>
        </div>
    )
}