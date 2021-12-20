import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={styles.container}>
      <Link to={'/'} style={styles.link}>
        <h1 style={styles.title}>CSCI39548: CRUD App Final Project</h1>
      </Link>
      <div style={styles.right}>
        <Link to={'/campuses'} style={styles.link}>
          <div style={styles.button}>
            All Campuses
          </div>
        </Link>
        <Link to={'/students'} style={styles.link}>
          <div style={styles.button}>
            All Students
          </div>
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#fa804e',
    color: '#865547',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1vw',
    height: '6vh',
    alignItems: 'center'
  },
  title: {
    lineHeight: '48px',
    fontSize: '48px',
    margin: '0'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  right: {
    display: 'flex',
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
    textAlign: 'center'
  }
}