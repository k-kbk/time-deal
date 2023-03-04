interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-3">
      {children}
    </div>
  );
}
