import { format, parseISO } from 'date-fns';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time className="text-xs text-accent-3 tabular-nums" dateTime={dateString}>
      {format(date, 'dd MMM yyyy')}
    </time>
  );
};

export default DateFormatter;
