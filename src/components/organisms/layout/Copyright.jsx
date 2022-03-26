import { Flex, Text } from "@chakra-ui/react";

export default function Copyright() {
    return (
        <Flex
            align="center" 
            justify="space-between"
            p={{ base: 7, md: 10 }}
            as="div" /** {...props} */
            w="100%"
            bg="none" /** {...props} */
        >
            <Text as="small"
                fontSize={1}
                margin="auto"
                color="gray.300"
                >
                &copy;2022 Powered By Masaki Hoshi
            </Text>
        </Flex>
    )
}