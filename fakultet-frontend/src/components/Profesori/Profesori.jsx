import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

export default function Profesori() {

    const [profesori, setProfesori] = useState([]);
    const pretragaTekstRef = useRef(null);

    useEffect(() => {
        axios.get("http://localhost:8081/profesori")
        .then(data => {
            setProfesori(data.data);
        })
    }, []);

    function pretraga() {
        axios.get("http://localhost:8081/profesori/ime?ime=" + pretragaTekstRef.current.value)
        .then(data => {
            setProfesori(data.data);
        })
    }

    return (
        <>
            <h1>Profesori</h1>

            <div>
                <Link to="/profesors/add" className="btn btn-success">Novi profesor</Link>
            </div>

            <div className="mt-5">
                <div className="text-start">Pretraga po imenu</div>
                <input ref={pretragaTekstRef} className="form-control" />
                <button className="btn btn-primary mt-2" onClick={pretraga}>Pretraga</button>
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
                    {profesori.map((profesor, index) => {
                        return (
                            <tr key={index}>
                                <td>{profesor.ime}</td>
                                <td>{profesor.prezime}</td>
                                <td><Link className="btn btn-primary" to={"/profesors/" + profesor.id}>Vise detalja</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}