import markdownStyles from "./markdown-styles.module.css";
import Avatar from './avatar';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <hr className="border-black mb-6" />
      <div className="block mb-6">
        <Avatar />
      </div>
    </div>
  );
};

export default PostBody;
