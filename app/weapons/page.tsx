"use client";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
import Weapons from "@/components/Weapons";

// interface weaponStats {
//   fireRate: number;
//   magazineSize: number;
//   reloadTimeSeconds: number;
// }

// interface shopData {
//   cost: number;
//   category: string;
// }

// interface weapon {
//   uuid: string;
//   displayName: string;
//   displayIcon: string;
//   category: string;
//   weaponStats?: weaponStats;
//   shopData?: shopData;
// }

const page = () => {
  // const [weapons, setWeapons] = useState<weapon[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [selectedWeapon, setSelectedWeapon] = useState<weapon | null>(null);

  // useEffect(() => {
  //   fetch("https://valorant-api.com/v1/weapons")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWeapons(data.data.filter((weapon: weapon) => weapon.displayIcon));
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log("Error fetching weapons: ", error));
  // }, []);

  // if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full  flex flex-wrap  md:flex-col items-center">
        <NavBar />
      {/* <div className="p-6  md:w-full w-full  flex flex-col  md:flex-wrap items-center justify-center">
        {weapons.map((weapon) => (
          <Dialog key={weapon.uuid}>
            <DialogTrigger asChild>
              <div
                onClick={() => setSelectedWeapon(weapon)}
                className="cursor-pointer border-2 border-black/50 bg-black/50 hover:bg-black/70 transition rounded-xl flex flex-col items-center justify-center m-2 p-4"
              >
                <img
                  src={weapon.displayIcon}
                  alt={weapon.displayIcon}
                  className=" w-3/6 md:w-4/6 rounded"
                />
                <h2 className="text-red-500 font-bold text-2xl">
                  {weapon.displayName}{" "}
                </h2>
              </div>
            </DialogTrigger>

            {selectedWeapon && (
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {" "}
                    <p className="text-2xl text-red-500 text-center">
                      {selectedWeapon.displayName}
                    </p>{" "}
                  </DialogTitle>
                </DialogHeader>
                <img
                  src={selectedWeapon.displayIcon}
                  alt={selectedWeapon.displayName}
                  className="w-2/2 md:w-2/2 rounded mx-2"
                />
                <p className="text-center">
                  {" "}
                  Type:{" "}
                  {selectedWeapon.category.replace(
                    "EEquippableCategory::",
                    ""
                  )}{" "}
                </p>
                <p className="text-center">
                  {" "}
                  Fire rate: {
                    selectedWeapon.weaponStats?.fireRate
                  } rounds/sec{" "}
                </p>
                <p className="text-center">
                  Magazine space: {selectedWeapon.weaponStats?.magazineSize}{" "}
                  rounds
                </p>
                <p className="text-center">
                  Reload time: {selectedWeapon.weaponStats?.reloadTimeSeconds}s
                </p>
                <p className="text-yellow-500">
                  Cost: {selectedWeapon.shopData?.cost} credits{" "}
                </p>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div> */}
      <Weapons />
    </div>
  );
};

export default page;
