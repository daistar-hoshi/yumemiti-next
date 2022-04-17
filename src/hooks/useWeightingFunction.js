import { useRecoilState } from "recoil";

import { aiEState } from "src/store/aiEState";
import { appEState } from "src/store/appEState";
import { questionCountState } from "src/store/questionCountState";
import { uxDState } from "src/store/uxDState";
import { webDState } from "src/store/webDState";
import { webEState } from "src/store/webEState";

export const useWeightingFunction = () => {
    /** RecoilState */
    const [questionCount, setQuestionCount] = useRecoilState(questionCountState);
    const [webEWeight, setWebEWeight] = useRecoilState(webEState);
    const [aiEWeight, setAiEWeight] = useRecoilState(aiEState);
    const [appEWeight, setAppEWeight] = useRecoilState(appEState);
    const [webDWeight, setWebDWeight] = useRecoilState(webDState);
    const [uxDWeight, setUxDWeight] = useRecoilState(uxDState);

    /**func */
    const onClickAnswerButton = () => {
        if(questionCount<5){
        setQuestionCount(questionCount+1);
        }
    }

    // page1
    const onClickUpperButtonInPage1 = () => {
        setWebEWeight(webEWeight+1);
        setAiEWeight(aiEWeight+2);
        setAppEWeight(appEWeight+1);
        onClickAnswerButton();
    };
    const onClickLowerButtonInPage1 = () => {
        setWebDWeight(webDWeight+2);
        setUxDWeight(uxDWeight+1);
        onClickAnswerButton();
    };

    // page2
    const onClickUpperButtonInPage2 = () => {
        setAppEWeight(appEWeight+1);
        setWebDWeight(webDWeight+2);
        setUxDWeight(uxDWeight+2);
        onClickAnswerButton();
    };
    const onClickLowerButtonInPage2 = () => {
        setWebEWeight(webEWeight+1);
        setAiEWeight(aiEWeight+2);
        onClickAnswerButton();
    };

    // page3
    const onClickUpperButtonInPage3 = () => {
        setWebEWeight(webEWeight+1);
        setWebDWeight(webDWeight+2);
        setUxDWeight(uxDWeight+1);
        onClickAnswerButton();
    };
    const onClickLowerButtonInPage3 = () => {
        setAiEWeight(aiEWeight+1);
        setAppEWeight(appEWeight+2);
        onClickAnswerButton();
    };

    // page4
    const onClickUpperButtonInPage4 = () => {
        setAiEWeight(aiEWeight+2);
        setWebDWeight(webDWeight+1);
        setUxDWeight(uxDWeight+2);
        onClickAnswerButton();
    };
    const onClickLowerButtonInPage4 = () => {
        setWebEWeight(webEWeight+2);
        setAppEWeight(appEWeight+1);
        onClickAnswerButton();
    };

    // page5
    const onClickUpperButtonInPage5 = () => {
        setWebEWeight(webEWeight+2);
        setAiEWeight(aiEWeight+1);
        setAppEWeight(appEWeight+2);
        onClickAnswerButton();
    };
    const onClickLowerButtonInPage5 = () => {
        setWebDWeight(webDWeight+1);
        setUxDWeight(uxDWeight+2);
        onClickAnswerButton();
    };

    const WEIGHTING_FUNCTION = [
        {
            onClickUpperButtonInPage: onClickUpperButtonInPage1,
            onClickLowerButtonInPage: onClickLowerButtonInPage1
        },
        {
            onClickUpperButtonInPage: onClickUpperButtonInPage2,
            onClickLowerButtonInPage: onClickLowerButtonInPage2
        },
        {
            onClickUpperButtonInPage: onClickUpperButtonInPage3,
            onClickLowerButtonInPage: onClickLowerButtonInPage3
        },
        {
            onClickUpperButtonInPage: onClickUpperButtonInPage4,
            onClickLowerButtonInPage: onClickLowerButtonInPage4
        },
        {
            onClickUpperButtonInPage: onClickUpperButtonInPage5,
            onClickLowerButtonInPage: onClickLowerButtonInPage5
        }
    ]

    return WEIGHTING_FUNCTION;
}