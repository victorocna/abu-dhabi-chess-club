import React from 'react';

const Maintenance = () => (
  <main className="cover-error min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <div className="error-page-content px-4 grid gap-2 text-white text-center">
      <h1 className="text-4xl font-thin">Maintenance mode</h1>
      <p className="text-xl">We are currently performing some scheduled maintenance.</p>
      <p className="text-xl">We will be back as soon as possible.</p>
    </div>
  </main>
);

export default Maintenance;
