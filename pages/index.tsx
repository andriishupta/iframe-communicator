import Head from 'next/head';
import Image from 'next/image';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import Frame from '../src/components/Frame';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export default function Home() {
  const [frameUrl, setFrameUrl] = useState('');
  const [frameEnabled, setFrameEnabled] = useState(false);

  const handleFrameUrlChange = (event: any) => {
    setFrameUrl(event.target.value);
    setFrameEnabled(false);
  };

  const generateFrame = () => {
    setFrameEnabled(true);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>🤖 The Communicator</title>
      </Head>

      <Header/>

      <Container maxW={'5xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}>
            🤖 The <br/>
            <Text as={'span'} color={'green.400'}>
              Communicator
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Tool for Cross-Origin iframe communication
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            position={'relative'}>
            <InputGroup size="md">
              <Input
                value={frameUrl}
                onChange={handleFrameUrlChange}
                placeholder="Enter valid URL with http(s) protocol"
                pr="4.5rem"
                rounded={'full'}
              />
              <InputRightElement width="4.5rem" right={1}>
                <Button colorScheme={'red'} h="1.75rem" size="sm" onClick={() => handleFrameUrlChange({ target: { value: '' } })}>
                  Clear
                </Button>
              </InputRightElement>
            </InputGroup>
            {!frameUrl || !frameEnabled && <Box>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
                disabled={!isValidHttpUrl(frameUrl)}
                onClick={generateFrame}
              >
                Generate iframe
              </Button>
            </Box>
            }
          </Stack>

          {
            frameEnabled &&
            <Frame url={frameUrl}/>
          }
        </Stack>

        {!frameEnabled &&
          <Box
            position={'absolute'}
            bottom={'42px'}
            right={'0px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Image
              src="/empty.png"
              alt="waiting meme"
              width={640}
              height={363}
            />
          </Box>
        }
      </Container>

      <Footer/>
    </>
  );
}

function isValidHttpUrl(string: string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
}