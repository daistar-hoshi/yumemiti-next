import { Button } from "@chakra-ui/react";
import { memo } from "react";

export const NavButton = memo((props) => {

    const { children } = props;

    return (
        <>
        <Button 
        bg={"white"}
        borderWidth={1}
        borderColor={"black"}
        rounded={"md"}
        display={"block"}
        w={"100%"}
        m={"auto"}
        my={2}
        _hover={{ bg: "#6C63FF", color: "white", borderColor: "gray.500" }}
        _focus={{ _focus: "none"}}
        >
            {children}
        </Button>
        </>
    )
});