import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const Egzamin = () => {
    const kursy = ['Programowanie C#', 'Angular dla poczatkujących', 'Kurs Django']
    let elementy = kursy.map((el, id) => (
        <li key={id} style={{ listStyle: "none" }}>
            {id + 1}{el}
        </li>
    ))
    const [user, setUser] = useState('')
    const [num, setNum] = useState('')
    const callInformation = () => {
        console.log(user)
        if (kursy[num - 1]) { console.log(kursy[num - 1]) }
        else {
            console.log(`Nieprawidłowy numer kursu, prosze wpisać numer kursu od 1 do ${kursy.length}`)
        }
    }
    return (<div>
        <h2>Liczba kursów {kursy.length}</h2>
        <ul>
            {elementy}
        </ul>

        <form>
            <div class="form-group">
                <label>Imie nazwisko</label>
                <input type="text" class="form-control" placeholder="Imie nazwisko" onChange={e => setUser(e.target.value)} />

            </div>
            <div class="form-group">
                <label>Numer kursu</label>
                <input type="number" class="form-control" placeholder="Numer kursu" onChange={e => setNum(e.target.value)} />
            </div>
        </form>
        <button class="btn btn-primary" onClick={callInformation}>Zapisz do kursu</button>
    </div>)
}
export default Egzamin