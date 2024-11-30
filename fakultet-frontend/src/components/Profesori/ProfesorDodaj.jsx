import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function ProfesorDodaj() {

    const imeRef = useRef(null);
    const prezimeRef = useRef(null);
    const titulaRef = useRef(null);
    const oblastSpecijalizacijeRef = useRef(null);
    const godineIskustvaRef = useRef(null);

    const [greska, setGreska] = useState(false);

    function sacuvajNovogProfesora() {
        
        const ime = imeRef.current.value;
        const prezime = prezimeRef.current.value;
        const titula = titulaRef.current.value;
        const oblastSpecijalizacije = oblastSpecijalizacijeRef.current.value;
        const godineIskustva = godineIskustvaRef.current.value;
        
        if (!ime || !prezime || !titula || !oblastSpecijalizacije || !godineIskustva) {
            setGreska(true);
            return;
        }

        axios.post("http://localhost:8082/prostorije", {
            ime,
            prezime,
            titula,
            oblastSpecijalizacije,
            godineIskustva
        })
        .then(data => {
            console.log(data)
            setGreska(false);
            alert("Uspesno sacuvan");
        })
        .catch(err => {
            console.log(err)
            alert(err);
        })
    }



    return (
        <>
            <h1>Novi profesor</h1>

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
                        <label>Titula</label>
                        <input ref={titulaRef} className="form-control" name="titula" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Oblast specijalizacije</label>
                        <input ref={oblastSpecijalizacijeRef} className="form-control" name="oblastSpecijalizacije" />
                    </div>
                    <div className="form-group mt-2">
                        <label >Godine iskustva</label>
                        <input ref={godineIskustvaRef} type="number" className="form-control" name="godineIskustva" />
                    </div>
                    <div className="form-group mt-2">
                        <button type="button" className="btn btn-primary" onClick={sacuvajNovogProfesora}>Sacuvaj</button>
                    </div>

                    {greska && <div className="mt-2 bg-danger text-center">Sva polja su obavezna</div>}
                </form>
            </div>
        </>
    )
}