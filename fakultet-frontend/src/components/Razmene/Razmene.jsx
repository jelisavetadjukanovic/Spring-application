import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Razmene() {

    const [razmene, setRazmene] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/razmene-studenata")
        .then(data => {
            setRazmene(data.data);
        })
    }, []);

    return (
        <>
            <h1>Studentske razmene</h1>

            <div>
                <Link to="/exchanges/add" className="btn btn-success">Nova razmena</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Naziv univerziteta</th>
                        <th>Datum pocetka</th>
                        <th>Datum kraja</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {razmene.map((razmena, index) => {
                        return (
                            <tr key={index}>
                                <td>{razmena.nazivUniverziteta}</td>
                                <td>{razmena.datumPocetka}</td>
                                <td>{razmena.datumKraja}</td>
                                <td><Link className="btn btn-primary" to={"/exchanges/" + razmena.id}>Vise detalja</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}