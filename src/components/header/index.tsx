"use client"

import  Link  from "next/link";
import {FiUser, FiLogOut, FiLoader, FiLock} from 'react-icons/fi'
import {signIn, signOut, useSession} from 'next-auth/react'

export function Header(){
    const {status, data} = useSession();

    async function handleLogin() {
        await signIn();
    }

    async function handleLogout(){
        await signOut();
    }
    return(
        <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm">
        <div className="w-full flex items-center justify-between max-w-7xl mx-auto  ">
            <Link href="/">
            <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300">
                <span className="text-blue-500">Gestor</span>Pro
            </h1>
            </Link>

            {status === "loading" && (
                <button className="animate-spin">
                    <FiLoader size={26} color="#4b5563" />
                </button>
            )}

            {status === "unauthenticated" &&(
                <button onClick={handleLogin} className=" flex cursor-pointer ">
                <FiLock size={23} color="blue" />
                <p className="text-white bg-blue-500 rounded-2xl px-3"> Clique <strong>aqui</strong> para começar</p>
                
            </button>
            )}
       
                {status === "authenticated" &&(
                    <div className="flex items-baseline gap-4 cursor-pointer">
                    <Link href="/dashboard"><FiUser size={26} color="#4b5563 "/> </Link>
                
                <button onClick={handleLogout} className="cursor-pointer">
                    <FiLogOut size={26} color="#ff2313"/>
                </button>
                    </div>
                )}
        </div>
    </header>
    )
    
}