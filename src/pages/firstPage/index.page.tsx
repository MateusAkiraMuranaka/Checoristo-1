import LogoProjeto from "../../assets/logoProjeto.png";
import Image from "next/image";
import Link from 'next/link';
import React, { FormEvent, useRef } from 'react';
import { Box, Input, FormLabel, FormControl, Button } from '@chakra-ui/react';

export default function FirstPage(){
  return (
    <Box className="flex flex-column items-center justify-center py-52 ">
      <Box className="shadow-2xl ">
        <Box className="bg-white flex flex-col justify-center items-center">
          <Image src={LogoProjeto} alt="ChecolistoLogo" />
        </Box>
        <Box className="flex flex-col justify-center items-center w-full bg-neutral-50 ">
          <FormControl as="form" className="flex flex-col justify-center items-center">
            <Link href="/login">
              <Button className="mt-6" colorScheme='blue' type="submit" >Entrar</Button>
            </Link>
            <Link href="/">
              <Button className="mt-6 mb-10" colorScheme='blue' type="submit" >Cadastrar</Button>
            </Link>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

