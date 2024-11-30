import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function RazmenaDodaj() {

    const datumPocetkaRef = useRef(null);
    const datumKrajaRef = useRef(null);
    const drzavaRef = useRef(null);
    const gradRef = useRef(null);
    const nazivUniverzitetaRef = useRef(null);
    const nazivFakultetaRef = useRef(null);
    const oblastRef = useRef(null);

    const [greska, setGreska] = useState(false);

    function sacuvajNovuRazmenu() {
        
        const datumPocetka = datumPocetkaRef.current.value;
        const datumKraja = datumKrajaRef.current.value;
        const drzava = drzavaRef.current.value;
        const grad = gradRef.current.value;
        const nazivUniverziteta = nazivUniverzitetaRef.current.value;
        const nazivFakulteta = nazivFakultetaRef.current.value;
        const oblast = oblastRef.current.value;
        
        if (!datumPocetka || !datumKraja || !drzava || !grad || !nazivUniverziteta || !nazivFakulteta || !oblast) {
            setGreska(true);
            return;
        }

        axios.post("http://localhost:8082/razmene-studenata", {
            id: null,
            datumPocetka,
            datumKraja,
            drzava,
            grad,
            nazivUniverziteta,
            nazivFakulteta,
            oblast,
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
                        <label >Naziv univerziteta</label>
                        <input ref={nazivUniverzitetaRef} className="form-control" name="nazivUniverziteta" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Naziv fakulteta</label>
                        <input ref={nazivFakultetaRef} className="form-control" name="nazivFakulteta" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Oblast</label>
                        <input className="form-control" ref={oblastRef} name="oblast" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Drzava</label>
                        <input className="form-control" ref={drzavaRef} name="drzava" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Grad</label>
                        <input className="form-control" ref={gradRef} name="grad" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Datum pocetka</label>
                        <input type="date" className="form-control" ref={datumPocetkaRef} name="datumPocetka" />
                    </div>
                    <div className="form-group mt-2">
                        <label>Datum kraja</label>
                        <input type="date" className="form-control" ref={datumKrajaRef} name="datumKraja" />
                    </div>
                    <div className="form-group mt-2">
                        <button type="button" className="btn btn-primary" onClick={sacuvajNovuRazmenu}>Sacuvaj</button>
                    </div>

                    {greska && <div className="mt-2 bg-danger text-center">Sva polja su obavezna</div>}
                </form>
            </div>
        </>
    )
}