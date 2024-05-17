import LogoProjeto from "../../assets/logoProjeto.png";
import Image from "next/image";
import React, { FormEvent, useRef } from 'react';
import { Box, Input, FormLabel, FormControl, Button } from '@chakra-ui/react';

interface SignUpFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  register: (name: string) => (arg: any) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ handleSubmit, register }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const formEvent = new Event('submit', { bubbles: true, cancelable: true }) as unknown as FormEvent<HTMLFormElement>;
    handleSubmit(formEvent);
  };

  return (
    <Box className="flex flex-column items-center justify-center py-52 ">
      <Box className="shadow-2xl ">
        <Box className="bgRegister flex flex-col justify-center items-center">
          <Image src={LogoProjeto} alt="ChecolistoLogo" />
        </Box>
        <Box className="flex flex-col justify-center items-center w-full bg-neutral-50 ">
          <FormControl as="form" className="flex flex-col justify-center items-center" ref={formRef}>
            <Button className="mt-6" colorScheme='blue' type="submit" onClick={onClickHandler}>Entrar</Button>
            <Button className="mt-6" colorScheme='blue' type="submit" onClick={onClickHandler}>Cadastrar</Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
