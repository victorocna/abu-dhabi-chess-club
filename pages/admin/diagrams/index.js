import { Loading, Tooltip, withAuth } from 'echess/components';
import { AddNew, PgnUpload } from 'echess/components/Diagrams';
import { DiagramsWrapper } from 'echess/components/Lists';
import Router from 'next/router';
import { useState } from 'react';
import store from 'store';
import { Layout } from '../../../components';

const Page = () => {
  const [isLoading, setLoading] = useState(false);

  const handleUpload = (file) => {
    const fileReader = new FileReader();
    fileReader.onloadstart = () => {
      setLoading(true);
    };
    fileReader.onloadend = () => {
      const content = fileReader.result;

      // set PGN to local storage and retrieve it later
      store.set('pgn', content);
      Router.push('/admin/diagrams/upload');
    };
    fileReader.readAsText(file);
  };

  return (
    <Layout>
      {isLoading && <Loading />}
      <div className="flex flex-wrap items-center mb-4">
        <h1 className="font-bold text-2xl mr-2">Diagram list</h1>
        <AddNew />
      </div>
      <PgnUpload
        handleUpload={handleUpload}
        tooltip={
          <Tooltip className="rounded-full bg-white">
            You will be able to add tags and quizzes to any uploaded diagrams. You cannot upload
            more than 300 diagrams at once.
          </Tooltip>
        }
      />
      <DiagramsWrapper />
    </Layout>
  );
};

export default withAuth(Page);
