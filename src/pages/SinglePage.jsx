import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../components/Button";

const SinglePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [person, setPerson] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/persons/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch person data");
                }
                return response.json();
            })
            .then((data) => {
                setPerson(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!person) return <p>Person not found.</p>;

    return (
        <div>
            <h2>Single page for: {person.firstName}</h2>
            <p>Title: {person.title}</p>
            <p>Age: {person.age}</p>
            <p>Animal: {person.animal}</p>
            <Button text="Back to List" onClick={() => navigate(-1)} />
        </div>
    );
};

export default SinglePage;