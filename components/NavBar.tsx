"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { House, SquareUserRound, Map, Menu, Swords } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border flex md:items-center md:justify-center items-end">
      <div className="hidden md:w-full md:flex md:items-center md:justify-center">
        <Button
          className="flex flex-col md:flex-row items-center justify-center bg-red-500 text-white hover:bg-cyan-500 m-2"
          variant="default"
        >
          <a href="/" className="flex items-center justify-evenly h-full">
            {" "}
            <House className="mr-1" /> Home
          </a>
        </Button>
        {/* <a href="/" className="bg-red-500 hover:bg-cyan-500 text-white rounded"> <House /> Home</a> */}
        <Button
          className="flex items-center justify-center bg-red-500 text-white hover:bg-cyan-500 m-2"
          variant="default"
        >
          <a href="/agents" className="flex items-center justify-evenly">
            {" "}
            <SquareUserRound className="mr-1" /> agents
          </a>
        </Button>
        <Button
          className="flex items-center justify-center bg-red-500 text-white hover:bg-cyan-500 m-2"
          variant="default"
        >
          <a href="/maps" className="flex items-center justify-evenly">
            {" "}
            <Map className="mr-1" /> maps
          </a>
        </Button>
        <Button
          className="flex items-center justify-center bg-red-500 text-white hover:bg-cyan-500 m-2"
          variant="default"
        >
          <a href="/weapons" className="flex items-center justify-evenly">
            {" "}
            <Swords className="mr-1" /> Weapons
          </a>
        </Button>
      </div>

      {/* Mobile menu button */}
      <div>
        <Button
          className="md:hidden p-2 rounded hover:bg-gray-800 bg-transparent text-white m-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </Button>
      </div>

      {/* mobile drawer menu */}
      {isOpen && (
        <div className="flex items-center justify-center flex-col">
          <Button
            className="flex items-center justify-center bg-red-500 text-white hover:bg-cyan-500 m-2"
            variant="default"
          >
            <a href="/" className="flex items-center justify-evenly h-full">
              {" "}
              <House className="mr-1" /> Home
            </a>
          </Button>
          {/* <a href="/" className="bg-red-500 hover:bg-cyan-500 text-white rounded"> <House /> Home</a> */}
          <Button
            className="flex items-center justify-center bg-red-500 text-white hover:bg-cyan-500 m-2"
            variant="default"
          >
            <a href="/agents" className="flex items-center justify-evenly">
              {" "}
              <SquareUserRound className="mr-1" /> agents
            </a>
          </Button>
          <Button
            className="flex items-center justify-center bg-red-500 text-white hover:bg-cyan-500 m-2"
            variant="default"
          >
            <a href="/maps" className="flex items-center justify-evenly">
              {" "}
              <Map className="mr-1" /> maps
            </a>
          </Button>

          <Button
            className="flex items-center justify-center bg-red-500 text-white hover:bg-cyan-500 m-2"
            variant="default"
          >
            <a href="/weapons" className="flex items-center justify-evenly">
              {" "}
              <Swords className="mr-1" /> Weapons
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
