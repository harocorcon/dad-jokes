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
        const {data, error} = await (await supabase).from('jokes').insert([
            {user_id: user.id, joke_text: joke}
        ])
        if(error) throw error;
        revalidatePath('/saved-jokes');
        return data;
    } catch(error){
        throw error;
    }
}

export async function deleteJoke(jokeId) {
    const supabase = createClient();
    const { data: userData } = await (await supabase).auth.getUser();

    if(!userData.user){
        throw Error('Must be an authenticated user to perform this action.')
    }

    try {
        const { data: jokesData, error } = await (await supabase)
            .from('jokes')
            .delete()
            .eq('id', jokeId)
            .eq('user_id', userData.user.id)

        if(error){
            console.error('Error deleting jokes', error);
            throw error;
        }
        revalidatePath('/saved-jokes')
        return jokesData;
    } catch(error){
        throw error
    }
}