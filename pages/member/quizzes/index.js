import { useState } from 'react';
import { withAuth } from 'echess/components';
import { QuizFilters, QuizList } from 'echess/components/Member';
import { Tags, Sort, SearchFilter } from 'echess/components/Filter';
import { Layout } from '../../../components';

const Page = () => {
  const [options, setOptions] = useState({});

  return (
    <Layout role="member">
      <div className="bg-white rounded-lg p-4 lg:px-8 border border-gray-400">
        <div className="flex flex-wrap items-center mb-4 gap-2">
          <h2 className="font-bold text-xl w-full md:w-auto md:flex-1 mb-2">My quizzes</h2>
          <Tags id="my-tags-quizzes" setOptions={setOptions} />
          <Sort id="sort-my-quizzes" setOptions={setOptions} />
        </div>
        <div className="my-4">
          <SearchFilter placeholder="Search by title" setOptions={setOptions} />
        </div>
        <QuizFilters setOptions={setOptions} />
        <hr className="my-4" />
        <QuizList options={options} />
      </div>
    </Layout>
  );
};

export default withAuth(Page);
