import { Text } from "@chakra-ui/react";

export default function QuestionCount(props) {
    return(
        <Text
        p={5}
        textAlign={"center"}
        color="whiteAlpha.800"
        fontFamily='Varela Round'
        letterSpacing={10}
        >
            QUESTION{props.pageCount}/5
        </Text>
    )
}