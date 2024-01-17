import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/workouts`);
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, [dispatch, BASE_URL]);

  return (
    <div className="home">
      <div className="workouts">
        {!workouts || !workouts.length ? (
          <div className="workout-details">
            <h4>Please Add Workout From The Form</h4>
          </div>
        ) : (
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))
        )}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
