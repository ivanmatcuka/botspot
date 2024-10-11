import { FeedbackForm } from '../components/FeedbackForm/FeedbackForm';

import { Box } from '@mui/material';

export default function ContactUs() {
  return (
    <Box
      className="flex flex-1 items-center"
      maxWidth="xl"
      mt={8}
      mb={10}
      mx="auto"
    >
      <FeedbackForm frameless />
    </Box>
  );
}
