import {CardComponent, MemoCardComponent} from "@/app/(home)/components";
import {ScrollArea} from "@/components/ui/scroll-area";
import {useRepos} from "@/app/context/repos.context";
import {ListReposCardComponent} from "@/app/(home)/components/ListRepos/components/list-repos-card.component";

export function ListReposContainer() {
  return (
    <ScrollArea className="flex-grow rounded-md border p-4">
      <div className={'grid grid-cols-5 grid-rows-5 pt-2 gap-5'}>
        <ListReposCardComponent />
      </div>
    </ScrollArea>
  )
}