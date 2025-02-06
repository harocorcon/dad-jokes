import Link from "next/link";
import { createClient } from "../utils/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function LoginOut() {
    const supabase = createClient();
    const { data } = await (await supabase).auth.getUser()

    if(data.user) {
        return ( 
            <div>
                <LogoutButton />
            </div>
        )
    }

    return ( 
        <div>
            <Link className="hover:to-blue-500" href="/login">
                Login
            </Link>
        </div>
    )

}