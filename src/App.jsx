
import React, { Suspense } from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import CountBox from './CountBox';
import Main from './component/Main';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

const App = () => {
  const fetchPromise = fetchIssues();


  return (
    <>
<NavBar></NavBar>
<CountBox></CountBox>

    
      <Suspense fallback={<h1>loading....</h1>}>
        <Main  fetchPromise={fetchPromise}></Main>
        </Suspense>


<Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />

    </>
  );
};

export default App;
