import Header from './Header';
import TabBar from './TabBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Index({ children }: LayoutProps) {
  return (
    <div className="bg-gray-100">
      <Header />
      {children}
      <TabBar />
    </div>
  );
}
