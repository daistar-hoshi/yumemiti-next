import { Text } from "@chakra-ui/react";

export default function AbouLeftText() {
    return (
        <Text 
        fontSize={"xs"} 
        lineHeight={10} 
        color={"gray.600"} 
        >
            Yumemiti は、
            <br />
            ３択の質問に答えることで
            <br />
            あなたが
            <br />
            「どんな職種に向いているか」を
            <br />
            示してくれる
            <br />
            クリエイター向け診断ツールです。
        </Text>
    )
}