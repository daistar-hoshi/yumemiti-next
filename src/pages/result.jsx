import { Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil"
import { aiEState } from "src/store/aiEState"
import { appEState } from "src/store/appEState";
import { uxDState } from "src/store/uxDState";
import { webDState } from "src/store/webDState";
import { webEState } from "src/store/webEState";

export default function Home() {

  const [webEWeight] = useRecoilState(webEState);
  const [aiEWeight] = useRecoilState(aiEState);
  const [appEWeight] = useRecoilState(appEState);
  const [webDWeight] = useRecoilState(webDState);
  const [uxDWeight] = useRecoilState(uxDState);

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
