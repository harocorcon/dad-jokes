'use client';

import { useEffect, useState } from "react";
import { saveJoke } from "../data/jokes/actions";

export default function JokeFetcher({user}) {
    const [joke, setJoke] = useState('')

    const fetchJoke = async () => {
        const response = await fetch('https://icanhazdadjoke.com', {
            headers: {
                Accept: 'application/json'
            }
        })
        const data = await response.json()
        setJoke(data.joke)
    }

    useEffect(() => {
        fetchJoke();
    }, []);

    const saveJokeText = user? 'Save Joke' : 'Login to save joke';

    return (
        <div>
            <p className="text-lg md:text-xl lg:text-2xl p-5">
                {joke || 'Loading...'}
            </p>
            <div className="flex justify-center gap-10" >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
                 onClick={fetchJoke}>
                    Regenerate
                </button>

                <button className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded"
                disabled={!user}
                    onClick={async() => {
                        if(!user) return;
                        await saveJoke(joke);
                        alert('joke saved')
                    }}>{saveJokeText}
                </button>
            </div>
        </div>
    )
}