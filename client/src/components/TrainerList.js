// import { useQuery } from "@apollo/client";
// import { TRAINERS } from "../utils/queries";

function TrainerList() {
  // Uncomment this when we support following a trainer on the backend
  // const { data } = useQuery(TRAINERS)


  return (
    <div><h5>This is a list of the trainers you follow:</h5>

    {/* When we can follow trainers, this needs to be uncommented out
    {data.getTrainerFollows.map(trainer => (
      {trainer}
    ))} */}

    </div>
  )
};

export default TrainerList;