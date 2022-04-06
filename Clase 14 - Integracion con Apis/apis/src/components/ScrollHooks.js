import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  useEffect(() => {
    console.log("Fase de montaje");
  }, []); // <--

  useEffect(() => {
    console.log("Fase de actualizacion");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de desmontaje");
    };
  });

  return (
    <>
      <div>ScrollHooks - useEffect</div>
    </>
  );
}
