import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from "../components/Card";

const List = () => {
  const navigate = useNavigate();
  const [persons, setPersons] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch ('http://localhost:3001/persons')
    .then((response) => response.json())
    .then((data) => {
      setPersons(data);
      setLoading(false);
    });
  }, []);
  
  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <main>
        <h2>Employees</h2>
        {isLoading ?
          (<p>Loading...</p>):
          (<div className="list">
            {persons.map((person) => (
              <Card
                key={person.id}
                firstName={person.firstName}
                title={person.title}
                age={person.age}
                animal={person.animal}
                onClick={()=>handleNavigate(person.id)}
              />
            ))}
          </div>)
        }
    </main>
  )
}

export default List;
