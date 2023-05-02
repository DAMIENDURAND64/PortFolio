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
