import { Divider, VStack } from "@chakra-ui/react";

import DiagnosisStep from "src/components/organisms/layout/DiagnosisStep";
import SectionTitle from "src/components/atoms/text/lp/lecture/SectionTitle";
import step1 from "public/images/step/step1.svg";
import step2 from "public/images/step/step2.svg";
import step3 from "public/images/step/step3.svg";

export default function Lecture() {
    return (
        <VStack
        spacing={10}
        py={"10vh"}
        bgColor={"rgb(253,253,253)"}
        >
            <SectionTitle />
            <DiagnosisStep 
            title="質問に答える" 
            color="pink" 
            src={step1.src}
            >
                5個の質問に答えて適正を分析しましょう
                <br />
                あなたの興味を見つけだしてくれます
            </DiagnosisStep>
            
            <Divider w={300}/>
            
            <DiagnosisStep
            title="適正を確認する"
            color="yellow"
            src={step2.src}
            >
                診断の結果を確認しましょう
                <br />
                それはあくまで１つの「可能性」です
            </DiagnosisStep>
            
            <Divider w={300}/>

            <DiagnosisStep 
            title="ロードマップを見る" 
            color="blue" 
            src={step3.src}
            >
                今やるべきことを見てみましょう
                <br />
                1歩目を見届けるまでが、私のお仕事です
            </DiagnosisStep>
        </VStack>
    )
}