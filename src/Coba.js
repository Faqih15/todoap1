import React, { Component } from "react";

export default function Coba(props) {
  return (
    <div style={{backgroundColor:props.color}}>
      <label>{props.color}</label>
    </div>
  );
}
