import { Center, Divider, Text } from "@chakra-ui/react";

export default function JobSelectButton(props) {
    return (
        <Center
        w={"400px"}
        h={"50px"}
        m={"auto"}
        bg={"gray.50"}
        rounded={"full"}
        boxShadow={"md"}
        display={"flex"}
        position={"relative"}
        fontFamily='Roboto Condensed' 
        sans-serif
        transition="1000ms"
        _hover={{ 
            cursor: "pointer", 
            transform: "translate(-4px, -4px)",
            transitionDuration: "100ms",
            boxShadow: "5px 5px 1px 0px #505050"
        }}
        >
            <Text
            fontSize={20} 
            fontWeight={"bold"} 
            position={"absolute"} 
            left={"25%"}
            >
                {props.name}
            </Text>
            <Divider orientation="vertical" h={"30px"} mx={10} position={"absolute"} />
            <Text
            fontSize={15} 
            position={"absolute"} 
            right={"25%"}
            >
                -{props.type}-
            </Text>
        </Center>
    )
}