import { Text } from "@chakra-ui/react"

export const SpacingText = (props) => {
    return(
        <Text
        p={5}
        textAlign={"center"}
        color="whiteAlpha.800"
        fontFamily='Varela Round'
        letterSpacing={10}
        >
            {props.text}
        </Text>
    )
}