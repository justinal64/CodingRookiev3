import React from "react";
import { HooksAdvanced } from "./hooksadvanced";

export function HooksAdvancedPres() {
  const [width, clicks, keyPressed, isOnline] = HooksAdvanced();
  const status = isOnline ? "Yes 🙂" : "No 😔";
  return (
    <div>
      <p>Window width is {width}</p>
      <p>You have clicked {clicks} times</p>
      <p>Key pressed is {keyPressed}</p>
      <p>Are my World Of Warcraft friends online {status}.</p>
      <p>I used an emoji in a tech talk. Does that make me cool?</p>
    </div>
  );
}
