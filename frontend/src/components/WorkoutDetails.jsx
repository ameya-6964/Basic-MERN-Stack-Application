import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(`${BASE_URL}/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
