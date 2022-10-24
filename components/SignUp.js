import { useState } from 'react';
import get from 'lodash/get';
import styles from '../styles/Home.module.css';
// Chakra UI Components
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack
} from '@chakra-ui/react';
// Custom components
import Card from './Card';
// Utils
import AuthUtils from '../utils/auth_utils';

const SignUp = () => {
  const [formData, setFormData] = useState(null);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleOnSignUpClick = () => {
    const payload = {...formData};

    /* TODO: Check the validation for input data and email address */

    /* Calls the signup API */
    AuthUtils.handleUserSignUp(payload);
  };

  return (
    <Box className={styles.signup_form_wrapper}>
      <Card>
        <FormControl isRequired>
          <Stack spacing={2}>
            <Box style={{ marginBottom: '1rem' }}>
              <FormLabel>
                Email Address:
              </FormLabel>

              <Input
                name='email'
                type='email'
                variant='outline'
                placeholder='user@mail.com'
                value={get(formData, ['email'], '')}
                onChange={handleOnChange}
              />
            </Box>

            <Box>
              <FormLabel>
                Password:
              </FormLabel>

              <Input
                name='password'
                type='password'
                placeholder='*********'
                variant='outline'
                value={get(formData, ['password'], '')}
                onChange={handleOnChange}
              />

              <FormHelperText ml='0.25rem' color='gray.400'>
                should contain 8 or more characters
              </FormHelperText>
            </Box>
          </Stack>
        </FormControl>

        <Button colorScheme='teal' size='lg' onClick={handleOnSignUpClick}>
          Sign up
        </Button>
      </Card>
    </Box>
  );
};

export default SignUp;
