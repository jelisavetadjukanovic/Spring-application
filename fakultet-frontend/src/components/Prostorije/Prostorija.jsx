import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function Prostorija() {

    const [prostorija, setProstorija] = useState({
        id: null,
        oznaka: "",
        tip: "",
        status: "",
        kapacitet: 0,
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8082/prostorije/" + id)
            .then(data => {
                setProstorija(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <h1>Vise detalja o prostoriji</h1>

            <div className="w-50 m-auto">
                <form>
                    <div className="form-group mt-2">
                        <label >Oznaka</label>
                        <label className="form-control">{prostorija.oznaka}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Tip</label>
                        <label className="form-control">{prostorija.tip}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Status</label>
                        <label className="form-control">{prostorija.status}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Kapacitet</label>
                        <label className="form-control">{prostorija.kapacitet}</label>
                    </div>
                </form>
            </div>
        </>
    )
}