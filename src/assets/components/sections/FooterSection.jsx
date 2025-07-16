import footerData from "../data/footerData";

const FooterSection = () => {
    return (
      <div className="border-t border-slate-200 text-white py-4 flex items-center justify-center">
        <p className="text-xl text-slate-500">{footerData.copyright}</p>
      </div>
    );
};
export default FooterSection;