import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans leading-relaxed">
      <Header />

      <section className="py-36 bg-gray-900 mt-16">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl text-center mb-12 text-purple-600">
            Services I Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <div className="w-12 h-12 mb-4 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="text-purple-600 mb-4">Web Development</h3>
              <p className="text-gray-100">
                Custom website development using modern technologies and best
                practices. From simple landing pages to complex web applications.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <div className="w-12 h-12 mb-4 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                  />
                </svg>
              </div>
              <h3 className="text-purple-600 mb-4">UI/UX Design</h3>
              <p className="text-gray-100">
                Creating intuitive and engaging user interfaces that provide
                exceptional user experiences across all devices.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <div className="w-12 h-12 mb-4 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <h3 className="text-purple-600 mb-4">E-commerce Solutions</h3>
              <p className="text-gray-100">
                Building secure and scalable e-commerce platforms that help
                businesses grow their online presence.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <div className="w-12 h-12 mb-4 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-purple-600 mb-4">API Development</h3>
              <p className="text-gray-100">
                Designing and implementing robust APIs that enable seamless
                integration between different systems.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <div className="w-12 h-12 mb-4 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-purple-600 mb-4">Mobile Development</h3>
              <p className="text-gray-100">
                Creating responsive and native mobile applications that deliver
                exceptional user experiences.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <div className="w-12 h-12 mb-4 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-purple-600 mb-4">Technical Consulting</h3>
              <p className="text-gray-100">
                Providing expert advice on technology stack selection, architecture
                design, and development best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 