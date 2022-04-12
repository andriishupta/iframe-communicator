import {
  useEffect,
  useRef,
  useState
} from 'react';
import {
  Box,
  Button,
  Input,
  Textarea
} from '@chakra-ui/react';

const Frame = ({ url }: { url: string }) => {
  const [message, setMessage] = useState<string>('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, JSON.stringify(message)]);
    textareaRef.current!.scrollTop = textareaRef.current!.scrollHeight
  };

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      const frameOrigin = new URL(url).origin;
      if (event.origin !== frameOrigin) {
        return;
      }

      const message = event.data;
      addMessage(message);
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [url]);

  const postMessage = () => {
    let parsedMessage;
    try {
      parsedMessage = JSON.parse(message);
    } catch (e) {
      parsedMessage = message;
    }
    iframeRef.current!.contentWindow!.postMessage(parsedMessage, url);
  };

  return (
    <>
      <Box display={'flex'} justifyContent={'space-evenly'} gap={3}>
        <Box display={'flex'} flexDirection={'column'} width={'100%'}>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={'enter text OR { "valid": "JSON" }'}
            size="sm"
            rounded={'full'}
          />
          <Button
            style={{ marginTop: '12px' }}
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            _hover={{
              bg: 'green.500',
            }}
            onClick={postMessage}
          >
            Post Message
          </Button>
        </Box>
        <Textarea
          ref={textareaRef}
          value={messages.join('\n')}
          isDisabled
          resize={'none'}
          placeholder="received messages"
        />
      </Box>

      <iframe
        ref={iframeRef}
        src={url}
        width={'100%'}
        height={'700px'}/>
    </>
  );
};

export default Frame;
