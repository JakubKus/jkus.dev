import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-auto px-pageSpacing max-w-content box-content">{children}</div>;
};

export default Container;
