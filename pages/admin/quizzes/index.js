import { Link, withAuth } from 'echess/components';
import { QuizList } from 'echess/components/Admin';
import { SearchFilter } from 'echess/components/Filter';
import { useState } from 'react';
import { Layout } from '../../../components';

const Page = () => {
  const [options, setOptions] = useState({});

  return (
    <Layout>
      <div className="flex items-center mb-4">
        <h1 className="font-bold text-2xl mr-2">Quiz list</h1>
        <Link href="/admin/quizzes/add">Add quizzes</Link>
      </div>
      <div className="flex flex-wrap items-center px-6 py-4 bg-white border border-gray-400 my-4 rounded-lg overflow-hidden">
        <SearchFilter label="Search quiz" placeholder="Search by title" setOptions={setOptions} />
      </div>
      <QuizList options={options} />
    </Layout>
  );
};

export default withAuth(Page);
