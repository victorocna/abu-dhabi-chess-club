import { withAuth } from 'echess/components';
import { SearchFilter } from 'echess/components/Filter';
import { Members } from 'echess/components/Teacher';
import { useState } from 'react';
import { Layout } from '../../../components';

const Page = () => {
  const [options, setOptions] = useState({});

  return (
    <Layout role="teacher">
      <div className="flex items-center mb-4">
        <h1 className="font-bold text-2xl mr-2">Member list</h1>
      </div>
      <div className="flex flex-wrap items-center px-6 py-4 bg-white border border-gray-400 my-4 rounded-lg overflow-hidden">
        <SearchFilter
          label="Search member"
          placeholder="Search by name or email"
          setOptions={setOptions}
        />
      </div>
      <Members options={options} />
    </Layout>
  );
};

export default withAuth(Page);
