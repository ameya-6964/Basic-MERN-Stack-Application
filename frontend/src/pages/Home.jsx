import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.jsx";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/workouts`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, BASE_URL, user]);

  return (
    <div className="home">
      <div className="workouts">
        {!user && (
          <div className="user-details">
            <h1>Please Login To See Your Workouts</h1>
            <h2>If You Don&apos;t Have Account Please Signup</h2>
          </div>
        )}
        {user && (!workouts || !workouts.length) && (
          <div className="workout-details">
            <h4>Please Add Workout From The Form</h4>
          </div>
        )}
        {user &&
          workouts &&
          workouts.length > 0 &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      {user && <WorkoutForm />}
    </div>
  );
};

export default Home;
