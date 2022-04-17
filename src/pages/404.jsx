import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Divider, Heading, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

import Header from "src/components/organisms/layout/Header";
import error404 from "public/images/icon/error404.svg";
import { NavButton } from "src/components/atoms/button/NavButton";
import Footer from "src/components/organisms/layout/Footer";

export default function Home() {
  return (
    <div className="page404">
      <Header />
        <Box as={"main"}  py={85}>
          <Box w={"fit-content"} m={"auto"} p={10} bg={"white"} shadow={"md"}>
            <Image src={error404.src} boxSize={300} m={"auto"}/>
            <Box w={"fit-content"} m={"auto"}>
              <Heading as={"h1"} pb={4}>
                ページが見つかりません
              </Heading>
              <Divider w={"60%"} m={"auto"}/>
              <Text fontSize={"sm"} textAlign={"center"} p={4} color={"gray.500"}>
                URLが間違っている可能性があります。
                <br />
                お探しのページのボタンを押してください。
              </Text>
            </Box>
            <Divider />
            <Box as={"nav"} pt={4}>
              <List>
                <ListItem>
                  <NavButton>トップページ</NavButton>
                </ListItem>
                <ListItem>
                  <NavButton>診断</NavButton>
                </ListItem>
                <ListItem>
                  <Accordion allowToggle>
                    <AccordionItem borderStyle={"none"}>
                      <AccordionButton
                      bg={"white"}
                      borderWidth={1}
                      borderColor={"black"}
                      rounded={"md"}
                      my={2}
                      _hover={{ bg: "#6C63FF", color: "white", borderColor: "gray.500" }}
                      _focus={{ _focus: "none"}}
                      >
                        <Box 
                        fontWeight={"bold"}
                        m={"auto"}
                        >
                          ロードマップ｜エンジニア
                      </Box>
                      </AccordionButton>
                      <AccordionPanel>
                        <HStack>
                          <Divider orientation="vertical" h={"150px"} w={"fit-content"}/>
                          <Box flex={1}>
                            <NavButton>WEB</NavButton>
                            <NavButton>AI</NavButton>
                            <NavButton>App</NavButton>
                          </Box>
                        </HStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </ListItem>
                
                <ListItem>
                  <Accordion allowToggle>
                    <AccordionItem borderStyle={"none"}>
                      <AccordionButton
                      bg={"white"}
                      borderWidth={1}
                      borderColor={"black"}
                      rounded={"md"}
                      my={2}
                      _hover={{ bg: "#6C63FF", color: "white", borderColor: "gray.500" }}
                      _focus={{ _focus: "none"}}
                      >
                        <Box 
                        fontWeight={"bold"}
                        m={"auto"}
                        >
                          ロードマップ｜デザイナー
                        </Box>
                      </AccordionButton>
                      <AccordionPanel>
                      <HStack>
                        <Divider orientation="vertical" h={"100px"} w={"fit-content"}/>
                          <Box flex={1}>
                            <NavButton>WEB(UI)</NavButton>
                            <NavButton>UX</NavButton>
                          </Box>
                        </HStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
        <Footer />
    </div>
  )
}
