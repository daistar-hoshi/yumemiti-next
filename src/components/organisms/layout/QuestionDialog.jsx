import OpacityContainer from "src/components/atoms/container/OpacityContainer";
import QuestionCount from "src/components/atoms/text/question/QuestionCount";

export default function QuestionDialog() {
    return(
        <>
        <OpacityContainer rounded="top">
            <QuestionCount />
        </OpacityContainer>
        </>
    )
}