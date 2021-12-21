import React from 'react'
import { Navbar } from './index';

export default function NewStudentView(props) {
  const { handleChange, handleSubmit } = props;
  return (
    <div style={styles.page}>
      <Navbar />
      <form style={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h1 style={styles.title}>Register a new campus:</h1>
        <div style={styles.questions}>
          <div style={styles.row}>
            <label style={styles.label}>Name: </label>
            <input type="text" style={styles.input} name="firstname" required onChange ={(e) => handleChange(e)} />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>Address: </label>
            <input type="text" style={styles.input} name="lastname" required onChange ={(e) => handleChange(e)} />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>Description: </label>
            <input type="text" style={styles.input} name="email" required onChange ={(e) => handleChange(e)} />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>Image URL: </label>
            <input type="text" style={styles.input} name="imageURL" onChange ={(e) => handleChange(e)} />
          </div>
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  )
}

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
    width: '100%',
    color: '#865547',
    fontFamily: 'Poppins',
    fontSize: '20px',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '1vw auto'
  },
  questions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
  form: {
    borderRadius: '12px',
    border: '0px solid black',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin: '0 0 4vw 4vw',
    padding: '2vw',
    width: '25vw',
    backgroundColor: '#fdb676',
    margin: '4vw auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '32px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    padding: '4px',
    margin: '4px',
  }
}