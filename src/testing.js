// const { data, loading, error } = useFetch(
//   "https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=93"
// );

// if (loading) return <h1>Loading...</h1>;
// if (error) console.log(error);
// console.log(data);
// const obj = data.reciters[0];
// const name = obj.name;
// const moshaf = obj.moshaf[0].name;
//   const mp3Server = data.reciters?.[0].moshaf?.[0].server;
//   const surahList = data.reciters?.[0].moshaf?.[0].surah_list;
//   const surahTotal = data.reciters?.[0].moshaf?.[0].surah_total;
// console.log(name);
// {/* {data.map((d,index) => (
//   <h1>{d.reciters[index]}</h1>
// ))} */}
// {/* <h1>{data.reciters[0].name}</h1> */}
// {/* <h1>{moshaf}</h1> */}

//http://api.alquran.cloud/v1/surah

// function surahAo() {
//   let url = `https://server12.mp3quran.net/maher/Almusshaf-Al-Mojawwad/${sur}.mp3`;
//   return url;
// }
// {data &&
//   data.reciters.map((d) => {
//     return d.moshaf.map((list) => {
//       if (list.id === 249) {
//         return list.surah_list.split(",").map((file) => {
//           return (
//             <audio controls>
//               <source
//                 key={file}
//                 src={
//                   file < 10
//                     ? list.server + "00" + file + ".mp3"
//                     : file > 10 && file < 100
//                     ? list.server + "0" + file + ".mp3"
//                     : list.server + file + ".mp3"
//                 }
//                 type="audio/mp3"
//               />
//               Your browser does not support the audio element.
//             </audio>
//           );
//         });
//       } else {
//         return null;
//       }
//     });
//   })}





// const surahNm = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "19",
//   "20",
//   "21",
//   "22",
//   "23",
//   "24",
//   "25",
//   "26",
//   "27",
//   "28",
//   "29",
//   "30",
//   "31",
//   "32",
//   "33",
//   "34",
//   "35",
//   "36",
//   "37",
//   "38",
//   "39",
//   "40",
//   "41",
//   "42",
//   "43",
//   "44",
//   "45",
//   "46",
//   "47",
//   "48",
//   "49",
//   "50",
//   "51",
//   "52",
//   "53",
//   "54",
//   "55",
//   "56",
//   "57",
//   "58",
//   "59",
//   "60",
//   "61",
//   "62",
//   "63",
//   "64",
//   "65",
//   "66",
//   "67",
//   "68",
//   "69",
//   "70",
//   "71",
//   "72",
//   "73",
//   "74",
//   "75",
//   "76",
//   "77",
//   "78",
//   "79",
//   "80",
//   "81",
//   "82",
//   "83",
//   "84",
//   "85",
//   "86",
//   "87",
//   "88",
//   "89",
//   "90",
//   "91",
//   "92",
//   "93",
//   "94",
//   "95",
//   "96",
//   "97",
//   "98",
//   "99",
//   "100",
//   "101",
//   "102",
//   "103",
//   "104",
//   "105",
//   "106",
//   "107",
//   "108",
//   "109",
//   "110",
//   "111",
//   "112",
//   "113",
//   "114",
// ];
