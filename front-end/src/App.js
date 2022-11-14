import './App.css';
import SelectMovie from './Pages/SelectMovie';
import SelectSeats from './Pages/SelectSeats';
import TimeShedule from './Pages/TimeShedule';

function App() {
  return (
    <div className='container'>
      <SelectMovie />
      <TimeShedule />
      <SelectSeats />
    </div>

  );
}

export default App;
