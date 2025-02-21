"use client";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";

interface weaponStats {
  fireRate: number;
  magazineSize: number;
  reloadTimeSeconds: number;
}

interface shopData {
  cost: number;
  category: string;
}

interface weapon {
  uuid: string;
  displayName: string;
  displayIcon: string;
  category: string;
  weaponStats?: weaponStats;
  shopData?: shopData;
}

const page = () => {
  const [weapons, setWeapons] = useState<weapon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => {
        setWeapons(data.data.filter((weapon: weapon) => weapon.displayIcon));
        setLoading(false);
      })
      .catch((error) => console.log("Error fetching weapons: ", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="border-2 w-full border-white flex flex-wrap  md:flex-col items-center">
      <NavBar />
      <div className="p-6 w-full border-2 border-red-500 flex flex-col  md:flex-wrap items-center justify-center">
        {weapons.map((weapon) => (
          <div
            key={weapon.uuid}
            className="w-2/2 md:w4/6 border-2 flex flex-col md:flex-row text-center items-center justify-center px-8 py-4 m-2 rounded-xl"
          >
            <img
              src={weapon.displayIcon}
              alt={weapon.displayName}
              className=" w-3/6 md:w-4/6 bg-white/10 rounded"
            />
            <div className="w-2/6">
              <h2 className="text-red-500 font-bold text-2xl">
                {" "}
                {weapon.displayName}{" "}
              </h2>
              <p> {weapon.category.replace("EEquippableCategory::", "")} </p>
              {weapon.shopData && <p> Cost: {weapon.shopData.cost} credits </p>}

              {weapon.weaponStats && (
                <div>
                  <p> Fire rate: {weapon.weaponStats.fireRate} rounds/sec </p>
                  <p>Magzine size: {weapon.weaponStats.magazineSize} rounds</p>
                  <p>
                    Reload time: {weapon.weaponStats.reloadTimeSeconds} seconds
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

// "use client";
// import NavBar from "@/components/NavBar";
// import React, { useState, useEffect } from "react";
// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// interface WeaponStats {
//   fireRate: number;
//   magazineSize: number;
//   reloadTimeSeconds: number;
// }

// interface ShopData {
//   cost: number;
//   category: string;
// }

// interface Weapon {
//   uuid: string;
//   displayName: string;
//   displayIcon: string;
//   category: string;
//   weaponStats?: WeaponStats;
//   shopData?: ShopData;
// }

// const Page = () => {
//   const [weapons, setWeapons] = useState<Weapon[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);

//   useEffect(() => {
//     fetch("https://valorant-api.com/v1/weapons")
//       .then((res) => res.json())
//       .then((data) => {
//         setWeapons(data.data.filter((weapon: Weapon) => weapon.displayIcon));
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching weapons: ", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center text-white text-lg">Loading...</p>;

//   return (
//     <div className="border-2 w-full border-white flex flex-wrap md:flex-col items-center">
//       <NavBar />
//       <div className="p-6 w-full border-2 border-red-500 flex flex-col items-center justify-center">
//         {weapons.map((weapon) => (
//           <Dialog key={weapon.uuid}>
//             <DialogTrigger asChild>
//               <div
//                 onClick={() => setSelectedWeapon(weapon)}
//                 className="w-full md:w-4/6 border-2 flex flex-col text-center md:flex-row items-center justify-between px-8 py-4 m-2 rounded-xl cursor-pointer bg-black/50 hover:bg-black/70 transition"
//               >
//                 <img src={weapon.displayIcon} alt={weapon.displayName} className="w-4/6 md:w-3/6 bg-white/10 rounded" />
//                 <h2 className="text-red-500 font-bold text-2xl">{weapon.displayName}</h2>
//               </div>
//             </DialogTrigger>
//             {selectedWeapon && (
//               <DialogContent className="bg-black border-white text-white p-6">
//                 <DialogHeader>
//                   <DialogTitle className="text-red-500 text-2xl">{selectedWeapon.displayName}</DialogTitle>
//                 </DialogHeader>
//                 <img
//                   src={selectedWeapon.displayIcon}
//                   alt={selectedWeapon.displayName}
//                   className="w-4/6 mx-auto mb-4"
//                 />
//                 <p className="text-sm text-gray-300">
//                   Type: {selectedWeapon.category.replace("EEquippableCategory::", "")}
//                 </p>
//                 {selectedWeapon.shopData && (
//                   <p className="text-sm text-yellow-400">Cost: {selectedWeapon.shopData.cost} credits</p>
//                 )}
//                 {selectedWeapon.weaponStats && (
//                   <div className="text-sm text-gray-400 mt-2">
//                     <p>Fire Rate: {selectedWeapon.weaponStats.fireRate} rounds/sec</p>
//                     <p>Magazine Size: {selectedWeapon.weaponStats.magazineSize} rounds</p>
//                     <p>Reload Time: {selectedWeapon.weaponStats.reloadTimeSeconds}s</p>
//                   </div>
//                 )}
//               </DialogContent>
//             )}
//           </Dialog>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;
