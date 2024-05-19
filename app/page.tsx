import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'link',
      label: 'Mint',
      target: 'https://mint.fun/base/<your contract address>',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/2024-a-base-odyssey.png`,
    aspectRatio: '1:1',
  },
});

export const metadata: Metadata = {
  title: 'Testing, testing :)',
  description: 'LFG',
  openGraph: {
    title: 'Testing, testing :)',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Testing, testing :)</h1>
    </>
  );
}
