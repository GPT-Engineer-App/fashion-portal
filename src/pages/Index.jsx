import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaShoppingCart, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <HStack justifyContent="space-between" mb={8}>
        <Heading as="h1" size="lg">
          Fashionista
        </Heading>
        <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
      </HStack>

      {/* Hero Section */}
      <Box mb={8} textAlign="center">
        <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWx8ZW58MHx8fHwxNzE3MjMxMzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fashion Model" borderRadius="md" mb={4} />
        <Heading as="h2" size="xl" mb={2}>
          Discover the Latest Trends
        </Heading>
        <Text fontSize="lg" mb={4}>
          Stay ahead of the fashion curve with our new arrivals.
        </Text>
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </Box>

      {/* Featured Products */}
      <VStack spacing={8} mb={8}>
        <Heading as="h3" size="lg">
          Featured Products
        </Heading>
        <HStack spacing={4}>
          <Box textAlign="center">
            <Image src="https://images.unsplash.com/photo-1695831440805-1b623520e70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcHJvZHVjdCUyMDF8ZW58MHx8fHwxNzE3MjMxMzUwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 1" borderRadius="md" mb={2} />
            <Text>Product 1</Text>
            <Text>$49.99</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcHJvZHVjdCUyMDJ8ZW58MHx8fHwxNzE3MjMxMzUxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 2" borderRadius="md" mb={2} />
            <Text>Product 2</Text>
            <Text>$59.99</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://images.unsplash.com/photo-1700853010051-dce31802dafc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcHJvZHVjdCUyMDN8ZW58MHx8fHwxNzE3MjMxMzUxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 3" borderRadius="md" mb={2} />
            <Text>Product 3</Text>
            <Text>$69.99</Text>
          </Box>
        </HStack>
      </VStack>

      {/* Footer */}
      <HStack justifyContent="space-between" mt={8} pt={4} borderTop="1px" borderColor="gray.200">
        <Text>&copy; 2023 Fashionista. All rights reserved.</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
        </HStack>
      </HStack>
    </Container>
  );
};

export default Index;
