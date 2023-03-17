// import { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try{
//       const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=494b5446f57c4ceea44d6b2f5778ea15');
//       setData(response.data);
//     }catch(e){
//       console.log(e);
//     }
    
//   }
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
//     </div>
//   )
// }

import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  return(
    <>
     <Categories/>
     <NewsList/>
    </>
  )
}

export default App;
