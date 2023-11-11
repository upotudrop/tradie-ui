import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'lodash'
import { JobInvitations } from './JobInvitations';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/jobs').then((response) => {
      if(response.status === 200) {
        setJobs(response.data)
      }
    })
  }, [])



  return (
    <div className="App">

      <JobInvitations jobs={jobs} />
    </div>
  );
}

export default App;
