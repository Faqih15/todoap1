// import React from "react";
// import Card from "./Card";
import { HiPlus } from "react-icons/hi";

export default function Tabel() {
  return (
    <div>
      {props?.todo.map((data, idx) => {
        return (
          <Card
            key={idx}
            bgColor={props.warna[data.warna % props.warna?.length]}
            ubah={props.ubah}
            idx={idx}
            data={data}
          />
        );
      })}
      <form
        onSubmit={props.fungsiTambah}
        className="outline-none bg-white flex items-center space-x-5 border border-black px-4 py-2 rounded"
      >
        <HiPlus />
        <input
          // onSubmit={clearInput}
          name="label"
          type="text"
          className="outline-none w-full"
          placeholder="Ketik tugas anda"
          autoComplete="off"
        />
      </form>
    </div>
  );
}
