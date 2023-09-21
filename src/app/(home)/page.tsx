"use client";
import {Input} from "@/components/ui/input";
import {Suspense, useCallback, useEffect, useMemo, useState} from "react";
import axios from "axios";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {GitFork, LockKey, Star, Eye} from "@phosphor-icons/react"

export default function Home() {
  const [name, setName] = useState("pedrovs3");
  const [repos, setRepos] = useState<any[]>();

  const handleSearchRepos = useCallback(async () => {
    const response = await axios.get(`https://api.github.com/users/${name}/repos`);
    setRepos(response.data);
  }, [name]);

  return (
    <main className="flex w-full h-full min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full h-full">
      <div className={"w-full"}>
        <h1 className="text-4xl font-bold text-center pb-5">Github Repos for: {name}</h1>
        <div className={"flex gap-2 w-full"}>
          <Input className={"flex-grow"} placeholder="Digite seu nome" value={name} onChange={e => setName(e.target.value)}/>
          <Button variant={"default"} onClick={handleSearchRepos}>Pesquisar</Button>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <div className={'grid grid-cols-5 grid-rows-5 pt-2 gap-5'}>
            {repos?.map(repo => (
              <Link className={"h-full"} key={repo.id} href={repo.html_url} target={"_blank"}>
                <Card className={"h-full"}>
                  <CardHeader>
                    <CardTitle>{repo.name}</CardTitle>
                    <CardDescription>{repo.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <li className="flex items-center gap-2">
                      <LockKey size={24} weight="regular" />Private: {repo.private ? "Sim" : "Não"}
                    </li>
                    <li className="flex items-center gap-2">
                      <GitFork size={24} weight="regular" />Forks: {repo.forks}
                    </li>
                    <li className="flex items-center gap-2">
                      <Star size={24} weight="regular" />Stars: {repo.stargazers_count}
                    </li>
                    <li className="flex items-center gap-2">
                      <Eye size={24} weight="regular" />Watchers: {repo.watchers}
                    </li>
                  </CardContent>
                  <CardFooter>
                    <p>{repo.language}</p>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </Suspense>
      </div>
      </div>
    </main>
  )
}
