import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function Student() {

    const [student, setStudent] = useState({
        id: null,
        brojIndeksa: "",
        ime: "",
        prezime: "",
        srednjaSkola: "",
        prosek: 0
    });

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8081/studenti/" + id)
            .then(data => {
                setStudent(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <h1>Vise detalja o studentu</h1>

            <div className="w-50 m-auto">
                <form>
                    <div className="form-group mt-2">
                        <label >Ime</label>
                        <label className="form-control">{student.ime}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Prezime</label>
                        <label className="form-control">{student.prezime}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Broj indeksa</label>
                        <label className="form-control">{student.brojIndeksa}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label>Srednja skola</label>
                        <label className="form-control">{student.srednjaSkola}</label>
                    </div>
                    <div className="form-group mt-2">
                        <label >Prosek</label>
                        <label className="form-control">{student.prosek}</label>
                    </div>
                </form>
            </div>
        </>
    )
}