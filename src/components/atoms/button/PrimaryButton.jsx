import { Button } from "@chakra-ui/react";

export default function PrimaryButton(props) {
return (
    <div>
        <Button
            w={"fit-content"}
            h={"fit-content"}
            py={3}
            px={20}
            variant={"outline"}
            color={props.color}
            borderColor={props.color}
            rounded={"full"}
            display={"block"}
            _hover={{ opacity: 0.5 }}
            _focus={{ _focus: "none"}}
        >
            {props.text}
        </Button>
    </div>
)
}