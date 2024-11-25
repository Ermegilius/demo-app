import { useState } from "react";
import Button from "./Button.jsx";

function Card({ firstName, title, age, animal, onClick }) {
  const [animalValue, setAnimalValue] = useState(animal);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);
  const handleChange = (e) => setAnimalValue(e.target.value);

  return (
    <div className="card">
      <p>{firstName}</p>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      {isEditing ? (
        <input type="text" value={animalValue} onChange={handleChange} />
      ) : (
        <p>Animal: {animalValue}</p>
      )}
      <Button variant="primary" text="See more" onClick={onClick} />
      <Button
        variant="secondary"
        onClick={toggleEdit}
        text={isEditing ? "Save" : "Edit"}
      />
    </div>
  );
}

export default Card;