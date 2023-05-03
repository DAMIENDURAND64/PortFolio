export type NavLink = {
  path: string;
  label: string;
};

export type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export type FormValues = {
  FullName: string;
  email: string;
  phone: number;
  message: string;
};

export type ProjectProps = {
  id: number;
  img: string;
  name: string;
  deployment: string;
  linkGitHub: string;
  tools: string[];
};
