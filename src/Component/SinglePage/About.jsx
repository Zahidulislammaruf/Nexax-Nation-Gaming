
const About = () => {
    return (
        
           <div className=" container mx-auto mt-16">
            <div className="bg-blue-600 text-white py-4">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-semibold text-center">About Us</h1>
                    <p className="text-center">Connecting gamers through exciting game events.</p>
                </div>
            </div>

            <section className="container mx-auto my-8 px-4">
                <h2 className="text-2xl font-semibold">Who We Are</h2>
                <p className="mt-4">
                    Nexus Nation is a passionate and dedicated team of gaming enthusiasts who share a common love for video games and esports. Founded with the goal of bringing gamers together, we specialize in organizing and hosting various types of game events.
                </p>
            </section>

            <section className="container mx-auto my-8 px-4">
                <h2 className="text-2xl font-semibold">What We Do</h2>
                <p className="mt-4">
                    Our primary mission is to create immersive and engaging gaming experiences for players of all skill levels and backgrounds. We organize a wide range of game events, including:
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li><strong>Tournaments:</strong> Competitive esports tournaments for skilled players to showcase their talents.</li>
                    <li><strong>Community Events:</strong> Fun and inclusive events for gamers to connect and build friendships.</li>
                    <li><strong>Showcases:</strong> Spotlighting new game releases, demos, and industry insights.</li>
                    <li><strong>Cosplay Contests:</strong> Celebrating the creativity and dedication of cosplayers in the gaming world.</li>
                </ul>
            </section>

            <section className="container mx-auto my-8 px-4">
                <h2 className="text-2xl font-semibold">Our Vision</h2>
                <p className="mt-4">
                    We envision a world where gamers of all backgrounds can come together to celebrate their love for gaming. Our vision is to create a global gaming community where players can connect, compete, and share their passion for games in a supportive and inclusive environment.
                </p>
            </section>
           </div>
       
    );
};

export default About;