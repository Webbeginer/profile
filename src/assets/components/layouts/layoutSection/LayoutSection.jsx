const LayoutSection = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`pt-20 ${className}`}>
      <div className="container mx-auto px-4 font-roboto">
        {children}
      </div>
    </section>
  );
};

export default LayoutSection;
