import { useEffect, useState } from "react";
import { HiPlus } from "react-icons/hi";
import Card from "./Card";
import axios from "axios";
// import Tabel from "./Tabel";

export default function App() {
  const [card, tambahcard] = useState([]);
  // const [tabel, plustabel] = useState([]);
  const [warna, gantiwarna] = useState([
    "red",
    "orange",
    "lime",
    "purple",
    "yellow",
  ]);

  useEffect(() => {
    const url = "http://localhost:3005/post";
    axios.get(url).then((respon) => {
      tambahcard(respon.data);
    });
  }, []);

  const ubah = (id) => {
    const url = "http://localhost:3005/post/" + id.id;
    // const ccard = JSON.parse(JSON.stringify(card));
    // const card = ccard[index]
    // console.log(id.warna);
    axios.patch(url, { warna: id.warna + 1 }).then((respon) => {
      axios.get("http://localhost:3005/post").then((respon) => {
        tambahcard(respon.data);
      });
    });
  };

  const fungsipluscard = (data) => {
    data.preventDefault();
    const label = data.target.label.value;
    const url = "http://localhost:3005/post";
    const up = { label, status: "card", warna: 0 };
    axios
      .post(url, up)
      .then((respon) => {
        axios
          .get(url)
          .then((respon) => {
            tambahcard(respon.data);
          })
          .catch((y) => {});
      })
      .catch((x) => {});
    data.target.label.value = "";
  };

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="p-10 mx-auto w-full">
        <div className="text-xl text-black font-extrabold">Todo</div>
        <div className=" space-y-5 m-5 w-full">
          {/* <Tabel
            fungsipluscard={fungsipluscard}
            ubah={ubah}
            card={card}
            tambahcard={tambahcard}
            warna={warna}
          /> */}
          {card?.map((data, idx) => {
            return (
              <Card
                key={idx}
                bgColor={warna[data.warna % warna.length]}
                ubah={ubah}
                idx={idx}
                data={data}
                warna={warna}
              />
            );
          })}
          <form
            onSubmit={fungsipluscard}
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

// const fungsipluscard = (e) => {
//   e.preventDefault();
//   const label = e.target.label.value;
//   const ccard = JSON.parse(JSON.stringify(card));
//   ccard.push({ label, warna: 0 });
//   tambahcard(ccard);
//   e.target.label.value = "";
// };

// const ganti = (i) => {
//   const url = "http://localhost:3005/post";
//   const ccard = JSON.parse(JSON.stringify(card));
//   ccard[i].warna++;
//   tambahcard(ccard);
// };

// const ganti = () => {
//   gantiwarna(warna + 1);
// };

{
  /* <div>
  <form
    onSubmit={fungsiplustabel}
    className="outline-none bg-white flex items-center space-x-5 border border-black px-4 py-2 rounded"
  >
    <input
      name="hasil"
      type="text"
      className="outline-none w-full"
      placeholder="Ketik Group/Tabel baru"
      autoComplete="off"
    ></input>
  </form>
</div>; */
}

// const ganti = (i) => {
//   // const url = "http://localhost:3005/post";
//   const ccard = JSON.parse(JSON.stringify(card));
//   ccard[i].warna++;
//   gantiwarna(ccard);
// };

// const ganti = (i) => {
//   gantiwarna(warna + 1);
// };

// console.log(card,"card");

// const fungsiplustabel = (data) => {
//   const hasil = data.target.hasil.value;
//   console.log(hasil);
// };
