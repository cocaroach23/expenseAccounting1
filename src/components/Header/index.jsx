import { Link } from "react-router-dom"
import React from "react"

const Header = () => {

    return(
        <header className="font-semibold text-xl py-7 bg-purple-800 text-amber-200">
            <div className="max-w-screen flex justify-between mx-auto px-10">
                <nav className="flex gap-8 justify-center items-center">
                    <Link to='/'>
                        Главная страница
                    </Link>
                    
                    <Link to='/oldPurchases'>
                        Учёт расходов
                    </Link>
                </nav>
            </div>

        </header>
    )
}

export default Header