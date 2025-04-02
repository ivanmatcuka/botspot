import Image from 'next/image';
import { FC } from 'react';

type PartnerLogoProps = {
  name: string;
};
export const PartnerLogo: FC<PartnerLogoProps> = ({ name }) => (
  <Image
    alt={name}
    className="object-contain flex-shrink-0"
    height={80}
    loading="lazy"
    src={`/img/partners/${name}.png`}
    width={168}
  />
);
