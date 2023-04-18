import { useRouter } from 'next/router'
import dados from '../../dados.json'

export default function Post (props){
  const router = useRouter()
  console.log(router.query)

  //pegar o post que tem a data informada como parâmetro
  const post = dados.posts.filter((post) => post.date === router.query.date)
  // const post = dados.posts.filter((post) => post.date === router.query.teste)

  return(
    <div>
      {post.length>0 ? (post.map((post) =>(
        <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
      ))):(
        <p>Nenhum post encontrado</p>
      )}
    </div>
  )
}

// Search Params com Server Side
// import dados from '../../dados.json';

// export const getServerSideProps = (context) => {
//   const posts = dados.posts.filter((post) => post.date === context.query.date);
//   console.log(context.query);

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// export default function Posts(props) {
//   return (
//     <div>
//       {props.posts.length > 0 ? (
//         props.posts.map((post) => (
//           <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
//         ))
//       ) : (
//         <p>Nenhum post encontrado</p>
//       )}
//     </div>
//   );
// }
