import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function StudijskiProgrami() {

    const [programi, setProgrami] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/studijski-programi")
        .then(data => {
            setProgrami(data.data);
        })
    }, []);

    return (
        <>
            <h1>Studiski programi</h1>

            <div>
                <Link to="/programs/add" className="btn btn-success">Novi studijski program</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Naziv</th>
                        <th>Godine trajanja</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {programi.map((program, index) => {
                        return (
                            <tr key={index}>
                                <td>{program.naziv}</td>
                                <td>{program.godineTrajanja}</td>
                                <td><Link className="btn btn-primary" to={"/programs/" + program.id}>Vise detalja</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}