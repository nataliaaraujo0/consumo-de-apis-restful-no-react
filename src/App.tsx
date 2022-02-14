import { useFetch } from "./hook/useFetch"

 type Repository = {
   full_name:string;
   description: string;
 }
function App() {
const {data: repositories} = useFetch<Repository[]>('https://api.github.com/users/nataliaaraujo0/repos')

  return (
    <ul>
      {repositories?.map( repo => {
        return(
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <strong>{repo.description}</strong>
          </li>
        )
      })}
    </ul>
  )
}
export default App
 