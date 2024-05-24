import { Box, Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react'
import LogoProjeto from "../../assets/logoProjeto.png";
import Image from "next/image";

export default function Login(){
    return(
        <Box className=" max-h-full bg-neutral-500">
            <Box className="flex flex-column items-center justify-center py-52 ">
                <Box width={600} className="shadow-2xl ">
                    <Box className="bgRegister flex flex-col justify-center items-center">
                    <Image src={LogoProjeto} alt="ChecolistoLogo" ></Image>
                    </Box>
                    <Box className="flex flex-col justify-center items-center w-full bg-neutral-50 ">
                        <Box width={360} className="text-xl text-center text-defaultBlue font-bold "></Box>
                        <FormControl as="form" className=" flex flex-col justify-center items-center">
                            <FormLabel className=" mt-1 text-defaultBlue">Nome</FormLabel>
                            <Input width={400} bg={"lightgrey"} className="rounded-sm " type='text' boxShadow='outline' rounded='md'/>

                            <FormLabel className=" text-defaultBlue ">Email</FormLabel>
                            <Input width={400} bg={"lightgrey"} className="rounded-sm " type='email' boxShadow='outline' rounded='md'/>

                            <FormLabel className=" mt-1 text-defaultBlue">Senha</FormLabel>
                            <Input width={400} bg={"lightgrey"} className="rounded-sm " type='password' boxShadow='outline' rounded='md'/>

                            <Button className="mt-6" colorScheme='blue' type="submit" >Cadastrar</Button>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}