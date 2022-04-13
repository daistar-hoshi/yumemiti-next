import { useRecoilState } from "recoil";

import { aiEState } from "src/store/aiEState";
import { appEState } from "src/store/appEState";
import { uxDState } from "src/store/uxDState";
import { webDState } from "src/store/webDState";
import { webEState } from "src/store/webEState";

export const useJudgeResultJob = () => {

    /** RecoilState */
    const [webEWeight] = useRecoilState(webEState);
    const [aiEWeight] = useRecoilState(aiEState);
    const [appEWeight] = useRecoilState(appEState);
    const [webDWeight] = useRecoilState(webDState);
    const [uxDWeight] = useRecoilState(uxDState);
    
    /** variable */
    let judgementJob = null;
    
    const jobArr = [
        {name: "WEBエンジニア", weight: webEWeight, pass: "/roadmap_engineer_web", imageSrc: engineerWeb, judge: false},
        {name: "AIエンジニア", weight: aiEWeight, pass: "/roadmap_engineer_ai", imageSrc: engineerAi, judge: false},
        {name: "APPエンジニア", weight: appEWeight, pass: "/roadmap_engineer_app", imageSrc: engineerApp, judge: false},
        {name: "WEBデザイナー", weight: webDWeight, pass: "/roadmap_designer_web", imageSrc: designerWeb, judge: false},
        {name: "UXデザイナー", weight: uxDWeight, pass: "/roadmap_designer_ux", imageSrc: designerUx, judge: false}
    ]
    
    /** func */
    // 適職を判断する(return:judgementJob)
    const judgeJob = () => {
        
        // Weightだけを抽出する処理
        const weightArr = jobArr.map(function(curJob){
            return curJob.weight;
        });
        
        // 最大のWeightの値を取り出す処理
        const maxWeight = Math.max(...weightArr);
        
        // Weightが最大の職種をtrueにして適職の配列を作成する処理
        let matchJobArr = new Array();
        jobArr.map(function(curJob){
            if(curJob.weight===maxWeight) {
                curJob.judge = true;
                matchJobArr.push(curJob);
            }
            return curJob;
        });
        
        // 適職を抽出する処理
        if(matchJobArr.length === 1) {
            judgementJob = matchJobArr[0];
        }else{
            judgementJob = matchJobArr[Math.floor(Math.random() * matchJobArr.length)];
        }


        return judgementJob;
    }

    return judgeJob;
}