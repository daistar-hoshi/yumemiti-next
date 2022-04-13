import { Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil"
import { useJudgeResultJob } from "src/hooks/useJudgeResultJob";
import { aiEState } from "src/store/aiEState"
import { appEState } from "src/store/appEState";
import { uxDState } from "src/store/uxDState";
import { webDState } from "src/store/webDState";
import { webEState } from "src/store/webEState";

export default function Home() {

  /** RecoilState */
  const [webEWeight] = useRecoilState(webEState);
  const [aiEWeight] = useRecoilState(aiEState);
  const [appEWeight] = useRecoilState(appEState);
  const [webDWeight] = useRecoilState(webDState);
  const [uxDWeight] = useRecoilState(uxDState);

  /** hooks */
  const judgeResultJob = useJudgeResultJob();

  /** func */
  const judgementResultJob = judgeResultJob();

  return (
    <div className="result">
      <Text>result</Text>
      <br />
      <Text>webE:{webEWeight}</Text>
      <Text>aiE:{aiEWeight}</Text>
      <Text>appE:{appEWeight}</Text>
      <Text>webD:{webDWeight}</Text>
      <Text>uxD:{uxDWeight}</Text>
    </div>
  )
}
