"use client"
import {MemoCardComponent} from "@/app/(home)/components";
import {useRepos} from "@/app/context/repos.context";
import {Suspense} from "react";

export function ListReposCardComponent() {
  const {repos }= useRepos();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {repos ? repos?.map(repo => (
        <MemoCardComponent key={repo.id} repo={repo}/>
      )): (<p>Não foram encontrados repositórios para este usuário.</p>)}
    </Suspense>
  )
}