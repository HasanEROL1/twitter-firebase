import Form from "../../components/feed-form"
import List from "./List"


const Main = ({user}) => {
  return (
  <main className="border border-[var(--color-tw-gray)] overflow-y-auto ">
    <Form user = {user}  />

    <List />
  </main>
  )
}

export default Main