import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Prostorije() {

    const [prostorije, setProstorije] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/prostorije")
        .then(data => {
            setProstorije(data.data);
        })
    }, []);

    return (
        <>
            <h1>Prostorije</h1>

            <div>
                <Link to="/rooms/add" className="btn btn-success">Nova prostorija</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Oznaka</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {prostorije.map((prostorija, index) => {
                        return (
                            <tr key={index}>
                                <td>{prostorija.oznaka}</td>
                                <td><Link className="btn btn-primary" to={"/rooms/" + prostorija.id}>Vise detalja</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}