'use client';

import { logout } from "../login/action";

export default function LogoutButton() {
    return (
        <button
            onClick={()=> logout()}
            className="px-4 py-2 rounded text-white bg-red-600 hover:bg-red-700 transition duration-200 ease-in-out"
        >
            Logout
        </button>
    )
}