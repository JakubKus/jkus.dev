const author = {
  picture: '/assets/blog/author/jakub.jpg',
  bioLines: [
    'Software things I\'ve learned.',
    'And my projects',
  ],
};

const Avatar = () => {
  return (
    <div className="flex items-center">
      <img src={author.picture} className="w-12 h-12 rounded-full mr-4" alt="author image" />
      <div>
        {author.bioLines.map((line) => (
          <p className="text-base leading-7 tracking-wide">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Avatar;
