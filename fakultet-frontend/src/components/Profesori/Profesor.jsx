import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function Profesor() {

    const [profesor, setProfesor] = useState({
        id: null,
        brojIndeksa: "",
        ime: "",
        prezime: "",
        titula: "",
        oblastSpecijalizacije: "",
        godineIskustva: 0
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8081/profesori/" + id)
            .then(data => {
                setProfesor(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <h1>Vise detalja o profesoru</h1>

            <div className="w-50 m-auto">
                <form>
                    <div className="form-group mt-2">
                        <label >Ime</label>
                        <label className="form-control">{profesor.ime}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Prezime</label>
                        <label className="form-control">{profesor.prezime}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Titula</label>
                        <label className="form-control">{profesor.titula}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Oblast specijalizacije</label>
                        <label className="form-control">{profesor.oblastSpecijalizacije}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label >Godine iskustva</label>
                        <label className="form-control">{profesor.godineIskustva}</label>
                    </div>
                </form>
            </div>
        </>
    )
}