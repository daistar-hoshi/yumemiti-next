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
        <Text
            fontSize={"xl"}
            fontWeight={"bold"}
            // fontFamily='Klee One'
        >
            あなたの適職は...
            <Box fontSize={"5xl"}>
                {judgementResultJob.name}:-)
            </Box>
        </Text>
        <Box>

          <OpacityContainer rounded="top">
            <Text
            p={5}
            textAlign={"center"}
            color="whiteAlpha.800"
            fontFamily='Varela Round'
            letterSpacing={10}
            >
              RESULT
            </Text>
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
      <Image
      src={yumemitiIcon.src}
      position="absolute"
      top={"25vh"}
      left={"-20vw"}
      zIndex={-1}
      maxW={"500px"}
      />
      <Copyright />
    </div>
  )
}
