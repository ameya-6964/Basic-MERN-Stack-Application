import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${BASE_URL}/api/workouts`);
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, [BASE_URL]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
