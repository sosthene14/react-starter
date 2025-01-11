import { useEffect } from "react";
import { API_URL } from "../const/constants";
import { Nomine } from "../interfaces/interfaces";

export const useFetchNomines = () => {

    const fetchNomines = async () => {
        const response = await fetch(`${API_URL}/nomines`);
        const data = await response.json();
        console.log(data);
    };

    const uploadNomines = async (nomines: Nomine) => {
        const response = await fetch(`${API_URL}/nomines`, {
            method: 'POST',
            body: JSON.stringify(nomines),
        });
        const data = await response.json();
        console.log(data);
    };

    const updateNomines = async (nomines: Nomine) => {
        const response = await fetch(`${API_URL}/nomines/${nomines.id}`, {
            method: 'PUT',
            body: JSON.stringify(nomines),
        });
        const data = await response.json();
        console.log(data);
    };

    const deleteNomines = async (nomines: Nomine) => {
        const response = await fetch(`${API_URL}/nomines/${nomines.id}`, {
            method: 'DELETE',
            body: JSON.stringify(nomines),
        });
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        fetchNomines();
    }, []);

    return { uploadNomines, updateNomines, deleteNomines };

}

