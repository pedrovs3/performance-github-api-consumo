"use client";
import {CardComponent, MemoCardComponent} from "@/app/(home)/components";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useRepos} from "@/app/context/repos.context";

export function ListReposComponent() {
  const {repos, onReposChange} = useRepos();

  return (
    <ScrollArea className="flex-grow rounded-md border p-4">
      <div className={'grid grid-cols-5 grid-rows-5 pt-2 gap-5'}>
        {repos ? repos?.map(repo => (
          <MemoCardComponent key={repo.id} repo={repo}/>
        )): (<p>Não foram encontrados repositórios para este usuário.</p>)}
      </div>
    </ScrollArea>
  )
}