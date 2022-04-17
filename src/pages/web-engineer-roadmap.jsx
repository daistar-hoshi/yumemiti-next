import { CheckIcon, DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Heading, ListIcon, ListItem, Text } from "@chakra-ui/react";
import Footer from "src/components/organisms/layout/Footer";
import Header from "src/components/organisms/layout/Header";
import { RoadmapSection } from "src/components/organisms/layout/RoadmapSection";

export default function Home() {
  return (
    <div className="web-engineer-roadmap">
      <Header />
      <Box as="main">
        <Box as="section" bg={"white"}>
          <Heading
          as="h1"
          fontSize={"4xl"}
          align="center"
          pt={"15vh"}
          >
            Webエンジニア
            <br />
            ロードマップ
          </Heading>
          <Flex
          w={"fit-content"}
          m={"auto"}
          mb={5}
          >
            <Button
            w={"fit-content"}
            bgColor={"white"}
            borderWidth={2}
            borderColor={"gray.700"}
            rounded={"full"}
            _hover={{ opacity: 0.7 }}
            _focus={{ _focus: "none"}}
            >
              <DownloadIcon />
              Download
            </Button>
            <Button
                w={"fit-content"}
                ml={5}
                bgColor={"white"}
                borderWidth={2}
                borderColor={"gray.700"}
                rounded={"full"}
                _hover={{ opacity: 0.7 }}
                _focus={{ _focus: "none"}}
            >
              <ExternalLinkIcon />
              Link Copy
            </Button>
          </Flex>
          <Text
          w={"fit-content"}
          m={"auto"}
          p={5}
          bgColor={"rgb(250,250,250)"}
          >
            Yumemitiのロードマップでは
            <br />
            あなたがこの仕事を好きになるまでの道を
            <br />
            3段階でご案内いたします。
          </Text>
        </Box>

        <Box bg={"white"}>
            <Box h={50}></Box>
            <Divider w={"70%"} m={"auto"} variant={"dashed"} bg={"gray.500"}/>
            <Box h={50}></Box>
        </Box>

        <Box as={"section"} pb={100}>
          <Box w={"fit-content"} m={"auto"}>
            <Text 
            textAlign={"center"}
            fontFamily='Josefin Sans' sans-serif
            fontSize={"3xl"}
            color="#FFD966"
            py={50}
            >
              -start-
            </Text>
            <Text
            fontSize={"6xl"}
            fontWeight={"bold"}
            w="fit-content"
            m={"auto"}
            >
              Webの
              <br />
              仕組みを知ろう。
            </Text>
            <Box pb={5}>
              <Box 
              bg="gray.700"
              w={200}
              h={1}
              />
            </Box>
            </Box>
          <Box w={"fit-content"} m={"auto"} py={10}>
          <RoadmapSection title="What's Web?">
            <ListItem>
              <ListIcon as={CheckIcon} color={"#FFD966"}/>
              「クライアント｜サーバー」とは
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color={"#FFD966"} />
              「Request｜Response」とは
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color={"#FFD966"} />
              「フロントエンド｜バックエンド」とは
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color={"#FFD966"} />
              「HTML｜CSS｜JavaScript」でできることを知る
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color={"#FFD966"} />
              URL（ルーティング）のルールについて知る
            </ListItem>
          </RoadmapSection>
          </Box>
        </Box>

      </Box>
      <Footer />
    </div>
  )
}
