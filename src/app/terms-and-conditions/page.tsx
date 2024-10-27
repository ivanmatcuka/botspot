import { Box, Typography } from '@mui/material';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TERMS AND CONDITIONS – botspot',
};

export default function TermsAndConditions() {
  return (
    <main className="">
      <Box
        maxWidth={802}
        mx="auto"
        my={{ xs: 15, md: 20 }}
        px={3}
        textAlign={{ xs: 'center', md: 'left' }}
      >
        <Typography component="h1" lineHeight={1.2} mb={10} variant="h2">
          Terms and conditions
        </Typography>
        <Typography
          component="h2"
          fontWeight={300}
          lineHeight={1.2}
          variant="h3"
        >
          General Terms and Conditions of Sale for Use Vis-a-Vis Entrepreneurs
        </Typography>
        <Typography component="p" lineHeight={1.2} my={6} variant="h4">
          1. Scope, General Terms and Conditions of the Buyer or a Third Party
        </Typography>
        <Typography
          component="p"
          fontWeight={300}
          lineHeight={1.4}
          variant="body1"
        >
          (1) All deliveries, services and offers (including the delivery of
          goods, rights and licenses or the production of tangible or intangible
          works, collectively hereinafter also referred to as the “delivery
          item”) of botspot 3D Scan GmbH (hereinafter also referred to as the
          “Seller”) are based on these General Terms and Conditions of Sale.
          These are an integral part of all contracts which the Seller concludes
          with his contractual partners (hereinafter also referred to as
          “Buyer”) for the deliveries or services offered by him. They shall
          also apply to all future deliveries and services of the Seller to the
          Buyer, even if they are not separately agreed upon again.
        </Typography>
        <Typography
          component="p"
          fontWeight={300}
          lineHeight={1.4}
          variant="body1"
        >
          (2) Deviating, conflicting or supplementary terms and conditions of
          the Buyer or third parties shall not apply, even if the Seller does
          not separately object to their validity in individual cases. Even if
          the Seller refers to a letter that contains or refers to the terms and
          conditions of the Buyer or a third party, this shall not constitute an
          agreement to the validity of those terms and conditions.
        </Typography>
      </Box>
    </main>
  );
}
