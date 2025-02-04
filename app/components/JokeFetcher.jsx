'use client';

import { useEffect, useState } from "react";

export default function JokeFecther() {
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

    return (
        <div>
            <p className="text-lg md:text-xl lg:text-2xl p-5">
                {joke || 'Loading...'}
            </p>
            <div >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
                 onClick={fetchJoke}>
                    Regenerate
                </button>
            </div>
        </div>
    )
}