import React, { PropsWithChildren } from 'react';

const MainFrame: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mainFrame">
      { children }
    </div>
  );
};

export default MainFrame;
