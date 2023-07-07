import React from "react"
import Image from "next/image"

const Header = () => {
    return (
        <div className="container mx-auto p-5 flex justify-between" >
            <Image width={183} height={32} src="/Logo.png" alt="Logo" />

            <button className="text-primary text-sm font-semibold">Login</button>
        </div>
    )
}

export default Header