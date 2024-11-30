import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function StudijskiProgramDodaj() {

    const nazivRef = useRef(null);
    const godineTrajanjaRef = useRef(null);
    const espbodoviRef = useRef(null);
    const oblastiSpecijalizacijeRef = useRef(null);
    const opisRef = useRef(null);

    const [greska, setGreska] = useState(false);

    function sacuvajNoviStudijskiProgram() {
        
        const naziv = nazivRef.current.value;
        const godineTrajanja = godineTrajanjaRef.current.value;
        const espbodovi = espbodoviRef.current.value;
        const oblastiSpecijalizacije = oblastiSpecijalizacijeRef.current.value;
        const opis = opisRef.current.value;
        
        if (!naziv || !godineTrajanja || !espbodovi || !oblastiSpecijalizacije || !oblastiSpecijalizacije || !opis) {
            setGreska(true);
            return;
        }

        axios.post("http://localhost:8082/studijski-programi", {
            id: null,
            naziv,
            godineTrajanja,
            espbodovi,
            oblastiSpecijalizacije,
            opis,
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
            <h1>Novi studijski program</h1>

            <div className="w-50 m-auto">
                <form>
                <div className="form-group mt-2">
                        <label >Naziv studijskog programa</label>
                        <input ref={nazivRef} className="form-control" name="naziv" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Godine trajanja</label>
                        <input type="number" ref={godineTrajanjaRef} className="form-control" name="godineTrajanja" />
                    </div>
                    <div className="form-group mt-2">
                        <label>ESPB</label>
                        <input type="number" className="form-control" ref={espbodoviRef} name="espb" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Oblast specijalizacije</label>
                        <input className="form-control" ref={oblastiSpecijalizacijeRef} name="oblastSpecijalizacije" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Opis</label>
                        <textarea className="form-control" ref={opisRef} ></textarea>
                    </div>

                    <div className="form-group mt-2">
                        <button type="button" className="btn btn-primary" onClick={sacuvajNoviStudijskiProgram}>Sacuvaj</button>
                    </div>

                    {greska && <div className="mt-2 bg-danger text-center">Sva polja su obavezna</div>}
                </form>
            </div>
        </>
    )
}