import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { EditStudentContainer } from '../containers';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "15px"
  }
}));

const StudentView = (props) => {
  const classes = useStyles();
  const {student} = props;
    return (
      <div style={styles.page} id="student-view">
        {
          student.imageURL === "https://cdn.onlinewebfonts.com/svg/img_210318.png"
          ? <img id="no-student-img" src={student.imageURL} />
          : <img className="student-img" src={student.imageURL} />
        }
        <div className="student-view-text">      
          <h1>{student.firstname + " " + student.lastname}</h1>
          <h2>{student.email}</h2>
          <h3>{
              student.campusId
              ? `Attending: ${student.campus.name}`
              : "Not attending any school"
          }</h3>
           <h3>GPA: {
              student.gpa
              ? student.gpa
              : "N/A"
          }</h3>
        </div>
        <div className="button-menu">
          <Button className={classes.root} onClick={props.showEditClick} variant="contained" 
            color={props.showEdit ? "secondary" : "primary"}>
            Edit Student
          </Button>
          <Button className={classes.root} onClick={props.handleClick} variant="contained" color="primary">
            Delete Student
          </Button>
        </div>
        <div className="edit-form">
          {
            //Edit Options show based on StudentView container's state.
            props.showEdit
            ? <EditStudentContainer refresh={props.refresh} showEdit={props.showEditClick} student={student}/>
            : <></>
          }
        </div>
      </div>
    );
  };
  const styles = {
    page: {
      backgroundColor: '#feeed3',
      minHeight: '100vh',
      color: '#865547',
    }
  }
  
export default StudentView;
