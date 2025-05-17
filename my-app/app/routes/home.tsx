import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans leading-relaxed">
      <Header />
      
      <header className="bg-gradient-to-br from-gray-800 to-purple-600 text-gray-100 py-36 text-center mt-16">
        <div className="max-w-7xl mx-auto px-5">
          <div>
            <h1 className="text-5xl mb-5">Raul Gage Portfolio</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Full Stack Developer | UI/UX Enthusiast | Problem Solver
            </p>
          </div>
        </div>
      </header>

      <section className="py-36 bg-gray-800">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl mb-5 text-blue-500">About Me</h2>
              <p className="mb-5 text-lg">
                I'm a passionate developer with expertise in creating beautiful and
                functional web applications. With a strong foundation in both
                front-end and back-end development, I bring ideas to life through
                clean, efficient code and intuitive user interfaces.
              </p>
              <p className="mb-5 text-lg">
                My journey in web development started [Your Story Here]. I
                specialize in [Your Specialties] and am constantly learning new
                technologies to stay at the forefront of web development.
              </p>
            </div>
            <div>
              <img
                src="your-image.jpg"
                alt="Profile Picture"
                className="max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-36 bg-gray-900">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl text-center mb-12 text-purple-600">
            Services I Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service cards will be added here */}
          </div>
        </div>
      </section>

      <section className="py-36 bg-gray-800">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-4xl mb-12 text-blue-500">Let's Work Together</h2>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-gray-100 px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors no-underline"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
