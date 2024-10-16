import Image from 'next/image';
import { FC } from 'react';

type PartnerLogoProps = {
  name: string;
};
export const PartnerLogo: FC<PartnerLogoProps> = ({ name }) => (
  <Image
    width={168}
    height={80}
    src={`/img/partners/${name}.png`}
    alt={name}
    className="object-contain flex-shrink-0"
  />
);
