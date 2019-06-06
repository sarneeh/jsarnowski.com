import React from 'react';

export default ({ children }) => (
  <React.Fragment>
    <main className="text-xs lg:text-base relative overflow-hidden">
      {children}
    </main>
    <footer
      className="flex flex-wrap justify-center sm:justify-between bg-main py-2 px-4 text-white"
      style={{
        fontSize: 16
      }}
    >
      <span className="w-full sm:w-auto text-center">
        Copyright © 2019 Jakub Sarnowski
      </span>
      <a
        className="w-full sm:w-auto text-center"
        href="https://www.gatsbyjs.org"
      >
        Powered by GatsbyJS
      </a>
    </footer>
  </React.Fragment>
);
