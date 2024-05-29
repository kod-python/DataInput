import React from "react";
import { data } from "@/components/CardsData/CardsData";

const Page = ({ params }: { params: { name: string } }) => {
  const user = data.find((user) => user.name === params.name);
  console.log(data);

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Task: {user.task}</p>
          <p>Date: {user.Date}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Page;
