import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function ProstorijaDodaj() {

    const oznakaRef = useRef(null);
    const tipRef = useRef(null);
    const statusRef = useRef(null);
    const kapacitetRef = useRef(null);

    const [greska, setGreska] = useState(false);

    function sacuvajNovuProstoriju() {
        
        const oznaka = oznakaRef.current.value;
        const tip = tipRef.current.value;
        const status = statusRef.current.value;
        const kapacitet = kapacitetRef.current.value;
        
        if (!oznaka || !tip || !status || !kapacitet) {
            setGreska(true);
            return;
        }

        axios.post("http://localhost:8082/prostorije", {
            id: null,
            oznaka,
            tip,
            status,
            kapacitet
        })
        .then(data => {
            console.log("Uspesno dodato")
            setGreska(false);
            alert("Uspesno dodato");
        })
        .catch(err => {
            console.log(err)
            alert(err);
        })
    }

    return (
        <>
            <h1>Nova prostorija</h1>

            <div className="w-50 m-auto">
                <form>
                    <div className="form-group mt-2">
                        <label >Oznaka</label>
                        <input ref={oznakaRef} className="form-control" name="oznaka" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Tip</label>
                        <select ref={tipRef} className="form-select">
                            <option value="UCIONICA">Ucionica</option>
                            <option value="AMFITEATAR">Amfiteatar</option>
                            <option value="KANCELARIJA">Kancelarija</option>
                            <option value="OSTALO">Ostalo</option>
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <label>Status</label>
                        <select ref={statusRef} className="form-select">
                            <option value="ZA_UPOTREBU">Za upotrebu</option>
                            <option value="ZATVORENA">Zatvorena</option>
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <label>Kapacitet</label>
                        <input ref={kapacitetRef} className="form-control" name="kapacitet" />
                    </div>
                    <div className="form-group mt-2">
                        <button type="button" className="btn btn-primary" onClick={sacuvajNovuProstoriju}>Sacuvaj</button>
                    </div>

                    {greska && <div className="mt-2 bg-danger text-center">Sva polja su obavezna</div>}
                </form>
            </div>
        </>
    )
}