import { FC } from 'react';

import Image, { ImageProps } from 'next/image';
import { Link } from '@chakra-ui/react';

const LinkIcon: FC<{ href: string } & ImageProps> = (props) => {
  const { href, ...rest } = props;
  return (
    <Link style={{ display: 'flex' }} href={href} target={'_blank'} rel="noreferrer">
      <Image width={'24px'} height={'24px'} {...rest} />
    </Link>
  );
};

export default LinkIcon;
