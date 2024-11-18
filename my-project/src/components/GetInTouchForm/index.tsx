
import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(e.target.value);
    }

    // Email tesdiqleme funksiyasi
    function isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // form gonderme prosesi
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // email dogrulama kodu
        if (!isValidEmail(email)) {
            alert("Please enter a valid email");
            return;
        }

        // istifadeci melumatlarini gosterme
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // formlari temizlemek
        setName("");
        setEmail("");
        setMessage("");
    }

    return (

        <div className="mt-10  flex">

            <div className="flex flex-col w-[750px]">
                <form onSubmit={handleSubmit} className="mb-4 flex gap-10">
                    <input
                        type="text"
                        className="w-1/2 p-3 border-gray-300  text-black focus:outline-none focus:border-indigo-500"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input
                        type="email"
                        className=" w-1/2 p-3 border-gray-300 text-black focus:outline-none focus:border-indigo-500"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </form>

                <form onSubmit={handleSubmit} className="gap-10 w-full" >
                    <div className="mb-4">
                        <textarea
                            className="w-full p-3 border border-gray-300 text-black focus:outline-none focus:border-indigo-500"
                            placeholder="Message"
                            value={message}
                            onChange={handleMessageChange}
                            rows={4}
                        >
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-max bg-transparent uppercase border-white border-2 hover:bg-white hover:text-black text-white font-semibold py-3 px-10 rounded-3xl transition duration-700">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;

