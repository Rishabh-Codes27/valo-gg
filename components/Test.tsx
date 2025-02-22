"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogHeader, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";


interface Role {
  displayName: string;
  description: string;
  displayIcon: string;
}

interface Abilities {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string | null;
}

interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  isPlayableCharacter: boolean;
  role: Role;
  abilities: Abilities[];
}

const Test = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then((data) => {
        setAgents(
          data.data.filter(
            (agent: Agent) => agent.displayIcon && agent.isPlayableCharacter
          )
        );
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching agents: ", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className=" w-full border-white flex flex-wrap p-6 justify-center md:flex-col items-center">
      {agents.map((agent) => (
        <Dialog key={agent.uuid}>
          <DialogTrigger asChild>
            <div className="border-2 w-full sm:w-1/2 md:w-5/6 lg:w-1/4 xl:w-4/6 rounded-lg m-2 p-4 flex flex-col md:flex-row items-center cursor-pointer">
              <img src={agent.displayIcon} alt={agent.displayName} className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[200px] md:h-[200px] bg-white/10 px-3 py-2 rounded-xl m-2" />

              <div className="text-center md:text-left">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">{agent.displayName}</h2>
                <p className="text-xs sm:text-sm md:text-base">{agent.description}</p>
              </div>
            </div>
          </DialogTrigger>

          <DialogContent className="h-5/6 overflow-scroll">
            <DialogHeader>
              <DialogTitle>
                <p> {agent.displayName} </p>
              </DialogTitle>
            </DialogHeader>

            <img src={agent.displayIcon} alt={agent.displayName} className="w-32 h-32 mx-auto my-4" />
            <p className="text-sm">{agent.description}</p>
            <h3 className="text-lg font-semibold mt-4">Abilities</h3>
            {agent.abilities.map((ability) => (
              <div key={ability.slot} className="flex items-center space-x-4">
                {ability.displayIcon && <img className="w-10 h-10" src={ability.displayIcon} alt={ability.displayName} />}
                <div>
                  <p className="font-medium">{ability.displayName}</p>
                  <p className="text-xs">{ability.description}</p>
                </div>
              </div>
            ))}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Test;

// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Dialog,
//   DialogHeader,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// interface Role {
//   displayName: string;
//   description: string;
//   displayIcon: string;
// }

// interface Abilities {
//   slot: string;
//   displayName: string;
//   description: string;
//   displayIcon: string | null;
// }

// interface Agent {
//   uuid: string;
//   displayName: string;
//   description: string;
//   displayIcon: string;
//   isPlayableCharacter: boolean;
//   role: Role;
//   abilities: Abilities[];
// }

// const Test = () => {
//   const [agents, setAgents] = useState<Agent[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://valorant-api.com/v1/agents")
//       .then((res) => res.json())
//       .then((data) => {
//         setAgents(
//           data.data.filter(
//             (agent: Agent) => agent.displayIcon && agent.isPlayableCharacter
//           )
//         );
//         setLoading(false);
//       })
//       .catch((error) => console.log("Error fetching agents: ", error));
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="border-2 w-full border-white flex flex-wrap p-6 justify-center md:flex-col items-center">
//       {agents.map((agent) => (
//         <Dialog key={agent.uuid}>
//           <DialogTrigger asChild>
//             <div className="border-2 w-full sm:w-1/2 md:w-5/6 lg:w-1/4 xl:w-4/6 rounded-lg m-2 p-4 flex flex-col md:flex-row items-center cursor-pointer">
//               <img
//                 src={agent.displayIcon}
//                 alt={agent.displayName}
//                 className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[200px] md:h-[200px] bg-white/10 px-3 py-2 rounded-xl m-2"
//               />
//               <div className="text-center md:text-left">
//                 <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">
//                   {agent.displayName}
//                 </h2>
//                 <p className="text-xs sm:text-sm md:text-base">
//                   {agent.description}
//                 </p>
//               </div>
//             </div>
//           </DialogTrigger>

//           <div className="">
//             <DialogContent className="h-4/6 overflow-scroll">
//               <DialogHeader>
//                 <DialogTitle>{agent.displayName}</DialogTitle>
//               </DialogHeader>
//               <img
//                 src={agent.displayIcon}
//                 className="w-32 h-32 mx-auto my-4"
//                 alt={agent.displayName}
//               />
//               <p className="text-sm">{agent.description}</p>
//               <h3 className="text-lg font-semibold mt-4">Abilities</h3>
//               {agent.abilities.map((ability) => (
//                 <div key={ability.slot} className="flex items-center space-x-4">
//                   {ability.displayIcon && (
//                     <img
//                       src={ability.displayIcon}
//                       className="w-10 h-10"
//                       alt={ability.displayName}
//                     />
//                   )}
//                   <div>
//                     <p className="font-medium">{ability.displayName}</p>
//                     <p className="text-xs">{ability.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </DialogContent>
//           </div>
//         </Dialog>
//       ))}
//     </div>
//   );
// };

// export default Test;
