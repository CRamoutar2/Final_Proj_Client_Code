import PropTypes from "prop-types";
import { Navbar } from "./index";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      <div style={styles.page}>
        <Navbar />
        <h1 style={styles.title}>There are no campuses.</h1>
        <Link to={`campus/new`} style={styles.heading}>
          <div style={styles.button}>
            <p style={styles.heading}>
              Add New Campus
            </p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <Navbar />
      <h1 style={styles.title}>All Campuses</h1>
      <div style={styles.list}>
        {props.allCampuses.map((campus) => (
          <div key={campus.id} style={styles.container}>
            <Link to={`/campus/${campus.id}`} style={styles.heading}>
              <h1 style={styles.heading}>{campus.name}</h1>
            </Link>
            <p>{campus.description}</p>
          </div>
        ))}
      </div>
      <Link to={`campus/new`} style={styles.heading}>
        <div style={styles.button}>
          <p style={styles.heading}>
            Add New Campus
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
    width: '25vw',
    backgroundColor: '#fdb676',
  },
  title: {
    textAlign: 'center',
    fontSize: '40px'
  },
  heading: {
    textDecoration: 'none',
    color: 'inherit',
  }
}

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;