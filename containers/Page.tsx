interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string
}

const PageContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={`h-screen w-screen bg-gray-800 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
