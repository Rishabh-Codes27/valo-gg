"use client";
import React, { useState, useEffect } from "react";

interface agent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  isPlayableCharacter: boolean;
}

const Test = () => {
  const [agents, setAgents] = useState<agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then((data) => {
        setAgents(
          data.data.filter(
            (agent: agent) => agent.displayIcon && agent.isPlayableCharacter
          )
        );
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching agents: ", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    // <div className="border-2 w-full border-white flex md:flex-wrap p-10 justify-center md:flex-col flex ">
    //   {agents.map((agent) => (
    //     <div
    //       key={agent.uuid}
    //       className="border-2 w-1/6 md:flex-col md:flex-wrap md:w-5/6 rounded-lg m-1 px-4 py-2 flex flex-row flex-wrap"
    //     >
    //       <img
    //         src={agent.displayIcon}
    //         alt={agent.displayName}
    //         className="md:w-[200px] md:h-[200px] h-[100px] w-[100px]   bg-white/10 px-3 py-2 rounded-xl m-1"
    //       />
    //       <div className="border- m-1">
    //         <h2 className="text-2xl font-bold text-cyan-400">
    //           {" "}
    //           {agent.displayName}{" "}
    //         </h2>
    //         <p className="text-sm"> {agent.description} </p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="border-2 w-full border-white flex flex-wrap p-6 justify-center md:flex-col items-center">
      {agents.map((agent) => (
        <div
          key={agent.uuid}
          className="border-2 w-full sm:w-1/2 md:w-5/6 lg:w-1/4 xl:w-4/6 rounded-lg m-2 p-4 flex flex-col md:flex-row md-text-center items-center"
        >
          <img
            src={agent.displayIcon}
            alt={agent.displayName}
            className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[200px] md:h-[200px] bg-white/10 px-3 py-2 rounded-xl m-2"
          />
          <div className="text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">
              {agent.displayName}
            </h2>
            <p className="text-xs sm:text-sm md:text-base">
              {agent.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
