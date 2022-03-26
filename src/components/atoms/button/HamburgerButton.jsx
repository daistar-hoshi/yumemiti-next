import { Icon } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function HamburgerButton() {
    return (
        <Icon
            as={HamburgerIcon} 
            alt="menu" 
            boxSize="30px"
            display={{ base: "flex", md:"none" }}
        />
    )
}