import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function Razmena() {

    const [razmena, setRazmena] = useState({
        id: null,
        datumPocetka: "",
        datumKraja: "",
        drzava: "",
        grad: "",
        nazivUniverziteta: "",
        nazivFakulteta: "",
        oblast: "",
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8082/razmene-studenata/" + id)
            .then(data => {
                setRazmena(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <h1>Vise detalja o razmeni</h1>

            <div className="w-50 m-auto">
                <form>
                    <div className="form-group mt-2">
                        <label >Naziv univerziteta</label>
                        <label className="form-control">{razmena.nazivUniverziteta}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Naziv fakulteta</label>
                        <label className="form-control">{razmena.nazivFakulteta}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Oblast</label>
                        <label className="form-control">{razmena.oblast}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Drzava</label>
                        <label className="form-control">{razmena.drzava}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Grad</label>
                        <label className="form-control">{razmena.grad}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Datum odrzavanja</label>
                        <label className="form-control">{razmena.datumPocetka} - {razmena.datumKraja}</label>
                    </div>
                </form>
            </div>
        </>
    )
}