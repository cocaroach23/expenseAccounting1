import Button from "components/Button"
import { Link } from "react-router-dom"
import React from "react"

const Header = () => {

    return(
        <header className="font-semibold text-xl">
            <div className="max-w-screen flex justify-between mx-auto px-10">
                <nav className="flex gap-8 justify-center items-center">
                    <link to='/OldPurchases'>
                        Учёт расходов
                    </link>
                </nav>
            </div>

        </header>
    )
}

export default Header