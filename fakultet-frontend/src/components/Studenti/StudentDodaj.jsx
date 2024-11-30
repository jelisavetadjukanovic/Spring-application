import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function StudentDodaj() {

    const imeRef = useRef(null);
    const prezimeRef = useRef(null);
    const brojIndeksaRef = useRef(null);
    const srednjaSkolaRef = useRef(null);
    const prosekRef = useRef(null);

    const [greska, setGreska] = useState(false);

    function sacuvajNovogStudenta() {
        
        const ime = imeRef.current.value;
        const prezime = prezimeRef.current.value;
        const brojIndeksa = brojIndeksaRef.current.value;
        const srednjaSkola = srednjaSkolaRef.current.value;
        const prosek = prosekRef.current.value;
        
        if (!ime || !prezime || !brojIndeksa || !srednjaSkola || !prosek) {
            setGreska(true);
            return;
        }

        axios.post("http://localhost:8081/studenti", {
            id: null,
            brojIndeksa,
            ime,
            prezime,
            srednjaSkola,
            prosek
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
            <h1>Novi student</h1>

            <div className="w-50 m-auto">
                <form>
                    <div className="form-group mt-2">
                        <label >Ime</label>
                        <input ref={imeRef} className="form-control" name="ime" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Prezime</label>
                        <input ref={prezimeRef} className="form-control" name="prezime" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Broj indeksa</label>
                        <input ref={brojIndeksaRef} className="form-control" name="brojIndeksa" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Srednja skola</label>
                        <input ref={srednjaSkolaRef} className="form-control" name="srednjaSkola" />
                    </div>
                    <div className="form-group mt-2">
                        <label >Prosek</label>
                        <input ref={prosekRef} type="number" className="form-control" name="prosek" />
                    </div>
                    <div className="form-group mt-2">
                        <button type="button" className="btn btn-primary" onClick={sacuvajNovogStudenta}>Sacuvaj</button>
                    </div>

                    {greska && <div className="mt-2 bg-danger text-center">Sva polja su obavezna</div>}
                </form>
            </div>
        </>
    )
}