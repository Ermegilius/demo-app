import {useNavigate} from 'react-router-dom';
import personsData from "../data/personsData";
import Card from "../components/Card";

const List = () => {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/${id}`);
    //console.log(id);
  }
  return (
    <div>
      <main>
        <>
          <h2>Employees</h2>
          <div className="list">
            {personsData.map((person) => (
              <Card
                key={person.id}
                firstName={person.firstName}
                title={person.title}
                age={person.age}
                animal={person.animal}
                onClick={()=>handleNavigate(person.id)}
              />
            ))}
          </div>
        </>
      </main>
    </div>
  );
};

export default List;
