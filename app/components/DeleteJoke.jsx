'use client';

import { deleteJoke } from "../data/jokes/actions";

export default function DeleteJoke({ jokeId }){
    console.log("DELETEJoke ", jokeId);
    return (
        <button
            className="text-red-500 p-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ringopa50"
            onClick={() => deleteJoke(jokeId)}>X
        </button>
    )
}