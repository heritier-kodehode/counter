import React from "react";
import { useContext } from "react";
import { CounterContext } from "../contextState/counterContext";
import CounterContextPage from "../components/CounterContext";

export default function Home() {
  return (
    <div>
      <CounterContextPage />
    </div>
  );
}
