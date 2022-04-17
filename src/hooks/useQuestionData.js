import page1Image from "public/images/diagnosis/page1.svg";
import page2Image from "public/images/diagnosis/page2.svg";
import page3Image from "public/images/diagnosis/page3.svg";
import page4Image from "public/images/diagnosis/page4.svg";
import page5Image from "public/images/diagnosis/page5.svg";
import { useWeightingFunction } from "src/hooks/useWeightingFunction";



export const useQuestionData = () => {
    const WEIGHTING_FUNCTION = useWeightingFunction();

    const QUESTION_DATA = [
        {
        // pageCount: "1",
        question: "サービスの開発ではどちらが大切だと思う？",
        btnText1: "ソフトウェアの内部プログラム",
        btnText2: "アプリケーションのデザイン",
        btnColor: "red",
        image: page1Image,
        onClickUpperButtonInPage: WEIGHTING_FUNCTION[0].onClickUpperButtonInPage,
        onClickLowerButtonInPage: WEIGHTING_FUNCTION[0].onClickLowerButtonInPage
        },
        {
        // pageCount: "2",
        question: "自分の魅力は？",
        btnText1: "数学的な思考力",
        btnText2: "アイデア豊富な発想力",
        btnColor: "blue",
        image: page2Image,
        onClickUpperButtonInPage: WEIGHTING_FUNCTION[1].onClickUpperButtonInPage,
        onClickLowerButtonInPage: WEIGHTING_FUNCTION[1].onClickLowerButtonInPage
        },
        {
        // pageCount: "3" ,
        question: "かっこいいと思うクリエイター像は？",
        btnText1: "ジェネラリスト",
        btnText2: "プロフェッショナル",
        btnColor: "orange",
        image: page3Image,
        onClickUpperButtonInPage: WEIGHTING_FUNCTION[2].onClickUpperButtonInPage,
        onClickLowerButtonInPage: WEIGHTING_FUNCTION[2].onClickLowerButtonInPage
        },
        {
        // pageCount: "4",
        question: "どっちの技術を習得したい？",
        btnText1: "ブルーオーシャンな最新技術",
        btnText2: "多くの方に利用される技術",
        btnColor: "green",
        image: page4Image,
        onClickUpperButtonInPage: WEIGHTING_FUNCTION[3].onClickUpperButtonInPage,
        onClickLowerButtonInPage: WEIGHTING_FUNCTION[3].onClickLowerButtonInPage
        },
        {
        // pageCount: "5",
        question: "歳をとっても、プログラミングに携わりたい？",
        btnText1: "そう思う",
        btnText2: "そうは思はない",
        btnColor: "purple",
        image: page5Image,
        onClickUpperButtonInPage: WEIGHTING_FUNCTION[4].onClickUpperButtonInPage,
        onClickLowerButtonInPage: WEIGHTING_FUNCTION[4].onClickLowerButtonInPage
        }
    ]

    return QUESTION_DATA;
}