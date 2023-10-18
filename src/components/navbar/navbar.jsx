import styled from './navbar.module.css'

function Navbar ({}){
    return (
        <>
        <header>
            <nav>
                <ul className={styled.card}>
                    <li>tahu</li>
                    <li>isi</li>
                    <li>sayur</li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar;