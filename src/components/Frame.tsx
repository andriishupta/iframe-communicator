import { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Input
} from '@chakra-ui/react';

const Frame = ({ url, isExample }: { url: string, isExample: boolean }) => {
  const [type, setType] = useState(isExample ? 'message-from-parent' : '');
  const [message, setMessage] = useState(isExample ? 'example-payload-message' : '');

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  // @ts-ignore: contentWindow typings
  const sendPayload = () => document.getElementById('frame')!.contentWindow.postMessage({
    type,
    message
  }, url);

  return (
    <>
      <HStack>
        <Input
          value={type}
          onChange={handleTypeChange}
          placeholder="type"
          size="sm"
          rounded={'full'}
        />
        <Input
          value={message}
          onChange={handleMessageChange}
          placeholder="message"
          size="sm"
          rounded={'full'}
        />
      </HStack>
      <Button
        style={{ marginTop: '12px' }}
        colorScheme={'green'}
        bg={'green.400'}
        rounded={'full'}
        px={6}
        _hover={{
          bg: 'green.500',
        }}
        onClick={sendPayload}
      >
        Send payload
      </Button>
      <iframe id="frame" src={url} width={'700px'} height={'400px'}/>
    </>
  );
};

export default Frame;
