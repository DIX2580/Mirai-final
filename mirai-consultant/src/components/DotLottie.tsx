import React from 'react';

type DotLottieProps = React.HTMLAttributes<HTMLElement> & {
  src?: string;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number | string;
  background?: string;
  controls?: boolean;
};

export default function DotLottie(props: DotLottieProps) {
  // Create the custom element via React without relying on JSX typing for IntrinsicElements
  return React.createElement('dotlottie-wc' as unknown as keyof JSX.IntrinsicElements, props);
}
