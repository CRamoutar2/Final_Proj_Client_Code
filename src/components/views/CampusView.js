import { Navbar } from ".";
import { Link } from "react-router-dom";


const CampusView = (props) => {
  const {campus} = props;

  if (!campus.students.length) {
    return (
      <div style={styles.page}>
        <Navbar />
        <h1 style={styles.title}>{campus.name}</h1>
        <p style={{textAlign: 'center'}}>{campus.description}</p>
        <h1 style={styles.heading}>There are no students.</h1>
        <Link to={`/student/new`} style={styles.heading}>
          <div style={styles.button}>
            <p style={styles.heading}>
              Add New Student
            </p>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <Navbar />   
      <h1 style={styles.title}>{campus.name}</h1>
      <p style={{textAlign: 'center'}}>{campus.description}</p>
      <h3 style={styles.heading}>Enrolled students:</h3>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <Link to={`/student/${student.id}`} style={styles.link}>
            <li key={student.id}>{name}</li>
          </Link>
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
  heading: {
    textDecoration: 'none',
    color: 'inherit',
    paddingLeft: '1vw'
  },
  button: {
    border: '0 solid black',
    borderRadius: '24px',
    textDecoration: 'none',
    backgroundColor: '#fed287',
    padding: '1vw',
    margin: '1vw',
    color: '#865547',
    fontFamily: 'Poppins',
    fontSize: '20px',
    textAlign: 'center',
    textDecoration: 'none'
  },
}

export default CampusView;