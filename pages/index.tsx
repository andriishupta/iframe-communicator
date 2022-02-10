import Head from 'next/head';
import Image from 'next/image';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

import Frame from '../src/components/Frame';

export default function Home() {
  const [frameUrl, setFrameUrl] = useState('');
  const [isExample, setIsExample] = useState(false);
  const [frameEnabled, setFrameEnabled] = useState(false);

  const handleFrameUrlChange = (event: any) => {
    setFrameUrl(event.target.value);
    setFrameEnabled(false);
    setIsExample(false);
  };

  const generateFrame = () => {
    setFrameEnabled(true);
  };

  const startExample = () => {
    setFrameUrl('https://poc-iframe-azure-ad-b2c-app2.vercel.app/post-message');
    setIsExample(true);
    generateFrame();
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>IFrame communicator POC</title>
      </Head>

      <Container maxW={'5xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}>
            IFrame communicator <br/>
            <Text as={'span'} color={'green.400'}>
              POC
            </Text>
          </Heading>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            position={'relative'}>
            <InputGroup size="md">
              <Input
                value={frameUrl}
                onChange={handleFrameUrlChange}
                placeholder="Enter iframe URL"
                pr='4.5rem'
                rounded={'full'}
              />
              <InputRightElement width="4.5rem" right={1}>
                <Button colorScheme={'red'} h='1.75rem' size='sm' onClick={() => handleFrameUrlChange({ target: { value: '' } })}>
                  Clear
                </Button>
              </InputRightElement>
            </InputGroup>
            <Box>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
                disabled={!frameUrl || frameEnabled}
                onClick={generateFrame}
              >
                Generate iframe
              </Button>
              <Button
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                mx={3}
                _hover={{
                  bg: 'green.500',
                }}
                disabled={!!frameUrl || frameEnabled}
                onClick={startExample}
              >
                or start from example
              </Button>
            </Box>
          </Stack>

          {
            frameEnabled
              ? <Frame url={frameUrl} isExample={isExample}/>
              : <>
                <Text color={'gray.500'}>
                  Enter URL to generate connection
                </Text>

              </>
          }
        </Stack>

        {!frameEnabled &&
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Image
              src="/empty.png"
              alt="waiting meme"
              width={640}
              height={363}
            />
          </Box>}
      </Container>
    </>
  );
}