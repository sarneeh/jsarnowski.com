import React from 'react';

export default ({ children }) => (
  <React.Fragment>
    <main className="text-xs lg:text-base relative overflow-hidden">
      {children}
    </main>
    <footer className="flex justify-between bg-main py-2 px-4 text-xs text-white">
      <span>Copyright © 2019 Jakub Sarnowski</span>
      <a href="https://www.gatsbyjs.org">Powered by GatsbyJS</a>
    </footer>
  </React.Fragment>
);
