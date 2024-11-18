import personsData from "../data/personsData";
import Card from "../components/Card";

const List = () => {
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
              />
            ))}
          </div>
        </>
      </main>
    </div>
  );
};

export default List;
