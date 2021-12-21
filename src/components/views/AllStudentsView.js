import { Link } from "react-router-dom";
import { Navbar } from "./index";
import Delete from "./../assets/bin.png";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;

  if (!props.allStudents.length) {
    return (
      <div style={styles.page}>
        <Navbar />
        <h1 style={styles.title}>There are no students.</h1>
        <Link to={`/student/new`} style={styles.heading}>
          <div style={styles.button}>
            <p style={styles.heading}>
              Add New Student
            </p>
          </div>
        </Link>
      </div>
    );
  }
  
  return (
    <div style={styles.page}>
      <Navbar />
      <h1 style={styles.title}>All Students</h1>
      <div style={styles.list}>
        {props.allStudents.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id} style={styles.container}>
            <Link to={`/student/${student.id}`} style={styles.heading}>
              <h1 style={styles.heading}>{name}</h1>
            </Link>
            <img style={styles.delete} src={Delete} onClick={() => deleteStudent(student.id)} />
            </div>
          );
        }
        )}
      </div>
      <Link to={`/student/new`} style={styles.heading}>
        <div style={styles.button}>
          <p style={styles.heading}>
            Add New Student
          </p>
        </div>
      </Link>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#feeed3',
    minHeight: '100vh',
    color: '#865547',
  },
  list: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center'
  },
  container: {
    borderRadius: '12px',
    border: '0px solid black',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin: '0 0 4vw 4vw',
    padding: '2vw',
    width: '20vw',
    backgroundColor: '#fdb676',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  title: {
    textAlign: 'center',
    fontSize: '40px'
  },
  heading: {
    textDecoration: 'none',
    color: 'inherit',
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
  delete: {
    width: '24px',
    height: '24px',
  }
}


export default AllStudentsView;
