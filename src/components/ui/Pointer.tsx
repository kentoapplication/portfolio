"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const Pointer: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [letterPosition, setLetterPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef(0);

  // マウス位置の追跡
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // スムーズな追従アニメーション
  useEffect(() => {
    if (!isVisible) return;

    const smoothFollow = () => {
      setLetterPosition((prev) => {
        // イージング関数: 現在位置と目標位置の差の一定割合だけ移動
        const easing = 0.1; // 数値が小さいほど、動きがゆっくりになる
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;

        return {
          x: prev.x + dx * easing,
          y: prev.y + dy * easing,
        };
      });

      animationFrameRef.current = requestAnimationFrame(smoothFollow);
    };

    animationFrameRef.current = requestAnimationFrame(smoothFollow);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isVisible]);

  return (
    <Box
      position="fixed"
      zIndex={2}
      pointerEvents="none"
      top={`${letterPosition.y}px`}
      left={`${letterPosition.x}px`}
      // transition="all .2s ease-out"
      marginLeft={-4}
      marginTop={-4}
    >
      P
    </Box>
  );
};
