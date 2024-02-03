import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-5xl font-extrabold leading-tight md:leading-none mb-2">
      {children}
    </h1>
  );
};

export default PostTitle;
