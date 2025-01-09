import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Github, ExternalLink, Moon, Sun } from "lucide-react";
import { Provider } from "@/components/ui/provider";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import { Tag } from "@/components/ui/tag";

const Portfolio = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  //const { isOpen, onToggle } = useDisclosure();

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headerBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const gradientBg = useColorModeValue(
    "linear(to-r, blue.500, purple.600)",
    "linear(to-r, blue.700, purple.800)"
  );

  const projects = [
    {
      title: "プロジェクト1",
      description:
        "アプリの説明文をここに記載します。技術スタックや主な機能について説明します。",
      techStack: ["React Native", "Firebase", "TypeScript"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.example.com",
      image: "/api/placeholder/400/250",
    },
    {
      title: "プロジェクト2",
      description:
        "別のアプリケーションの説明。ユーザーに提供する価値や解決する課題について説明します。",
      techStack: ["Flutter", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.example.com",
      image: "/api/placeholder/400/250",
    },
  ];

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* ヘッダー */}
      <Box
        as="header"
        position="fixed"
        w="full"
        bg={headerBg}
        boxShadow="sm"
        zIndex={50}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" h={16}>
            <Heading as="h1" size="lg">
              Your Name
            </Heading>

            <HStack gap={4}>
              {/* カラーモード切替ボタン */}
              <IconButton
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="Toggle color mode"
              >
                {colorMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </IconButton>

              {/* モバイルメニューボタン */}
              {/* <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onToggle}
                icon={isOpen ? <X size={24} /> : <Menu size={24} />}
                variant="ghost"
                aria-label="Toggle navigation"
              /> */}

              {/* デスクトップナビゲーション */}
              <HStack gap={8} display={{ base: "none", md: "flex" }}>
                <Link
                  href="#projects"
                  color={textColor}
                  _hover={{ color: headingColor }}
                >
                  Projects
                </Link>
                <Link
                  href="#about"
                  color={textColor}
                  _hover={{ color: headingColor }}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  color={textColor}
                  _hover={{ color: headingColor }}
                >
                  Contact
                </Link>
              </HStack>
            </HStack>
          </Flex>
        </Container>

        {/* モバイルメニュー */}
        {/* <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }} borderTopWidth="1px">
            <Stack as="nav" spacing={4} px={4}>
              <Link href="#projects" color={textColor}>
                Projects
              </Link>
              <Link href="#about" color={textColor}>
                About
              </Link>
              <Link href="#contact" color={textColor}>
                Contact
              </Link>
            </Stack>
          </Box>
        </Collapse> */}
      </Box>

      {/* メインコンテンツ */}
      <Box as="main" pt={16}>
        {/* ヒーローセクション */}
        <Box bgGradient={gradientBg} color="white" py={24}>
          <Container maxW="container.xl" textAlign="center">
            <Heading as="h2" size="2xl" mb={6} fontWeight="bold">
              App Developer Portfolio
            </Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }} maxW="2xl" mx="auto">
              モバイルアプリケーション開発者として、革新的なソリューションを提供しています。
            </Text>
          </Container>
        </Box>

        {/* プロジェクトセクション */}
        <Box id="projects" py={16} bg={cardBg}>
          <Container maxW="container.xl">
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              mb={12}
              color={headingColor}
            >
              Projects
            </Heading>
            <Grid
              templateColumns={{ base: "1px", md: "repeat(2, 1fr)" }}
              gap={8}
            >
              {projects.map((project, index) => (
                <Box
                  key={index}
                  bg={cardBg}
                  rounded="lg"
                  shadow="lg"
                  overflow="hidden"
                  transition="transform 0.3s"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    objectFit="cover"
                    h={48}
                    w="full"
                  />
                  <Box p={6}>
                    <Heading as="h3" size="lg" mb={2} color={headingColor}>
                      {project.title}
                    </Heading>
                    <Text color={textColor} mb={4}>
                      {project.description}
                    </Text>
                    <Stack direction="row" gap={2} mb={4} wrap="wrap">
                      {project.techStack.map((tech, techIndex) => (
                        <Tag
                          key={techIndex}
                          size="md"
                          variant="subtle"
                          colorScheme="blue"
                        >
                          {tech}
                        </Tag>
                      ))}
                    </Stack>
                    <Stack direction="row" gap={4}>
                      <Link
                        href={project.githubUrl}
                        display="inline-flex"
                        alignItems="center"
                        color={textColor}
                        _hover={{ color: headingColor }}
                      >
                        <Github size={20} />
                        <Text ml={2}>GitHub</Text>
                      </Link>
                      <Link
                        href={project.liveUrl}
                        display="inline-flex"
                        alignItems="center"
                        color={textColor}
                        _hover={{ color: headingColor }}
                      >
                        <ExternalLink size={20} />
                        <Text ml={2}>Live Demo</Text>
                      </Link>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Aboutセクション */}
        <Box id="about" py={16} bg={bgColor}>
          <Container maxW="container.xl">
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              mb={12}
              color={headingColor}
            >
              About Me
            </Heading>
            <VStack gap={6} maxW="3xl" mx="auto" color={textColor}>
              <Text>
                私はモバイルアプリケーション開発者として、ユーザーフレンドリーで革新的なアプリケーションの開発に情熱を注いでいます。
                最新の技術トレンドとベストプラクティスを常に追求し、品質の高いソリューションを提供することを心がけています。
              </Text>
              <Text>
                得意な技術スタック： React
                Native、Flutter、Firebase、Node.js、TypeScript
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Contactセクション */}
        <Box id="contact" py={16} bg={cardBg}>
          <Container maxW="container.xl">
            <Heading
              as="h2"
              size="xl"
              textAlign="center"
              mb={12}
              color={headingColor}
            >
              Contact
            </Heading>
            <Flex justify="center">
              <Link
                href="https://github.com/yourusername"
                color={textColor}
                _hover={{ color: headingColor }}
              >
                <Github size={32} />
              </Link>
            </Flex>
          </Container>
        </Box>
      </Box>

      {/* フッター */}
      <Box as="footer" bg="gray.800" color="white" py={8}>
        <Container maxW="container.xl" textAlign="center">
          <Text>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default function Home() {
  return (
    <Provider>
      <Portfolio />
    </Provider>
  );
}
