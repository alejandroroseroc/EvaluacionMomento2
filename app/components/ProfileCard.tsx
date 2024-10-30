export default function ProfileCard() {
    return (
      <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
        <section className="flex flex-col md:flex-row bg-black p-8 rounded-lg shadow-lg max-w-xl w-full md:w-4xl relative">
          
          <main className="flex justify-center md:justify-start -ml-16 -mt-16 md:mt-2">
            <img
              src="/imagen.jpeg"
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 object-cover md:transition-all duration-500 rounded-full md:rounded-lg"
            />
          </main>
          
          
          <section className="flex flex-col justify-center text-center md:text-left p-4 mt-4 md:mt-0">
            <h2 className="text-white text-2xl font-semibold">Jess Wilson</h2>
            <p className="text-gray-400 text-sm">UX Engineer</p>
            <p className="text-gray-400 text-xs mt-2">
              Empowering users through captivating interfaces, turning ideas into pixel-perfect realities.
            </p>
            <section className="mt-4 flex justify-center md:justify-start gap-4">
              <button className="px-12 py-2 border border-white text-white rounded-full">Profile</button>
              <button className="px-12 py-2 bg-white text-black rounded-full">Follow</button>
            </section>
          </section>
        </section>
      </section>
    );
}
