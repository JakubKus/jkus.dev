import React from 'react';

type Props = {
  containerRef: React.RefObject<HTMLDivElement>;
};

const ReadingProgress = ({ containerRef }: Props) => {
  const [readingProgress, setReadingProgress] = React.useState(0);

  React.useEffect(() => {
    const scrollListener = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const contentHeight = element.scrollHeight + element.offsetTop - window.innerHeight;
      const windowScrollPosition = window.scrollY;

      if (windowScrollPosition === 0) return setReadingProgress(0);
      if (windowScrollPosition > contentHeight) return setReadingProgress(100);

      setReadingProgress(windowScrollPosition / contentHeight);
    };

    document.addEventListener('scroll', scrollListener);

    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, [containerRef]);

  return (
    <span
      className={`w-full h-[1px] origin-left bg-accent-2 fixed top-navbar desktop:top-desktopNavbar`}
      style={{ transform: `scaleX(${readingProgress})` }}
    />
  );
};

export default ReadingProgress;
