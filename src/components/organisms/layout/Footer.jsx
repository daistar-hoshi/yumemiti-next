import { Box, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Copyright from "src/components/organisms/layout/Copyright";

export default function Footer() {
    return (
        <Box as="footer" bg="gray.900" position={"relative"} zIndex={999}>
            <Heading
            as="h2" 
            p="30px" 
            pl="50px"
            color="blue.500"
            >
                Information
            </Heading>
            <Flex w="90%" m="auto" color="gray.100">
                <Table variant="unstriped">
                    <Thead>
                        <Tr>
                            <Th>Service</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td display="block">ロゴへの思い</Td>
                            <Td display="block">バージョン</Td>
                            <Td display="block">ご質問｜要望</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Table variant="unstriped">
                    <Thead>
                        <Tr>
                            <Th>Creator</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td display="block">プロフィール</Td>
                            <Td display="block">コンタクト</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Flex>
            <Copyright />
        </Box>
    )
}