import Head from 'next/head';
import React from 'react'
import fetchData from '../../lib/fetch-data';
import styles from '../../styles/Home.module.css';

type Props = {}

import EmployeeList from './EmployeeList';
export default async function EmployeePage({}: Props) {
  const employees = await fetchData();
  return (
    <>
    <Head>
      <title>Employee management UI</title>
      <meta name="description" content="Employee management UI" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <div className={styles.description}>Manage Employees</div>
      <EmployeeList data={employees} />  
    </main>
  </>
  )
}