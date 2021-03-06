import {
  Flex,
  Spacer
} from '@chakra-ui/react';

import LinkIcon from './LinkIcon';

import HashnodeIcon from '../../public/icons/hashnode.png';
import MediumIcon from '../../public/icons/medium.png';
import TwitterIcon from '../../public/icons/twitter.png';
import GithubIcon from '../../public/icons/github.png';

const Header = () => {
  return (
    <>
      <header>
        <Flex
          height={'48px'}
          boxShadow={'0px 2px 6px 0px rgba(160,174,192,0.75)'}
          px={2}
        >
          <Flex alignItems={'center'}>
            <Flex marginX={2}>
              <LinkIcon
                href={'https://andriishupta.dev/cross-origin-iframe-communication-with-window-post-message'}
                src={HashnodeIcon}
                alt={'hashnode article'}
              />
            </Flex>
            <Flex marginX={2}>
              <LinkIcon
                href={'https://andriishupta.medium.com/cross-origin-iframe-communication-with-window-postmessage-5b8648bbdff0'}
                src={MediumIcon}
                alt={'medium article'}
              />
            </Flex>
          </Flex>
          <Spacer/>
          <Flex alignItems={'center'}>
            <Flex marginX={2}>
              <LinkIcon
                href={'https://twitter.com/share?text=Check out "Cross-Origin iframe communicator" by @andriishupta&url=https://iframe-communicator.vercel.app'}
                src={TwitterIcon}
                alt={'twitter share'}
              />
            </Flex>
            <Flex marginX={2}>
              <LinkIcon
                href={'https://github.com/andriishupta/iframe-communicator'}
                src={GithubIcon}
                alt={'github repository'}
              />
            </Flex>
          </Flex>
        </Flex>
      </header>
    </>
  );
};

export default Header;
