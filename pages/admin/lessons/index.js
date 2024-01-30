import { Link, withAuth } from 'echess/components';
import { LessonList } from 'echess/components/Admin';
import { SearchFilter } from 'echess/components/Filter';
import { useState } from 'react';
import { Layout } from '../../../components';

const Page = () => {
  const [options, setOptions] = useState({});

  return (
    <Layout>
      <div className="flex items-center mb-4">
        <h1 className="font-bold text-2xl mr-2">Lesson list</h1>
        <Link href="/admin/lessons/add">Add lessons</Link>
      </div>
      <div className="flex flex-wrap items-center px-6 py-4 bg-white border border-gray-400 my-4 rounded-lg overflow-hidden">
        <SearchFilter label="Search lesson" placeholder="Search by title" setOptions={setOptions} />
      </div>
      <LessonList options={options} />
    </Layout>
  );
};

export default withAuth(Page);
