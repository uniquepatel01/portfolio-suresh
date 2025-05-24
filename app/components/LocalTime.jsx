"use client";
import React, { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState(new Date());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Set to true after mount
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!hasMounted) return null;

  return (
    <p className="m-0 ml-10 font-mono font-bold mr-10">
      {time.toLocaleTimeString()} IST
    </p>
  );
}