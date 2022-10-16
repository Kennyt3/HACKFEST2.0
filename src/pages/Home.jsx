import {
  Flex,
  Box,
  Heading,
  Stack,
  Image,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";
import doctorNurses from "../assets/doctor-nurses-special-equipment 3.png";
import stethoscopeBg from "../assets/pexels-karolina-grabowska-4386464 1.png";
import s11 from "../assets/s1 1.png";
import s21 from "../assets/s2 1.png";
import s31 from "../assets/s3 1.png";
import s41 from "../assets/s4 1.png";
import s5 from "../assets/s5.png";
import maskimg from "../assets/maskimg.png";
// import Group114 from "../assets/Group114.png";
// import Group138 from "../assets/Group138.png";
// import Group137 from "../assets/Group137.png";
import ImageSlider from "../Components/ImageSlider"
import { SlideData } from "../Components/SlideData";


const Home = () => {
  return (
    <>
      <Stack p='10' h='fit-content' >
        <Flex w='full' h='full' align='center'>
          <Box
            w='full'
            fontSize='55px'
            lineHeight='87px'
            letterSpacing='1'
            px='7'>
            <Heading fontSize='inherit' fontWeight='700' lineHeight='inherit'>
              We Are Ready to
            </Heading>
            <Heading
              fontSize='inherit'
              fontWeight='700'
              lineHeight='inherit'
              color='#3981EF'>
              Help Your Health
            </Heading>
            <Heading fontSize='inherit' fontWeight='700' lineHeight='inherit'>
              Problems
            </Heading>
            <Text fontSize='24px' fontWeight='400' lineHeight='33px'>
              Reach out to professional practitioners for your health using
              Healthy me, saving you of time and cost.
            </Text>
            <HStack spacing='10' py='5'>
              <Box w='96px'>
                <Heading fontSize='40px'>
                  200<span style={{ color: "#306CC7" }}>+</span>
                </Heading>
                <Text fontSize='20px'>Active Doctors</Text>
              </Box>
              <Box w='96px'>
                <Heading fontSize='40px'>
                  15k
                  <span style={{ color: "#306CC7" }}>+</span>
                </Heading>
                <Text fontSize='20px'>Active Users</Text>
              </Box>
              <Box w='96px'>
                <Heading fontSize='40px'>
                  50<span style={{ color: "#306CC7" }}>+</span>
                </Heading>
                <Text fontSize='20px'>Active Pharmacy</Text>
              </Box>
            </HStack>
          </Box>
          <Box w='full' position='relative'>
            <Image src={stethoscopeBg} />
            <Box position='absolute' top='0' left='14'>
              <Image src={doctorNurses} />
            </Box>
          </Box>
        </Flex>
        {/* partners */}
        <Flex w='full' justify='space-between' px='5' pt='10'>
          <Image src={s11} />
          <Image src={s21} />
          <Image src={s31} />
          <Image src={s41} />
          <Image src={s5} />
        </Flex>
        <Flex w='full' h='full' >            
            <Box w='full' position='relative' mr='30px' mt='20px'>
            <Image  src={maskimg} />
            </Box>
            <Box flexDirection='column'>
              <Box
              w='fitcontent'
              fontSize='64px'
              lineHeight='87px'
              letterSpacing='1px'
              fontWeight='700'
              mt='20px'
              color='rgba(23, 32, 72, 1)'             
              >
                <Heading fontSize='inherit'
                lineHeight='inherit'
                letterSpacing='inherit' fontWeight='700' color='inherit'>Access quality </Heading>
                <Heading fontSize='inherit'
                lineHeight='inherit'
                letterSpacing='inherit' fontWeight='700' color='inherit'> healthcare within </Heading>
                <Heading fontSize='inherit'
                lineHeight='inherit'
                letterSpacing='inherit' fontWeight='700' color='inherit'>minutes</Heading>
              </Box>
              <Box 
              w='fitcontent'
              fontSize='24px'
              fontWeight='400'
              lineHeight='33px'
              letterSpacing='1px'
              mt='64px'
              color='rgba(51, 51, 51, 1)'>
                <Text
                fontSize='inherit'
                lineHeight='inherit'
                letterSpacing='inherit'
                fontWeight='400' color='inherit'>
                  We know time is of the essence and with Healthyme you can see a doctor within 20 minutes. 
                </Text> <br />
                <Text 
                fontSize='inherit'
                lineHeight='inherit'
                letterSpacing='inherit'
                fontWeight='400' color='inherit'>
                  Your notes, prescriptions and test requests are available after the consultation... and you can ask questions after the consultation for free!
                </Text>
              </Box>
            </Box>
        </Flex>
        <Box>
          <Box 
          mt='40px'
          fontSize='40px'
          lineHeight='54px'
          letterSpacing='1px'
          fontWeight='700'
          
          textAlign='center'
          
          >
            <Heading fontSize='inherit'
            fontWeight='700'
            lineHeight='inherit'
            letterSpacing='inherit' color='rgba(23, 32, 72, 1)'>
              Our <span style={{ color: "rgba(57, 129, 239, 1)" }}>Main Services</span>
            </Heading>
            <Heading
            fontSize='inherit'
            fontWeight='700'
            lineHeight='inherit'
            letterSpacing='inherit' color='rgba(23, 32, 72, 1)'>Categories</Heading>
          </Box>
          
          {/* <Box>
            
              <Box>
              
                <Box>
                  <Link href="#">
                  <Image src={Group114}>
                  </Image>
                  </Link>
                </Box>
              </Box>
              <Box>
              
                <Box>
                  <Link href="#">
                  <Image src={Group138}>
                  </Image>
                  </Link>
                </Box>
              </Box>
              <Box>
                
                <Box>
                  <Link href="#">
                  <Image src={Group137}>
                  </Image>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box> */}
              {/* <span onMouseOver={{bg:"blue"}} o style={{color: "black", width:"15px", height:"15px", cursor:"pointer", margin:"0 2px", display:"inline-block", background:"#bbb",  borderRadius:"50%" }}></span>
              <span onMouseOver={{bg:"blue"}} o style={{color: "black", width:"15px", height:"15px", cursor:"pointer", margin:"0 2px", display:"inline-block", background:"#bbb",  borderRadius:"50%" }}></span>
              <span onMouseOver={{bg:"blue"}} o style={{color: "black", width:"15px", height:"15px", cursor:"pointer", margin:"0 2px", display:"inline-block", background:"#bbb",  borderRadius:"50%" }}></span>
              <span onMouseOver={{bg:"blue"}}   style={{color: "black", width:"15px", height:"15px", cursor:"pointer", margin:"0 2px", display:"inline-block", background:"#bbb",  borderRadius:"50%" }}></span>
              <span onMouseOver={{bg:"blue"}} o style={{color: "black", width:"15px", height:"15px", cursor:"pointer", margin:"0 2px", display:"inline-block", background:"#bbb",  borderRadius:"50%" }}></span> */}
            {/* </Box> */}
            <Box w="100%" h='1000px' p={4} color="white" bg='blue'>
            <ImageSlider w='full'h='full' bg='red' slides={SlideData} />
            </Box>
          </Box>
      </Stack>
    </>
  );
};

export default Home;
