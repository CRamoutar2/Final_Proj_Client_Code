import { Navbar } from ".";


const CampusView = (props) => {
  const {campus} = props;
  return (
    <div style={styles.page}>
      <Navbar />   
      <h1 style={styles.title}>{campus.name}</h1>
      <p style={{textAlign: 'center'}}>{campus.description}</p>
      <h3 style={{paddingLeft: '1vw'}}>Enrolled students:</h3>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>{name}</li>
        );
      })}
      </ul>
    </div>
  );

};

const styles = {
  page: {
    backgroundColor: '#feeed3',
    minHeight: '100vh',
    color: '#865547',
  },
  title: {
    textAlign: 'center',
    fontSize: '40px'
  },
}

export default CampusView;