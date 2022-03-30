import { Box } from "@chakra-ui/react";

export default function OpacityContainer(props) {
    /** Writing props "top" or "bottom" */
    
    /**func */
    const roundedParse = (rounded) => {
        if(rounded==="top"){
            return "6px 6px 0 0";
        }
        return "0 0 6px 6px";
    }
    const colorParse = (rounded) => {
        if(rounded==="top"){
            return "rgba(0,0,0,0.9)";
        }
        return "rgba(255,255,255,0.9)";
    }

    /**run */
    const borderRadius = roundedParse(props.rounded);
    const bgColor = colorParse(props.rounded);

    return(
        <Box
        w={"350px"}
        bg={`${bgColor}`}
        boxShadow={"lg"}
        borderRadius={`${borderRadius}`}
        >
            {props.children}
        </Box>
    )
}