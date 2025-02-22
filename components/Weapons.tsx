"use client";
import NavBar from "@/components/NavBar";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  reloadTimeSeconds: number;
}

interface ShopData {
  cost: number;
  category: string;
}

interface Weapon {
  uuid: string;
  displayName: string;
  displayIcon: string;
  category: string;
  weaponStats?: WeaponStats;
  shopData?: ShopData;
}

const Weapons = () => {
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWeapon, setSelectedWeapon] = useState<Weapon | null>(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => {
        setWeapons(data.data.filter((weapon: Weapon) => weapon.displayIcon));
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching weapons: ", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full flex flex-wrap md:flex-col items-center">
      <div className="p-6 md:w-full w-full flex flex-col md:flex-wrap items-center justify-center">
        {weapons.map((weapon) => (
          <Dialog key={weapon.uuid}>
            <DialogTrigger asChild>
              <div
                onClick={() => setSelectedWeapon(weapon)}
                className="cursor-pointer border-2 border-black/50 bg-black/50 hover:bg-black/70 transition rounded-xl flex flex-col items-center justify-center m-2 p-4"
              >
                <img
                  src={weapon.displayIcon}
                  alt={weapon.displayName}
                  className="w-3/6 md:w-4/6 rounded"
                />
                <h2 className="text-red-500 font-bold text-2xl">
                  {weapon.displayName}
                </h2>
              </div>
            </DialogTrigger>

            {selectedWeapon?.uuid === weapon.uuid && (
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <p className="text-2xl text-red-500 text-center">
                      {selectedWeapon.displayName}
                    </p>
                  </DialogTitle>
                </DialogHeader>
                <img
                  src={selectedWeapon.displayIcon}
                  alt={selectedWeapon.displayName}
                  className="w-full md:w-3/4 rounded mx-auto"
                />
                <p className="text-center">Type: {selectedWeapon.category.replace("EEquippableCategory::", "")}</p>
                <p className="text-center">Fire rate: {selectedWeapon.weaponStats?.fireRate} rounds/sec</p>
                <p className="text-center">Magazine size: {selectedWeapon.weaponStats?.magazineSize} rounds</p>
                <p className="text-center">Reload time: {selectedWeapon.weaponStats?.reloadTimeSeconds}s</p>
                <p className="text-yellow-500">Cost: {selectedWeapon.shopData?.cost} credits</p>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Weapons;