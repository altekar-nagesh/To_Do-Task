import '../css/main.css'
import DisplayToDo from '../Home/DisplayToDo';
import ToDo from '../Home/ToDo';

function index() {
  return (
    <div>
      <ToDo />
      <DisplayToDo />
      </div>
  );
}

export default index;
