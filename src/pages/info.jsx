import React from "react";
import Title from "../components/Title/Title";

const Info = (props) => {
  return (
    <div className="info">
      <Title title="Info Page"/>
      <h2>Name: {props.name}</h2>

      <h3>How do you use Todo effectively?</h3>
      <p><b>Step 1.</b>Write down all of the tasks that you need to complete. If they're large tasks,<br/> break out the first action step, and write this down with the larger task.</p>
       <p><b>Step 2:</b>Run through these tasks allocating priorities from A (very important, or very urgent) <br/> to F (unimportant, or not at all urgent).</p>
    </div>
  );
};

export default Info;
