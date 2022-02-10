import React, { useState } from "react";

export default function Card(tello) {
  return (
    <div
      style={{
        backgroundColor: tello.bgColor,
      }}
      className="text-black text-bold border-black items-center space-x-5 
      border-x-4	border-y-2  px-4 py-2 rounded flex flex-nowrap"
    >
      <button
        className="bg-blue-500 hover:bg-blue-700 text-black text-xs font-bold
        py-1 px-2 rounded"
        onClick={() => {
          tello.ubah(tello.data);
          console.log(tello.warna[(tello.data.warna % tello.warna.length) + 1]);
          // 
          // console.log(14 % 5);
          // console.log(5 % 5);
          // console.log(5 % 3);
          // console.log(5 % 2);
          // console.log(7 % 4);
        }}
      >
        COLOR
      </button>

      <button></button>
      <input
        value={tello.data.label}
        className="text-black w-full bg-transparent"
      />
    </div>
  );
}

// const ganti = (i) => {
//   const url = "http://localhost:3005/post";
//   const ctodo = JSON.parse(JSON.stringify(todo));
//   const peyek = ctodo[i].warna++;
//   axios.post(url, peyek).then((respon) => {
//     axios.get(url).then((respon) => {
//       tambahtodo(respon.data);
//     });
//   });

//   tambahtodo(ctodo);
// };
