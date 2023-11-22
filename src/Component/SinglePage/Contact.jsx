
const Contact = () => {
    return (
        <div>
            <div className=" container mx-auto mt-16 text-center">
           <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold">Contact Us</h1>
            <p>We're here to assist you. Please feel free to reach out.</p>
        </div>
    </div>

    <section className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-4">
            You can contact Nexus Nation through various channels:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
           
            <div>
                <h3 className="text-xl font-semibold">General Inquiries</h3>
                <p>Email: <a href="mailto:info@nexusnation.com" className="text-blue-600">info@nexusnation.com</a></p>
                <p>Phone: +1-123-456-7890</p>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold">Customer Support</h3>
                <p>Email: <a href="mailto:support@nexusnation.com" className="text-blue-600">support@nexusnation.com</a></p>
                <p>Phone: +1-800-555-1234</p>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold">Press and Media Inquiries</h3>
                <p>Email: <a href="mailto:media@nexusnation.com" className="text-blue-600">media@nexusnation.com</a></p>
                <p>Phone: +1-987-654-3210</p>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold">Business Partnerships</h3>
                <p>Email: <a href="mailto:partnerships@nexusnation.com" className="text-blue-600">partnerships@nexusnation.com</a></p>
                <p>Phone: +1-888-123-4567</p>
            </div>
        </div>
    </section>
    <section className="container mx-auto my-8 px-4 w-2/4">
        <h2 className="text-2xl font-semibold">Contact Form</h2>
        <p className="mt-4">
            Alternatively, you can use the contact form below to send us a message:
        </p>
        <form className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="name" className="block font-semibold">Name</label>
                    <input type="text" id="name" name="name" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" required></input>
                </div>
                <div>
                    <label for="email" class="block font-semibold">Email</label>
                    <input type="email" id="email" name="email" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" required></input>
                </div>
            </div>
            <div>
                <label for="phone" className="block font-semibold">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"></input>
            </div>
            <div>
                <label for="message" className="block font-semibold">Message</label>
                <textarea id="message" name="message" className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none">Submit</button>
        </form>
    </section>

    


   
        </div>
        
        </div>
    );
};

export default Contact;