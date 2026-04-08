import ContactForm from "@/components/contact/ContactForm";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                    <p className="text-gray-500 mt-3">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-2xl p-8">

                    {/* Contact Form */}
                    <ContactForm />

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                Get in touch
                            </h2>
                            <p className="text-gray-500 mt-2">
                                You can reach us through the following details or send us a message using the form.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium text-gray-800">
                                    romaan4244@gmail.com
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-medium text-gray-800">
                                    +92 341 6479008
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Address</p>
                                <p className="font-medium text-gray-800">
                                    Dagi Mukkaram Khan, Tarnab district & Tehsil Charsadda
                                </p>
                            </div>
                        </div>

                        {/* Optional Social Links */}
                        <div className="flex gap-4 pt-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-purple-100 cursor-pointer">
                                <a href="https://roman-gilt.vercel.app/" target="_blank">
                                    <FaGlobe className="text-blue-500" />
                                </a>
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-purple-100 cursor-pointer">
                                <a href="mailto:romaan4244@gmail.com" target="_blank">
                                    <FaEnvelope className="text-red-500" />
                                </a>
                            </div>
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-purple-100 cursor-pointer">
                                <a href="tel:+923416479008" target="_blank">
                                    <FaPhone className="text-green-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}