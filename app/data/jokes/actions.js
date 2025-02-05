'use server';

import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function saveJoke(joke) {
    const supabase = createClient();
    const { data } = await (await supabase).auth.getUser();
    const user = data.user;

    if(!user){
        throw Error('Must be an authenticated user to perform this action.')
    }
    try {
        const {dat, error} = await (await supabase).from('jokes').insert([
            {user_id: user.id, joke_text: joke}
        ])
        if(error) throw error;
        revalidatePath('/saved-jokes');
        return data;
    } catch(error){
        throw error;
    }
}