import { Divider, HStack, Image, List, Stack, Text } from "@chakra-ui/react";

import spanner from "public/images/icon/spanner.png";

export const RoadmapSection = (props) => {

    return (
        <Stack 
            bg={"white"} 
            rounded={"xl"} 
            w={"80vw"} 
            boxShadow={"md"}
            p={"50px"}
        >
            <HStack spacing={5} w={"fit-content"} m={"auto"}>
                <Image
                src={spanner.src}
                alt={"spanner"}
                boxSize={10}
                />
                <Text
                fontSize={"3xl"} 
                fontFamily='Josefin Sans' 
                fontWeight={"bold"}
                color={props.color}
                >
                    {props.title}
                </Text>
            </HStack>
            <Divider />
            <List pt={5} spacing={5} color={"gray.700"}>
                {props.children}
            </List>
        </Stack>
    )
}