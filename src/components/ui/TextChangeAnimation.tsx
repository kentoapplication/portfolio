"use client";

import { Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { PropsWithChildren } from "react";

const textChange = keyframes`
0%, 100% {
  opacity: 0;
  width: 0;
  clip-path: inset(0 100% 0 0);
}
3% {
  opacity: 0.3;
  width: auto;
  clip-path: inset(0 90% 0 0);
}
15% {
  opacity: 1;
  width: auto;
  clip-path: inset(0 0 0 0);
}
35% {
  opacity: 1;
  width: auto;
  clip-path: inset(0 0 0 0);
}
47% {
  opacity: 0.3;
  width: auto;
  clip-path: inset(0 0 0 90%);
}
50% {
  opacity: 0;
  width: auto;
  clip-path: inset(0 0 0 100%);
}`;

type Props = {
  animationDelay: number;
};

export const TextChangeAnimation: React.FC<PropsWithChildren<Props>> = (
  props
) => {
  return (
    <Text
      animation={`${textChange} 9s infinite`}
      animationDelay={`${props.animationDelay}s`}
      position="absolute"
      fontSize={100}
      fontWeight="bold"
      opacity={0}
      overflow="hidden"
      whiteSpace="nowrap"
      width={0}
      left={"50%"}
      transform="translateX(-50%)"
    >
      {props.children}
    </Text>
  );
};
