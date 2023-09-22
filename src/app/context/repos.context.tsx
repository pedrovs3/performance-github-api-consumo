"use client"
import React from "react";



const ReposContext = React.createContext<ReposContextType>({} as ReposContextType);
ReposContext.displayName = 'ReposContext';

export const ReposProvider = ({children} : { children: React.ReactNode}) => {
  const [repos, setRepos] = React.useState<Repo[]>([]);

  const onReposChange = (repos: Repo[]) => {
    setRepos(repos);
  }

  return (
    <ReposContext.Provider value={{repos, onReposChange}}>
      {children}
    </ReposContext.Provider>
  )
}

export const useRepos = () => {
  const context = React.useContext(ReposContext);
  if (!context) {
    throw new Error('useRepos must be used within a ReposProvider');
  }
  return {...context};
}




