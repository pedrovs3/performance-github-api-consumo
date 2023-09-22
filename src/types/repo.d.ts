type Repo = {
  watchers: any;
  forks: any;
  private: any;
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  size: number;
  watchers_count: number;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  }
}
type ReposContextType = {
  repos: Repo[];
  onReposChange: (repos: Repo[]) => void;
}