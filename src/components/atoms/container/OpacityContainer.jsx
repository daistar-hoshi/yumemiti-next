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

    /**run */
    const borderRadius = roundedParse(props.rounded);

    return(
        <Box
        w={"350px"}
        bg={"rgba(0,0,0,0.9)"}
        boxShadow={"lg"}
        borderRadius={`${borderRadius}`}
        >
            {props.children}
        </Box>
    )
}