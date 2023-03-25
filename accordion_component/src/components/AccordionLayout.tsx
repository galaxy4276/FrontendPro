import React, {PropsWithChildren} from 'react';

const AccordionLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <section className="accordionLayout">
    { children }
  </section>
);

export default AccordionLayout;

