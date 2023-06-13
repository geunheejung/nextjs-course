const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <ol>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ol>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default AboutLayout;
