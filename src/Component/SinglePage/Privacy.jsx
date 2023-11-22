
const Privacy = () => {
    return (
        <div className=" container mx-auto mt-16">
             <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold text-center">Privacy Policy</h1>
            <p className="text-center">Your privacy is important to us.</p>
        </div>
    </div>

    <section className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p className="mt-4">
            At Nexus Nation, we collect various types of information to provide and improve our services. This may include:
        </p>
        <ul className="list-disc list-inside mt-2">
            <li><strong>Personal Information:</strong> Your name, email address, phone number, and other contact details provided by you.</li>
            <li><strong>Usage Information:</strong> Data about your interactions with our website, such as pages visited, time spent, and your IP address.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience and collect data about your preferences.</li>
        </ul>
    </section>

    <section className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <p className="mt-4">
            We use the information we collect for various purposes, including but not limited to:
        </p>
        <ul className="list-disc list-inside mt-2">
            <li><strong>Providing Services:</strong> To deliver our products and services to you and personalize your experience.</li>
            <li><strong>Communication:</strong> To respond to your inquiries, send important notifications, and provide customer support.</li>
            <li><strong>Analytics:</strong> To analyze website usage and improve our offerings, content, and user experience.</li>
        </ul>
    </section>

    <section className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-semibold">3. Your Choices</h2>
        <p className="mt-4">
            You have several choices regarding your personal information:
        </p>
        <ul className="list-disc list-inside mt-2">
            <li><strong>Access and Correction:</strong> You can request access to your data and correct inaccuracies.</li>
            <li><strong>Opt-Out:</strong> You can opt-out of promotional emails and notifications at any time.</li>
            <li><strong>Cookies:</strong> You can disable cookies in your web browser settings.</li>
        </ul>
    </section>

    <section className="container mx-auto my-8 px-4">
        <h2 className="text-2xl font-semibold">4. Data Security</h2>
        <p className="mt-4">
            We take data security seriously and employ industry-standard measures to protect your information. However, no method is 100% secure, so we cannot guarantee absolute security.
        </p>
    </section>

            
        </div>
    );
};

export default Privacy;