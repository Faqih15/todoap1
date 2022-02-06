import { useEffect, useRef, useState } from "react";
import { HiPlus } from "react-icons/hi";
import Card from "./Card";
import axios from "axios";
import Tabel from "./Tabel";

export default function App() {
  const [todo, tambahtodo] = useState([]);
  const [tabel, plustabel] = useState([]);
  const [warna, gantiwarna] = useState(["red", "orange", "lime"]);

  useEffect(() => {
    const url = "http://localhost:3005/post";
    axios.get(url).then((respon) => {
      tambahtodo(respon.data);
    });
  }, []);

  const ubah = (id, i) => {
    const url = "http://localhost:3005/post/" + id;
    const ctodo = JSON.parse(JSON.stringify(todo));
    const peyek = ctodo[i];
    console.log(peyek);
    axios.patch(url, { warna: peyek.warna + 1 }).then((respon) => {
      axios.get("http://localhost:3005/post").then((respon) => {
        tambahtodo(respon.data);
      });
    });
  };

  const fungsiTambah = (data) => {
    const label = data.target.label.value;
    const url = "http://localhost:3005/post";
    const up = { label, status: "todo", warna: 0 };
    axios
      .post(url, up)
      .then((respon) => {
        axios
          .get(url)
          .then((respon) => {
            tambahtodo(respon.data);
          })
          .catch((y) => {});
      })
      .catch((x) => {});
    data.target.label.value = "";
  };

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="p-10 mx-auto w-full">
        <div className="text-xl text-black font-extrabold">TODO</div>
        <div className=" space-y-5 m-5 w-full">
          {todo?.map((data, idx) => {
            return (
              <Tabel
                key={idx}
                bgColor={warna[data.warna % warna.length]}
                ubah={ubah}
                idx={idx}
                data={data}
              />
            );
          })}

          <form
            onSubmit={fungsiTambah}
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
      </div>
    </div>
  );
}

// const fungsitambah = (e) => {
//   e.preventDefault();
//   const label = e.target.label.value;
//   const ctodo = JSON.parse(JSON.stringify(todo));
//   ctodo.push({ label, warna: 0 });
//   tambahtodo(ctodo);
//   e.target.label.value = "";
// };

// const ganti = () => {
//   setindex(index + 1);
// };

// const ganti = (i) => {
//   const url = "http://localhost:3005/post";
//   const ctodo = JSON.parse(JSON.stringify(todo));
//   ctodo[i].warna++;
//   tambahtodo(ctodo);
// };
