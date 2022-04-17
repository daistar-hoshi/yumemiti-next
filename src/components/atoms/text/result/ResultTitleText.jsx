import { Box, Text } from "@chakra-ui/react"

export const ResultTitleText = (props) => {
    return(
        <div>
            <Text
                fontSize={"xl"}
                fontWeight={"bold"}
            >
                あなたの適職は...
            </Text>
            <Text
            fontSize={"5xl"}
            fontWeight={"bold"}
            >
                {props.name}:-)
            </Text>
        </div>
    )
}