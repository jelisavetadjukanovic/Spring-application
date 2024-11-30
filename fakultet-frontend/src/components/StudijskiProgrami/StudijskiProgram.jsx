import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function StudijskiProgram() {

    const [program, setProgram] = useState({
        id: null,
        naziv: "",
        godineTrajanja: 0,
        espbodovi: 0,
        oblastiSpecijalizacije: "",
        opis: "",
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8082/studijski-programi/" + id)
            .then(data => {
                setProgram(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <h1>Vise detalja o studijskom programu</h1>

            <div className="w-50 m-auto">
                <form>
                    <div className="form-group mt-2">
                        <label >Naziv</label>
                        <label className="form-control">{program.naziv}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label >Godine trajanja</label>
                        <label className="form-control">{program.godineTrajanja}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label >ESP bodovi</label>
                        <label className="form-control">{program.espbodovi}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label >Oblasti specijalizacije</label>
                        <label className="form-control">{program.oblastiSpecijalizacije}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label >Opis</label>
                        <label className="form-control">{program.opis}</label>
                    </div>
                </form>
            </div>
        </>
    )
}