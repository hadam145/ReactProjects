import React, { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { Link } from "react-router-dom";

function People() {
    const [people, setPeople] = useState(null); // Stav postav

    useEffect(() => { // Zavolá se při vložení komp. do stránky
        async function fetchPeople() {
            const data = await apiGet('people');
            setPeople(data.results); // Nastaví stažené lidi do stavu postav
        }

        fetchPeople();

    }, []);
    // Prázdné pole znamená, že efekt se spustí pouze jednou po prvním renderu

    if (!people)
        return <p>Načítám...</p>;

    return (
        <div>
            <h1>Postavy</h1>
            {people.map((person, index) => (
                <div key={index}>
                    <h2><Link to={`/people/${index + 1}`}>{person.name}</Link></h2>
                    <p>Výška: {person.height}</p>
                    <p>Váha: {person.mass}</p>
                </div>
            ))}
        </div>
    );
    // Vykreslí seznam postav
}
export default People;