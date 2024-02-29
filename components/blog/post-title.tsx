import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return <h1 className="text-5xl leading-tight mb-2 text-left">{children}</h1>;
};

export default PostTitle;
