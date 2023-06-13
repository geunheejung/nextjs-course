const AboutSettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <button>Back</button>
      <div>Title</div>
      {children}
    </div>
  );
};

export default AboutSettingLayout;
