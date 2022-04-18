import {
    Box,
    Button,
    Center,
    chakra,
    Divider,
    Flex, Spacer,
} from "@chakra-ui/react";
import {NextPage} from "next";
import Page from "../component/Page";
import React, {useEffect, useState} from "react";
import { Link as Scroll } from 'react-scroll';
import Head from "next/head";

interface CircleInfo {
    zoom_info: string,
    zoom_url: string,
    face_to_face: string,
    new_info: string|null,
    normal_active_schedule?: string,
    normal_active_place?: string,
}

const Home:NextPage = ()=>{

    const [circleInfo,setCircleInfo] = useState<null|CircleInfo>(null);

    useEffect(()=>{
        (async ()=>{
            try{
                const data:CircleInfo = await (await fetch("https://10fu3.github.io/den3welcomepageapi/api.json")).json()
                setCircleInfo(data)
            }catch (e){
                setCircleInfo(null)
            }
        })()
    },[])

    return <Page>
        <Head>
            <title>den3 新歓ページ</title>
            <link rel="icon" href="http://den3.net/wp-content/themes/den3HP/set/image/icon.png"/>
            <meta property="twitter:title" content="den3 新歓サイト"/>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="sit_densan" />
            <meta name="twitter:title" content="den3 新歓サイト" />
            <meta name="twitter:description" content="芝浦工業大学公認サークル電子計算機研究会の新歓サイトです" />
            <meta name="twitter:image" content="http://den3.net/wp-content/themes/den3HP/set/image/icon.png" />
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="den3 新歓サイト"/>
            <meta property="og:url" content="https://welcome-den3.netlify.app/"/>
            <meta property="og:image" content="http://den3.net/wp-content/themes/den3HP/set/image/icon.png"/>
            <meta name="description" content="芝浦工業大学公認サークル電子計算機研究会の新歓サイトです"/>
        </Head>
        <FirstContent/>
        <SecondContent circleInfo={circleInfo}/>
        <ThirdContent circleInfo={circleInfo}/>
        <ForthContent/>
        <Box>
            <chakra.p textAlign="center" pt={2} pb={2}>©電子計算機研究会 All Rights Reserved. {new Date().getFullYear()}</chakra.p>
        </Box>
        <Scroll smooth={true} to="top">
            <Box
                fontWeight="bold"
                zIndex="100"
                position="fixed" bottom="100px" right="28px" pt={3} pb={3} pl={3} pr={3} borderWidth="5px" bgColor="white" borderRadius="10px">
                上へ戻る
            </Box>
        </Scroll>
    </Page>
}

const FirstContent = ()=>{
    return <section>
        <Center pt={[0,0,10]} pb={[0,0,4]}>
            <Center maxW="800px" flexWrap="wrap-reverse">
                <Box w={["100%","100%","50%"]} pt={8} pb={8}>
                    <Box pb={8} fontSize="30px">
                        <Center>プログラミングを楽しむ</Center>
                        <Center>仲間に</Center>
                        <Center>あなたもなりませんか?</Center>
                    </Box>
                    <Flex justifyContent="center" p={8} flexWrap="wrap">
                        <chakra.p>
                            電子計算機研究会は
                        </chakra.p>
                        <chakra.p>
                            情報系の技術に興味を持った
                        </chakra.p>
                        <chakra.p>
                            芝浦工業大学の学生が運営する
                        </chakra.p>
                        <chakra.p>
                            大学公認サークルです
                        </chakra.p>
                    </Flex>
                    <Center pt={8}>
                        <a target="_blank" rel="noreferrer" href="http://den3.net">
                            <Button color="blue.500">
                                公式HPへ
                            </Button>
                        </a>
                    </Center>
                    <Center pt={2}>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/sit_densan">
                            <Button colorScheme="blue">
                                公式Twitterへ
                            </Button>
                        </a>
                    </Center>
                </Box>
                <Center w={["100%","100%","50%"]} pl={[0,0,"100px"]}>
                    <chakra.img w={["40%","50%","100%"]} maxW={["300px","300px","100%"]} h="auto" src="human.png"/>
                </Center>
            </Center>
        </Center>
    </section>
}

