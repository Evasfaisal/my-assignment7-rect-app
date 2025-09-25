
import React, { Suspense } from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import CountBox from './CountBox';
import Main from './component/Main';

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

    </>
  );
};

export default App;
