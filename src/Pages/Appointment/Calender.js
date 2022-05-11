import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Calender({ selected, setSelected }) {
    return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
}