const SecondContent:React.FC<{circleInfo:CircleInfo|null}> = (props)=>{
    return <Center pt={[0,0,10]}>
        <Box w="100%" maxW="800px" borderRadius={["0px","0px","40px"]} pt={[4,4,8]} pb={[4,4,8]} borderWidth={["0px","0px","2px"]}>
            <Center>
                <chakra.p fontSize="30px">
                    コンタクト
                </chakra.p>
            </Center>
            {
                props.circleInfo ? <Box>
                    <Box pt={[4,4,8]}>
                        <chakra.p textAlign="center">
                            対面あるいはZoomで部員とコンタクトできます
                        </chakra.p>
                        <chakra.p textAlign="center">
                            ぜひご参加ください
                        </chakra.p>
                    </Box>
                    <Center p={[4,4,8]}>
                        <Box w="400px">
                            <Box pt={2} pb={4} fontSize="16px">
                                <Flex>
                                    <Center>
                                        勧誘会の日程:
                                    </Center>
                                    <Spacer/>
                                    <Box>
                                        {
                                            props.circleInfo.face_to_face.split(",").map(i=>{
                                                return <Box key={i}>
                                                    {i}
                                                </Box>
                                            })
                                        }
                                    </Box>
                                </Flex>
                            </Box>
                            <Divider/>
                            <Box pt={4} pb={4} fontSize="16px">
                                <Flex>
                                    <Center>
                                        Zoom説明会の日程:
                                    </Center>
                                    <Spacer/>
                                    <Box>
                                        {
                                            props.circleInfo.zoom_info.split(",").map(i=>{
                                                return <Box key={i}>
                                                    {i}
                                                </Box>
                                            })
                                        }
                                    </Box>
                                </Flex>
                            </Box>
                            <Divider/>
                            <Box pt={4} pb={2} fontSize="16px">
                                <Flex>
                                    <Box>
                                        Zoom説明会のリンク:
                                    </Box>
                                    <Spacer/>
                                    <Box>
                                        <div dangerouslySetInnerHTML={{__html:props.circleInfo.zoom_url}}/>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Center>
                </Box>: <Box>
                    <Center pt={4}>
                        情報取得中...
                    </Center>
                </Box>
            }
        </Box>
    </Center>
}

const ThirdContent:React.FC<{circleInfo:CircleInfo|null}> = (props)=>{
    return <Box pb={[8,8,20]}>
        {
            !!props.circleInfo && props.circleInfo.new_info != null ? <Center pt={[0,0,10]}>
                <Box w="100%" maxW="800px" borderRadius={["0px","0px","40px"]} pt={[4,4,8]} pb={[4,4,8]} borderWidth={["0px","0px","2px"]}>
                    <Center>
                        <chakra.p fontSize="30px">
                            お知らせ
                        </chakra.p>
                    </Center>
                    <Box>
                        <Box pt={[4,4,8]}>
                            <chakra.p textAlign="center">
                                {props.circleInfo.new_info}
                            </chakra.p>
                        </Box>
                    </Box>
                </Box>
            </Center> : <></>
        }
    </Box>
}

const ForthContent = ()=>{
    return <Box pt={[8,8,10]} pb={[8,8,10]} bgColor="blue.500">
        <Center>
            <Flex justifyContent="center" flexWrap="wrap" pb={4} color="white" fontSize="30px">
                <Box>次の活動をしている</Box>
                <Box>部員がいます</Box>
            </Flex>
        </Center>
        <Center w="full">
            <Flex w="100%" maxW="800px" p={8} display={["block","block","flex"]} justifyContent="center" flexWrap="wrap">
                <SkillDisplayCell title={'競技プログラミング'} icon={'programming-icon.png'}/>
                <SkillDisplayCell title={'IoT制作'} icon={'iot.png'}/>
                <SkillDisplayCell title={'機械学習研究'} icon={'ai.png'}/>
                <SkillDisplayCell title={'ゲーム制作'} icon={'game-icon.png'}/>
                <SkillDisplayCell title={'Webアプリ制作'} icon={'web-site.png'}/>
            </Flex>
        </Center>
    </Box>
}

const SkillDisplayCell:React.FC<{
    title: string,
    icon: string,
}> = (props)=>{
    return <Box p={[2,2,4]}>
        <Box display={["flex","flex","block"]} borderWidth="1px" borderColor="white" borderRadius="20px" w={["100%","100%","200px"]} h={["","","250px"]}>
            <Center p={[4,4,10]}>
                <chakra.img w={["64px","64px","full"]} h={["64px","64px","full"]} src={props.icon}/>
            </Center>
            <Center>
                <chakra.p fontWeight="500" color="white" textAlign="center">{props.title}</chakra.p>
            </Center>
        </Box>
    </Box>
}

export default Home