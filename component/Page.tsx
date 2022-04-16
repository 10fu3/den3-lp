import {Box, Button, Center, chakra, Divider, Flex, Spacer} from "@chakra-ui/react";
import React from "react";

const Page:React.FC<{children:React.ReactNode}> = (props)=>{
    return <Box id="top" w="full" fontFamily="'Noto Sans JP', sans-serif;">
        <Box zIndex="100" bgColor="white" position="sticky" top={0} w="full">
            <Flex pr="16px" pl="16px" w="full">
                <Box pt="16px" pb="16px">
                    <Center>
                        <chakra.img h={["30px","56px"]} w="auto" src="den3.PNG"/>
                        <chakra.p pl={4} fontWeight="500" fontSize={["20px","20px","24px"]}>
                            電子計算機研究会
                        </chakra.p>
                    </Center>

                </Box>
                <Spacer/>
                <Center>
                    <a target="_blank" rel="noreferrer" href="http://den3.net">
                        <Button colorScheme="blue">
                            公式HPへ
                        </Button>
                    </a>
                </Center>
            </Flex>
            <Divider w="full"/>
        </Box>
        <Box pt="0px">
            {props.children}
        </Box>
    </Box>
}

export default Page