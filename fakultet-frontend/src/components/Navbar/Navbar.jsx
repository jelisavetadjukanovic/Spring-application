import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to={"/"} className="nav-link">Pocetna</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link " to={"/students"} >Studenti</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link " to={"/profesors"}>Profesori</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link " to={"/rooms"}>Prostorije na fakultetu</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link " to={"/exchanges"}>Studentske razmene</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link " to={"/programs"}>Studijski programi</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}