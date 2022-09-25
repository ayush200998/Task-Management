import React from 'react';
import Image from 'next/image';
import Logo from '../public/task_management_icon.png';
import styles from '../styles/Home.module.css';
// Chakra UI Components
import { Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.icon_container}>
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
      </div>
    </div>
  );
};

export default Navbar;
