import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Bio() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans leading-relaxed">
      <Header />

      <section className="py-36 bg-gray-800 mt-16">
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
              <p className="mb-5 text-lg">
                When I'm not coding, you can find me [Your Hobbies/Interests]. I
                believe in continuous learning and staying up-to-date with the
                latest technologies and best practices in web development.
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
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <h3 className="text-purple-600 mb-4">Front-end Development</h3>
              <ul className="list-disc list-inside text-gray-100">
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Vue.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <h3 className="text-purple-600 mb-4">Back-end Development</h3>
              <ul className="list-disc list-inside text-gray-100">
                <li>Node.js</li>
                <li>Python</li>
                <li>PHP</li>
                <li>SQL & NoSQL Databases</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500">
              <h3 className="text-purple-600 mb-4">Tools & Technologies</h3>
              <ul className="list-disc list-inside text-gray-100">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 