import LayoutSection from "../layouts/layoutSection/LayoutSection"
import contactData from "../data/contactData";
import { useState } from "react";
import  { db } from "../firebase/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";



const ContacSection= ()=>{
    const [activeTab, setActiveTab] = useState(contactData.tabs[0].label);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message:""
    });
    const[loading, setLoading] = useState(false);

    const handeChange=(e)=>{
        const prev = {...formData};
        setFormData({
            ...prev,
            [e.target.name]: e.target.value,
        });

    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            await addDoc(collection(db, "contacts"),{
                ...formData,
                createdAt: serverTimestamp(),
            });
            setLoading(false);
            alert("Message sent successfully");
            setFormData({
                name: "",
                email: "",
                message:""
          });
        }catch(err){
            alert('Something went wrong');
            setLoading(false);
            console.log(err);
        }
    }

   
    return (
        <>
        <LayoutSection id="contact" className="mb-20">
            <div className="text-center space-y-4">
                <h4 data-aos="fade-up" className="font-bold text-3xl lg:text-4xl uppercase text-slate-800 dark:text-white">
                {contactData.title}
                </h4>
                <p data-aos="fade-up" className="text-slate-500 dark:text-slate-300 text-base px-6">
                {contactData.subtitle}
                </p>
            </div>

            {/* Tabs */}
            <div data-aos="zoom-in" className="flex flex-wrap justify-center gap-4 mt-10">
                {contactData.tabs.map((tab, index) => {
                const isActive = activeTab === tab.label;
                return (
                    <button
                    key={index}
                    onClick={() => setActiveTab(tab.label)}
                    className={`h-12 w-36 rounded-md shadow-md border flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                        isActive
                        ? "bg-slate-800 text-white dark:bg-white dark:text-slate-900"
                        : "bg-white text-slate-800 dark:bg-slate-700 dark:text-white hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-slate-900"
                    }`}
                    >
                    <i className={tab.icon}></i>
                    <span>{tab.label}</span>
                    </button>
                );
                })}
            </div>

            {/* Content */}
            <div data-aos="zoom-in" className="mt-10 flex justify-center">
                {activeTab === contactData.tabs[0].label && (
                <div className="w-full max-w-xl shadow-md rounded-md p-6 bg-white dark:bg-slate-800">
                    <h5 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                    <i className={contactData.tabs[0].icon}></i>
                    <span>Send Me a Message</span>
                    </h5>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-slate-700 dark:text-slate-200 font-medium">Name</label>
                        <input
                        onChange={handeChange}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full h-12 px-3 border border-slate-300 dark:border-slate-600 rounded-md outline-none bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder:dark:text-slate-400 focus:ring-2 focus:ring-slate-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-slate-700 dark:text-slate-200 font-medium">Email</label>
                        <input
                        onChange={handeChange}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full h-12 px-3 border border-slate-300 dark:border-slate-600 rounded-md outline-none bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder:dark:text-slate-400 focus:ring-2 focus:ring-slate-400"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-slate-700 dark:text-slate-200 font-medium">Message</label>
                        <textarea
                        onChange={handeChange}
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Write something..."
                        className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-md outline-none bg-white dark:bg-slate-700 text-slate-800 dark:text-white placeholder:dark:text-slate-400 focus:ring-2 focus:ring-slate-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`h-12 px-6 rounded-md shadow-md border flex items-center justify-center gap-2 transition-all duration-300
                                    ${loading
                                    ? "bg-gray-400 text-white cursor-not-allowed"
                                    : "text-white bg-slate-800 hover:bg-white hover:text-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                                    }`}
                                      >
                        <span>Send</span>
                        <i className="bx bx-send"></i>
                    </button>
                    </form>
                </div>
                )}

                {activeTab === contactData.tabs[1].label && (
                <div data-aos="zoom-in" className="w-full max-w-xl shadow-md rounded-md p-6 bg-white dark:bg-slate-800">
                    <h5 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                    <i className={contactData.tabs[1].icon}></i>
                    <span>Connect with me</span>
                    </h5>
                    <div className="space-y-4">
                    {contactData.socials.map((item, index) => (
                        <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 dark:bg-slate-700 p-4 rounded-md shadow-sm hover:shadow-md transition duration-300"
                        >
                        <div className="flex items-center gap-4 text-slate-800 dark:text-white text-lg">
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                        </div>
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Visit
                        </a>
                        </div>
                    ))}
                    </div>
                </div>
                )}
            </div>
</LayoutSection>

        </>
    )
};

export default ContacSection;