import { Navbar } from "@/components/pages/landing";
import LogIn from "@/components/pages/forms/LoginForm";

export default function Login(){
    return(
        <>
            <Navbar itShow={false} />
            <LogIn />
        </>
    
    )


}