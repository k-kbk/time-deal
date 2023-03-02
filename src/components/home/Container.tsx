interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="my-3 flex flex-col items-center justify-center bg-gray-100">
      {children}
    </div>
  );
}
