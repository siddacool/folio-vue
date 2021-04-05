import * as dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);

dayjs.tz.setDefault('Asia/Culcutta');

export const formattedDate = (date, format = 'DD/MM/YYYY HH:mm:ss') =>
  dayjs(date).format(format);
