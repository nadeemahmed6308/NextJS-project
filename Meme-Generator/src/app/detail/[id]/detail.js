// // components/DetailsClient.js
// "use client"
// import Image from "next/image";
// import { useEffect, useState } from 'react';

// export default function DetailsClient(props) {
//   const { meme } = props;
//   const id = meme.id;
//   console.log(meme, id);
//   const [text1, settext1] = useState();
//   const [text2, settext2] = useState();

//   const [showInput, setshowInput] = useState(false);
//   const [imageUrl, setimageUrl] = useState();
//   const [selectedMemeUrl, setSelectedMemeUrl] = useState('');

//   useEffect(() => {
//     fetchMeme();
//   }, []);

//   async function fetchMeme() {
//     setSelectedMemeUrl(meme.url);
//   }

//   async function generateMeme() {
//     const res = await fetch(
//       `https://api.imgflip.com/caption_image?template_id=${id}&username=NadeemAhmed&password=nadeem12&text0=${text1}&text1=${text2}`
//     );
//     const data = await res.json();
//     console.log(data);
//     if (data.success) {
//       setimageUrl(data.data.url);
//     } else {
//       alert(data.error_message);
//     }
//   }

//   async function downloadMeme() {
//     if (imageUrl) {
//       const response = await fetch(imageUrl);
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(new Blob([blob]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'generatedMeme.png');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       alert('No generated meme to download.');
//     }
//   }

//   return (<div>
//     <div className="w-screen flex flex-wrap">

//       {/* Selected Meme */}
//       <div className="w-1/2 border-2 text-center text-xl p-2 my-3">
//         <h3>{meme.name}</h3>
//         <Image width={500} height={300} src={selectedMemeUrl} className="w-full h-96 p-2" alt="Selected Meme" />
//         <button onClick={() => setshowInput(true)} className="border-2 w-full p-3 bg-blue-400 text-white my-2">
//           Add Text
//         </button>
//       </div>

//       {/* Generated Meme */}
//       {imageUrl && (
//         <div className="w-1/2 border-2 text-center text-xl p-2 my-3">
//           <Image width={500} height={300} className="w-full h-96 p-2 mt-8" src={imageUrl} alt="Generated Meme" />
//           <button onClick={downloadMeme} className="border-2 w-full p-3 bg-blue-400 text-white my-2">
//             Download Meme
//           </button>
//         </div>
//       )}


//     </div>

//      {/* Input Section */}
//         <div className="w-1/2  border-2 text-center text-xl p-2 m-auto">
//           {showInput && (<>
//           <div className="mb-4">
//             <input
//               className="h-12 w-full p-2 border border-black rounded"
//               type="text"
//               id="text1"
//               value={text1}
//               onChange={(e) => settext1(e.target.value)}
//               placeholder="Enter First Text"
//             />
//           </div>

//           <div className="mb-4">
//             <input
//               className="h-12 w-full p-2 border border-black rounded"
//               type="text"
//               id="text2"
//               value={text2}
//               onChange={(e) => settext2(e.target.value)}
//               placeholder="Enter Second Text"
//             />
//           </div>

//           <button onClick={generateMeme} className="border-2 w-full p-3 bg-blue-400 text-white my-2">
//             Generate Meme
//           </button>
//           </>)}
//         </div> 

//     </div>
//   );
// }
/// old  code 

////////////////////////////////////////////////////////////////////////////////////////


'use client';
import { useEffect, useState } from 'react';
import { getinputs } from '@/app/API/getAPI';
import { saveAs } from 'file-saver';
import Image from 'next/image';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function DetailsClient({ res, id }) {
  const [outputImage, setOutputImage] = useState();
  const [result, setResult] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const values = ['first', 'second', 'third', 'fourth', 'fifth'];

  useEffect(() => {
    getRes();
  }, []);

  const getRes = async () => {
    const response = res.data.memes.filter(element => element.id == id);
    setResult(response);
  };

  const changeImage = async (e) => {
    e.preventDefault();

    let arr = [];

    for (let i = 0; i < result[0]?.box_count; i++) {
      arr.push(e.target[i].value);
    }

    const response = await getinputs(id, arr);

    setOutputImage(response.data.url);
  };

  return (
    <div>
      <Navbar />
      <div className="w-screen flex flex-wrap">
        {/* Selected Meme */}
        <div className="w-1/2 border-2 text-center text-xl p-2 my-3">
          <h3>{result[0]?.name}</h3>
          {result[0]?.url &&
            <Image width={500} height={300} className="w-full h-96 p-2" src={result[0]?.url} alt="Selected Meme" />
          }
          {result[0]?.url &&
            <button onClick={() => { setShowInput(true); }} className="border-2 w-full p-3 bg-blue-400 text-white my-2">
              Add Text
            </button>
          }
        </div>


        {/* Agar 'outputImage' mojood hai, toh "Download" button dikhaya jayega. */}
        {outputImage && (
          <div className="w-1/2 border-2 text-center text-xl p-2 my-3">
            <Image className="w-full h-96 p-2 mt-8" width={500} height={300} src={outputImage} alt="Generated Meme" />
            <button className="border-2 w-full p-3 bg-blue-400 text-white my-2" onClick={() => saveAs(outputImage, `${result[0]?.name} meme`)}>
              Download Meme
            </button>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="w-1/2 border-2 text-center text-xl p-2 m-auto">
        {showInput && (
          <form onSubmit={changeImage}>
            {Array.from({ length: result[0]?.box_count }, (_, index) => (
              <div key={index} className="mb-4">
                <input className="h-12 w-full p-2 border border-black rounded" type="text" required placeholder={`Enter text ${values[index]}`} />
              </div>
            ))}
            {/* "Generate Meme" button jo form submit karega. */}
            <button className="border-2 w-full p-3 bg-blue-400 text-white my-2" type='submit'>
              Generate Meme
            </button>
          </form>
        )}
      </div>
      <br /><br />
      <Footer />
    </div>
  );
}
