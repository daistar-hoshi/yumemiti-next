import { Circle, Divider, Heading, Image, Text } from "@chakra-ui/react";

export default function DiagnosisStep(props) {
    return (
        <Circle
            size={400}
            bgGradient={`linear(${props.color}.50 0%, ${props.color}.50 35%, white 35%, white 100%)`}
            m={"auto"}
            mb={50}
            borderWidth={1}
            borderColor={"gray.50"}
            boxShadow={"lg"}
            flexDirection={"column"}
            position={"relative"}
        >
            <Heading
                as={"h3"}
                p={30}
                position={"absolute"}
                top={"10%"}
                color={"gray.500"}
            >
                {props.title}
            </Heading>
            <Image
                src={props.src}
                alt="my-answer"
                boxSize={130}
                w={"fit-content"}
                m={"auto"}
                position={"absolute"}
                top={"40%"}
            />
            <Divider w={"40%"} position={"absolute"} top={"77%"} variant={"dashed"} bg={`${props.color}.200`}/>
            <Text
                fontSize={12}
                color={"gray.500"}
                lineHeight={4}
                textAlign={"center"}
                position={"absolute"}
                bottom={"12%"}
            >
                {props.children}
            </Text>
        </Circle>
    )
}