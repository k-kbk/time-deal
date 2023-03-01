interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mt-1 mb-[3.75rem] flex flex-col items-center justify-center bg-gray-100">
      {children}
    </div>
  );
}
