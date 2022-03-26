import { Text } from "@chakra-ui/react";

export default function AboutLine() {
    return (
        <div>
        <Text
            w={"fit-content"}
            py={5}
            textAlign="center"
            color="gray.100"
        >
            Yumemitiはあなたのなりたい「クリエイター」を見つけ出し
            <br />
            より鮮明なビジョンを描くための診断サービスです。
        </Text>
        </div>
    )
}