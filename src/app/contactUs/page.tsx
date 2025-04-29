


export default function ContactUs() {
    return (
        <div className="min-h-screen bg-[#F5F7FF] flex flex-col items-center py-8 px-4 md:px-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
                <p className="text-lg text-gray-600 mt-4">We&apos;d Love to Hear from You!</p>
                <p className="text-sm text-gray-500 mt-2">
                    Have questions, need assistance, or want to learn more about our services? 
                    Our team is here to help. Contact us today and let’s start a conversation!
                </p>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
                {/* Contact Information Section */}
                <div className="flex-1 bg-blue-700 text-white rounded-lg shadow-lg p-6 relative">
                    <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                        <p className="flex items-center gap-2">
                            {/* <PhoneIcon width={20} height={20} /> */}
                            <span>+91 9614678444, +91 9000454366</span>
                        </p>
                        <p className="flex items-center gap-2">
                            {/* <EmailIcon width={20} height={20} /> */}
                            <span>saisahasragroup@gmail.com</span>
                        </p>
                        <p className="flex items-center gap-2">
                            {/* <LocationIcon width={20} height={20} /> */}
                            <span>
                                Plot No. 43/97, Sai Sahasra Homes, Velagapudi, Uddandarayunipalem, Amaravathi-522503.
                            </span>
                        </p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="absolute bottom-4 left-4 flex space-x-4">
                        {/* <TwitterIcon width={24} height={24} className="cursor-pointer" />
                        <InstagramIcon width={24} height={24} className="cursor-pointer" />
                        <InstagramIcon width={24} height={24} className="cursor-pointer" /> */}
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
                    <form className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="+91 9614678444"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                rows={4}
                                placeholder="Write your message..."
                            ></textarea>
                        </div>
                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-blue-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
