import React from 'react';

interface Props {
  title: string;
  subTitle: string;
  maxWidth?: number;
}

const Title: React.FC<Props> = ({ title, subTitle, maxWidth  }) => (
  <div className="title base-font" style={{ maxWidth, textAlign: 'center' }}>
    <h1>{title}</h1>
    <h3>{subTitle}</h3>
  </div>
);

export default Title;
