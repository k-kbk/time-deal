import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Index({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
