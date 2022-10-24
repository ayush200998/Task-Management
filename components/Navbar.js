import React from 'react';
import Image from 'next/image';
import Logo from '../public/task_management_icon_3.jpg';
import styles from '../styles/Home.module.css';
// Chakra UI Components
import {
  Box, 
  Button,
  Heading,
} from '@chakra-ui/react';
// Constants
import {
  NAVBAR_VIEW
} from '../constants/constants';

const Navbar = (props) => {
  const { currentNavbarView } = props;
  
  const renderNavbarDetails = () => {
    switch(currentNavbarView) {
    case NAVBAR_VIEW.AUTHENTICATED:
      return (
        <Heading>
            Authenticated
        </Heading>
      );

    default:
      return null;
    }
  };

  return (
    <Box className={styles.navbar_wrapper}>
      <Box className={styles.icon_container}>
        <Image 
          src={Logo}
          alt='logo'
          objectFit='contain'
          width={40}
          height={40}
        />
        <Heading as='h2' size='md' style={{ marginLeft: '0.5rem' }}> 
            Task Manager
        </Heading>
      </Box>

      {renderNavbarDetails()}
    </Box>
  );
};

export default Navbar;
