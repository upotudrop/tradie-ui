import { useState } from 'react';
import { JobInvitations } from './Jobs/JobInvitations'
import { JobOptionKeys } from './types';
import { AcceptedJobs } from './Jobs/AcceptedJobs';
import { JobOptions } from './Jobs/JobOptions';
import { JOB_OPTION_ACCEPTED_KEY, JOB_OPTION_INVITED_KEY } from './constants';

function App() {
  const [optionKey, setOptionKey] = useState<JobOptionKeys>(JOB_OPTION_INVITED_KEY);

  const onChangeOption = (key: JobOptionKeys) => {
      setOptionKey(key);
  }

  return (
    <section className="root-container">
      <JobOptions 
      onChangeOption={onChangeOption}
      optionKey={optionKey}
      >
        {optionKey === JOB_OPTION_INVITED_KEY ? <JobInvitations /> : null}
        {optionKey === JOB_OPTION_ACCEPTED_KEY ? <AcceptedJobs /> : null}
      </JobOptions>
    </section>
  );
}

export default App;
