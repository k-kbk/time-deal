interface ContainerProps {
  children: React.ReactNode;
  containerStyle?: string;
}

export default function Container({
  children,
  containerStyle,
}: ContainerProps) {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-gray-100 py-3 pb-8 ${containerStyle}`}
    >
      {children}
    </section>
  );
}
