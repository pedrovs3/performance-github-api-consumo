"use client";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Eye, GitFork, LockKey, Star} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const iconName : {
  [key: string]: string
} = {
  "css": "css3",
  "html": "html5",
  "scss": "sass",
  "c++": "cplusplus"
}

interface CardComponentProps {
  repo: Repo;
}

export function CardComponent({repo} : CardComponentProps) {
  const formatLanguageNameIcon = (language: string): string => {
    const languageFormat = language?.trim().toLowerCase();
    return iconName[languageFormat] || languageFormat;
  }

  return (
    <Link className={"h-full"} key={repo.id} href={repo.html_url} target={"_blank"}>
      <Card className={"h-full flex flex-col"}>
        <CardHeader className={""}>
          <Avatar className={"h-10 w-10"}>
            <AvatarImage src={repo.owner.avatar_url} height={8} width={8} />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <div className={"flex-col"}>
            <CardTitle>{repo.name}</CardTitle>
            <CardDescription>{repo.description}</CardDescription>
          </div>

        </CardHeader>
        <CardContent className={"flex-grow"}>
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
        <CardFooter className={"flex gap-2 items-end"}>
          {repo.language && (
            <Image
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${formatLanguageNameIcon(repo.language)}/${formatLanguageNameIcon(repo.language)}-original.svg`}
              width={24}
              height={24}
              alt={`${repo.language} icon`}
            />
          )}
          <p className={"text-zinc-400"}>{repo.language}</p>
        </CardFooter>
      </Card>
    </Link>
  )
}

export const MemoCardComponent = React.memo(CardComponent);