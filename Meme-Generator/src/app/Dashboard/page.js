import Link from "next/link";
import Image from "next/image";
import Navbar from "../detail/Navbar";
import Footer from "../detail/Footer";
import { getMemes } from '../API/getAPI'

export default async function Dashboard() {
  const data = await getMemes();
  const images = data.data.memes;

  return (
    <div style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBFeO2ZuI4Rprpw5UWfqcLmpaceg4wCp5BQ&usqp=CAU")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-40">
        {images.map(function (item, index) {
          return (
            <div key={index} className="p-2">
              <Link href={`/detail/${item.id}`} key={index} className="border-2 p-2 w-50 h-full m-3 inline-block" rel="noopener noreferrer" passHref>
                <Image src={item.url} alt={item.name} width={100} height={100} className="p-2 w-52 h-52" />
                <span>{item.name}</span>
              </Link>
            </div>
          )
        })}
      </div>

      <Footer />
    </div>
  );
}
