import { Button } from "@chakra-ui/react";

export default function QuestionLowerButton(props) {
    return(
        <Button
            color={`${props.btnColor}.50`}
            bg={`${props.btnColor}.400`}
            p={7}
            w="300px"
            onClick={props.onClick}
            _hover={{ opacity: 0.7 }}
            _focus={{ _focus: "none"}}
        >
            {props.text}
        </Button>
    )
}