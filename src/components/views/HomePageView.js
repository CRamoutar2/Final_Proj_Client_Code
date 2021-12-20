import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './index';
import Campus from './../assets/school.png';
import Student from './../assets/graduated.png';

export default function HomePageView() {
  return (
    <div style={styles.page}>
      <Navbar />
      <h1 style={styles.title}>Welcome to the</h1>
      <h1 style={styles.title}>Platform For Managing Students and Campuses</h1>
      <div style={styles.row}>
        <Link to={'/campuses'} style={styles.link}>
          <div style={styles.card}>
            <img src={Campus} style={styles.image} />
            <h3>Show all campuses</h3>
          </div>
        </Link>
        <Link to={'/students'} style={styles.link}>
          <div style={styles.card}>
            <img src={Student} style={styles.image} />
            <h3>Show all students</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

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
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: '12px',
    border: '0px solid black',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin: '0 4vw',
    padding: '2vw',
    width: '25vw',
    backgroundColor: '#fdb676',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '10vw'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}
