import DetailsClient from "./detail"
 import { getMemes } from "@/app/API/getAPI";

  
   export default async function  DetailsServer(props) {
    const { id } = props.params
    const memeId = id
    
  // Server-side logic get Api data
  const res = await getMemes();

  return (
   
      <DetailsClient res={res} id={memeId} />
     
  );
};
      
          
       


