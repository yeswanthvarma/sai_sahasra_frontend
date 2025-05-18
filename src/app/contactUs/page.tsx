import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 md:px-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We&apos;d Love to Hear from You!
        </p>
        <p className="text-sm text-gray-500 mt-6">
          Have questions, need assistance, or want to learn more about our
          services? Our team is here to help. Contact us today and let’s start a
          conversation!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row  bg-white rounded-lg shadow-lg w-full max-w-6xl gap-8 p-4">
        {/* Contact Information Section */}
        <div className="flex-1 bg-[#2E3192] text-white rounded-lg shadow-lg p-6 relative">
          <h2 className="text-xl font-bold mb-6">Contact Information</h2>
          <div className="space-y- mb-20">
            <p className="flex items-center gap-2">
              <Image
                src="/images/contact-us/mail.png"
                alt="Email"
                width={20}
                height={20}
              />
              <span>saisahasragroup@gmail.com</span>
            </p>
            <p className="flex items-center gap-2 ">
              <Image
                src="/images/contact-us/location.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span>
                Plot No. 43/97, Sai Sahasra Homes, Velagapudi,
                Uddandarayunipalem, Amaravathi-522503.
              </span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <Image
                  src="/images/contact-us/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <Image
                  src="/images/contact-us/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <Image
                  src="/images/contact-us/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white p-6">
          <form className="space-y-8">
            {/* Row 1: First Name and Last Name */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <label className="block text-sm font-serif text-gray-900 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-black text-gray-900 placeholder-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-serif text-gray-900 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-black text-gray-900 placeholder-transparent"
                />
              </div>
            </div>

            {/* Row 2: Email and Phone */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <label className="block text-sm font-serif text-gray-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder=""
                  className="w-full border-b border-gray-400 focus:outline-none focus:border-black text-gray-900 placeholder-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-serif text-gray-900 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+91 9614678444"
                  className="w-full border-b border-gray-800 focus:outline-none focus:border-black text-gray-900 font-medium"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-serif text-gray-900 mb-1">
                Message
              </label>
              <textarea
                rows={2}
                placeholder="Write your message.."
                className="w-full border-b border-gray-800  focus:outline-none focus:border-black text-gray-900 placeholder-gray-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-[#2E3192] text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
