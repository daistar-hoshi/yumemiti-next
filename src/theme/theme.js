import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "rgb(250,250,250)",
                color: "gray.700",
                fontFamiry: 'Noto Sans JP'
            }
        }
    }
});

export default theme;
