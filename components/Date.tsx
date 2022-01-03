import {FC} from "react";
import { parseISO, format } from 'date-fns';

interface IDate {
    dateString: string;
}

const Date: FC<IDate> = (props) => {
    const {dateString} = props;
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Date;