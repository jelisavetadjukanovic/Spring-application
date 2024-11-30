import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Studenti() {

    const [studenti, setStudenti] = useState([]);
    const [najboljiProsek, setNajboljiProsek] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8081/studenti")
        .then(data => {
            setStudenti(data.data);
        });
        

        axios.get("http://localhost:8081/studenti/najveci-prosek").then(data=> {
            setNajboljiProsek(data.data);
        })
    }, []);

    return (
        <>
            <h1>Studenti</h1>

            <div>
                <Link to="/students/add" className="btn btn-success">Novi student</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Ime</th>
                        <th>Prezime</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {studenti.map((student, index) => {
                        return (
                            <tr key={index}>
                                <td>{student.ime}</td>
                                <td>{student.prezime}</td>
                                <td><Link className="btn btn-primary" to={"/students/" + student.id}>Vise detalja</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="mt-5">
                <b>Najbolji prosek: {najboljiProsek}</b>
            </div>
        </>
    )
}