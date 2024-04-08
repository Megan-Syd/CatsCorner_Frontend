import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Button, useColorMode,
  useColorModeValue, Input, Switch, Textarea, FormControl, FormLabel, Flex, InputGroup, InputLeftAddon, Heading} from '@chakra-ui/react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
    <Flex
      flexDirection="column"
      p={12}
      bg={formBackground}
      borderRadius={8}
      boxShadow="lg"
    >
    <form onSubmit={handleSubmit}>
      <Heading as="h2" mb={6} textAlign="center">Contact Us</Heading>
      <FormControl mb={10}>
        <FormLabel fontSize="xl">Your Name</FormLabel>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} fontSize="lg" />
      </FormControl>
      <FormControl mb={10}>
        <FormLabel fontSize="xl">Your Phone Number</FormLabel>
        <InputGroup>
          <InputLeftAddon children="+514" />
          <Input type='tel' name="phone" value={formData.phone} onChange={handleChange} fontSize="lg" />
        </InputGroup>
      </FormControl>
      <FormControl mb={10}>
        <FormLabel fontSize="xl">Your Email Address</FormLabel>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} fontSize="lg" />
      </FormControl>
      <FormControl mb={10}>
        <FormLabel fontSize="xl">Your Message</FormLabel>
        <Textarea variant='outline' name="message" value={formData.message} onChange={handleChange} fontSize="lg" />
      </FormControl>
      <Button type="submit" colorScheme="teal" mb={8}>Send Message</Button>
    </form>

    <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Dark Mode
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
    </Flex>
  </Flex>
  );
}

export default ContactForm;