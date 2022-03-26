import { Box, Divider, HStack, VStack } from "@chakra-ui/react";
import JobSelectButton from "src/components/atoms/button/JobSelectButton";

import SectionTitle from "src/components/atoms/text/lp/selectJob/SectionTitle";

export default function SelectJob() {
    return (
        <VStack
            py={"10vh"}
            bgColor={"rgb(250,250,250)"}
        >
            <SectionTitle />
            <HStack spacing={5}>
                <Divider orientation="vertical" h={350}/>
                <VStack spacing={8}>
                    <JobSelectButton name="Web" type="Engineer"/>
                    <JobSelectButton name="AI" type="Engineer"/>
                    <JobSelectButton name="App" type="Engineer"/>
                    <JobSelectButton name="Web(UI)" type="Designer"/>
                    <JobSelectButton name="UX" type="Designer"/>
                </VStack>
                <Divider orientation="vertical" h={350}/>
            </HStack>
        </VStack>
    )
}