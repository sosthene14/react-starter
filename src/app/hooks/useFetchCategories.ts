import { useEffect } from "react";
import { API_URL } from "../const/constants";
import { Category } from "../interfaces/interfaces";
import { useCategoriesStore } from "../store/dataStore";

export const useFetchCategories = () => {


    const { setCategories } = useCategoriesStore();
    const fetchCategories = async () => {
        const response = await fetch(`${API_URL}/categories`);
        const data = await response.json();
        setCategories(data);
    };

    const uploadCategories = async (categories: Category) => {
        const response = await fetch(`${API_URL}/categories`, {
            method: 'POST',
            body: JSON.stringify(categories),
        });
        const data = await response.json();
        console.log(data);
    };

    const updateCategories = async (categories: Category) => {
        const response = await fetch(`${API_URL}/categories/${categories.id}`, {
            method: 'PUT',
            body: JSON.stringify(categories),
        });
        const data = await response.json();
        console.log(data);
    };

    const deleteCategories = async (categories: Category) => {
        const response = await fetch(`${API_URL}/categories/${categories.id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { uploadCategories, updateCategories, deleteCategories };
};
