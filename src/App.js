import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Marketing from './images/marketing.png'
import College from './images/college.png'
import Crud from './images/crud.png'
import Pizza from './images/pizza.png'
// import Weather from './images/weather.png'
import Wobot from './images/wobot.png'
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white px-10" : "bg-white text-gray-900 px-10"}>
      <section className='min-h-screen'>
        <nav className="py-10 mb-4 flex justify-between">
          <h1 className="text-[24px] font-bold font-burtons header lg:text-[30px]">SAURABH-PORTFOLIO</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl"
              onClick={() => setDarkMode(!darkMode)}><BsFillMoonStarsFill/></li>
            <li>
              <a href="/SaurabhCV.pdf" target="_blank" 
               rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-4 py-2 rounded ml-5">Resume</a>
            </li>
          </ul>
        </nav>
        <div className=" text-center py-5 ">
          <h2 className="text-4xl py-2 text-teal-600 font-medium">SAURABH RAJPUT</h2>
          <h3 className={darkMode ? "text-gray-400" : "text-gray-600 text-lg py-2"}>Frontend Developer | 2+ Years of Experience | React, React Native, Javascript, Tailwind CSS</h3>
          <p className={darkMode ? "font-normal text-md py-3 leading-7 text-white" : "font-normal text-md py-3 leading-7 text-gray-900"}>Experience in building responsive and user-friendly web and mobile applications. Proficient in crafting dynamic and scalable interfaces using React.js and React Native, I excel at delivering high-quality solutions that enhance user experiences.</p>
        </div>
        <div className={darkMode ? "text-white text-5xl flex justify-center gap-16 py-3" : "text-5xl flex justify-center gap-16 py-3 text-gray-700"}>
           <a href="https://www.linkedin.com/in/saurabh-rajput-35794132a/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
           <a href="https://github.com/SaurabhRajput15?tab=repositories" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
           <a href="https://www.instagram.com/saurabh_1503_/" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
        </div>
        <div className="relative mx-auto w-85 mt-14">
          <img src="https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=1743033600&v=beta&t=P72i-nf1lzwgT7uO-zpvxe2PU-FCi1eE_jKbI1wkt1k" alt="front-end" />
        </div>
      </section>

      <section>
        <div className="my-8">
          <h3 className="text-3xl py-1 font-normal">SERVICES I OFFER</h3>
          <p className={darkMode ? "text-white text-md py-2 leading-6" :"text-md py-2 leading-6 text-gray-900"}>Since the beginning of my journey as a <span className="text-teal-600">freelance developer</span>, I've done remote work for startup</p>
          <p className={darkMode ? "text-white text-md py-2 leading-6" :"text-md py-2 leading-6 text-gray-900"}>Collaborated with clients to develop <span className="text-teal-600">responsive websites</span> and <span className="text-teal-600">web applications</span> using React, JavaScript, HTML, and CSS.</p>
          <p className={darkMode ? "text-white text-md py-2 leading-6" :"text-md py-2 leading-6 text-gray-900"}>Designed and implemented dynamic UI components with <span className="text-teal-600">Tailwind CSS</span>, ensuring cross-browser and device compatibility. Delivered projects on <span className="text-teal-600">GitHub/GitLab</span>, managing version control and code collaboration efficiently.</p>
          <p className={darkMode ? "text-white text-md py-2 leading-6" :"text-md py-2 leading-6 text-gray-900"}>Developed e-commerce platforms, portfolios, and landing pages, improving <span className="text-teal-600">client visibility</span> and revenue.</p>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1 font-normal">PORTFOLIO</h3>
          <p className={darkMode ? "text-md py-2 leading-6 text-white" : "text-md py-2 leading-6 text-gray-900"}>Explore my projects and work samples to see how I bring ideas to life:</p>
          <a href="https://github.com/SaurabhRajput15?tab=repositories" target="_blank" 
            rel="noopener noreferrer"  className="cursor-pointer text-xl text-teal-600 font-medium py-2">Github Link</a>
          <h4 className="text-xl py-2 font-normal">What You'll Find:</h4>
          <p className={darkMode ? "text-md py-2 leading-6 text-white" : "text-md py-2 leading-6 text-gray-900"}>▶ Dynamic Web Applications: Interactive, responsive, and scalable web apps built with React.js, Redux, and modern web technologies.</p>
          <p className={darkMode ? "text-md py-2 leading-6 text-white" : "text-md py-2 leading-6 text-gray-900"}>▶ Tailored UI/UX: User-centric designs with seamless navigation, crafted using Tailwind CSS, HTML, and CSS.</p>
          <p className={darkMode ? "text-md py-2 leading-6 text-white" : "text-md py-2 leading-6 text-gray-900"}>▶ Code Quality: Clean, reusable, and well-documented code, showcasing best practices in JavaScript.</p>
          <p className={darkMode ? "text-md py-2 leading-6 text-white" : "text-md py-2 leading-6 text-gray-900"}>▶ Collaborative Projects: Team-based contributions using Git, GitHub, and GitLab.</p>
        </div>
        <div className="flex flex-col gap-10 py-10">
          <div>
            <img src={Marketing} alt="marketing website" className="img-1"/>
          </div>
          <div>
            <img src={College} alt="marketing website" />
          </div>
          <div>
            <img src={Pizza} alt="marketing website" />
          </div>
          <div>
            <img src={Crud} alt="marketing website" />
          </div>
          <div>
            <img src={Wobot} alt="wobot" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;
