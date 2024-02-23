<<<<<<< HEAD
import { Stack, Link, Typography } from '@mui/material';

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
      <Link href='#' variant='body2'>
        Link
      </Link>
      <Typography variant='h6'>
        <Link href='#' color='secondary' underline='none'>
          Secondary
        </Link>
      </Typography>
=======
import { Stack, Link } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#">Link</Link>
>>>>>>> c9eea9e88a14d9576856969141ebf23ac2e7105d
    </Stack>
  );
};
