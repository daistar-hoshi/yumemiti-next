import { Box, Divider, Image, Text, VStack } from "@chakra-ui/react";
import { useRecoilState } from "recoil"

import Header from "src/components/organisms/layout/Header";
import { useJudgeResultJob } from "src/hooks/useJudgeResultJob";
import { aiEState } from "src/store/aiEState"
import { appEState } from "src/store/appEState";
import { uxDState } from "src/store/uxDState";
import { webDState } from "src/store/webDState";
import { webEState } from "src/store/webEState";
import OpacityContainer from "src/components/atoms/container/OpacityContainer";
import PrimaryButton from "src/components/atoms/button/PrimaryButton";
import Link from "next/link";
import yumemitiIcon from "public/images/icon/yumemiti-icon.png";
import Copyright from "src/components/organisms/layout/Copyright";
import { BgYumemitiImage } from "src/components/atoms/background/bgYumemitiImage";
import { SpacingText } from "src/components/atoms/text/shared/SpacingText";
import { ResultTitleText } from "src/components/atoms/text/result/ResultTitleText";

export default function Home() {

  /** RecoilState */
  const [webEWeight] = useRecoilState(webEState);
  const [aiEWeight] = useRecoilState(aiEState);
  const [appEWeight] = useRecoilState(appEState);
  const [webDWeight] = useRecoilState(webDState);
  const [uxDWeight] = useRecoilState(uxDState);

  /** hooks */
  const judgeResultJob = useJudgeResultJob();
  console.log(judgeResultJob);

  /** func */
  const judgementResultJob = judgeResultJob();
  console.log(judgementResultJob.pass);

  return (
    <div className="result">
      <Header />
      <VStack as="main" spacing={8} flex="1" pt={"15vh"}>
        <ResultTitleText name={judgementResultJob.name} />
        <Box>
          <OpacityContainer rounded="top">
            <SpacingText text="RESULT" />
          </OpacityContainer>
          <OpacityContainer rounded="bottom">
            <VStack py={30}>
              <Image
              src={judgementResultJob.imageSrc.src}
              w={150}
              h={150}
              m={"auto"}
              my={8}
              />
              <PrimaryButton text="ロードマップを見る" color="black" pass={judgementResultJob.pass} />
            </VStack>
          </OpacityContainer>
        </Box>
        <Divider w={300}/>
      </VStack>
      <BgYumemitiImage />
      <Copyright />
    </div>
  )
}
