import axios from 'axios';

const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_URL
});
// const URL = 'http://localhost:3000/usuarios';
// const [usuarios, setUsuarios] = useState();
// console.log(URL);

// const fetchApi = async () =>{
//   axios.get(URL)
//     .then(res => {
//       const persons = res.data;
//       setUsuarios(persons);
//     })
// }
// console.log(usuarios)
// useEffect(() => {
//   fetchApi();
// }, []);
export default clientAxios;
