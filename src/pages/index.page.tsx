import { Inter } from "next/font/google";
import ClaimUsernameForm from "./register/register.page";
import Login from "./login/index.page";
import UserManagement from "./EditUser/edit.page";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (<>
   {/* <UserManagement/> */}
   <ClaimUsernameForm/>
  </>
  );
}