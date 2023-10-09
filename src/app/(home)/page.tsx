import { FormSearch} from "@/app/(home)/components";
import { ListReposContainer} from "@/app/(home)/components/ListRepos/list-repos.component";

export default function Home() {
  return (
    <main className="flex w-full h-screen flex-col items-center justify-between p-24">
    <div className={"w-full h-full gap-2 flex flex-col"}>
      <h1 className="text-4xl font-bold text-center pb-5">Github Repos</h1>
      <FormSearch/>

      <ListReposContainer />
    </div>
    </main>
  )
}
