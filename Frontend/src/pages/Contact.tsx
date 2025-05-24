import toast from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error('Failed to send message');
            }
        } catch (error) {
            alert('Server error. Please try again later.');
            console.error(error);
        }
    };


    return (
        <>
            <Navbar />
            <div className="p-6 max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Contact;
