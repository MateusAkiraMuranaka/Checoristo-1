import { Box, Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from '@chakra-ui/react';
import Link from 'next/link';
import Image from "next/image";
import LogoProjeto from "../../assets/logoProjeto.png";

export default function Login() {
    return (
        <Box className="max-h-full bg-neutral-500">
            <Box className="flex flex-column items-center justify-center py-52">
                <Box width={600} className="shadow-2xl">
                    <Box className="bg-white flex flex-col justify-center items-center">
                        <Image src={LogoProjeto} alt="ChecolistoLogo" />
                    </Box>
                    <Box className="flex flex-col justify-center items-center w-full bg-neutral-50">
                        <Box width={360} className="text-xl text-center text-defaultBlue font-bold"></Box>
                        <FormControl as="form" className="flex flex-col justify-center items-center">
                            
                            <FormLabel className="text-defaultBlue">Email</FormLabel>
                            <Input width={400} bg={"lightgrey"} className="rounded-sm" type='email' boxShadow='outline' rounded='md' />

                            <FormLabel className="mt-1 text-defaultBlue">Senha</FormLabel>
                            <Input width={400} bg={"lightgrey"} className="rounded-sm" type='password' boxShadow='outline' rounded='md' />
                            <Link href="/Home">
                                <Button className="mt-6 mb-10" colorScheme='blue' type="submit">Entrar</Button>
                            </Link>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
