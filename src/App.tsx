import { useState } from 'react'
import './App.css'
import { EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from './data/data'
import Modal from './Modal';
import ModalContent from './ModalContent';
import {
  skillLogo,
  experienceLogo,
  educationLogo,
  projectLogo,
  linkedinLogo,
  locationLogo,
  phoneLogo,
  githubLogo,
  emailLogo,
  newTabLogo,
} from './data/icons'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<string[]>([]);
  const [selectedNav, setSelectedNav] = useState('');
  const { HARD_SKILLS, SOFT_SKILLS, DB, TOOLS, AI } = SKILLS;

  const generateModalContent = (title: string, content: string[]) => {
    setIsOpen(true);
    setTitle(title);
    setContent(content);
  }

  return (
    <>
      {
        isOpen &&
        <Modal setIsOpen={setIsOpen}>
          <ModalContent title={title} content={content} />
        </Modal>
      }

      <div className='sm:ml-[6vw] sm:w-[94vw] h-screen flex flex-col justify-around items-center p-2 sm:mt-0 mt-21.25'>
        <div className='font-semibold text-6xl md:text-9xl'>
          <strong>
            SOFTWARE ENGINEER
          </strong>
        </div>
        <section className='my-2 flex flex-col items-start'>
          <span className='text-[#c91b68] flex'><img src={locationLogo} height={30} width={30} />&nbsp; Sydney, NSW</span>
          <br />
          <div className='flex gap-4 mb-2'>
            <span><a href='tel:+61494747969'><img src={phoneLogo} height={30} width={30} /></a></span>
            <span><a href='https://www.linkedin.com/in/rujwal-raj-bajracharya-3b48971b5' target="_blank"><img src={linkedinLogo} height={30} width={30} /></a></span>
            <span><a href='https://github.com/Baj-Rujwal' target='_blank'><img src={githubLogo} height={30} width={30} /></a></span>
            <span><a href='mailto:grujwal@gmail.com'><img src={emailLogo} height={30} width={30} /></a></span>
          </div>
        </section>
        <div>
          Hi! I'm a <strong className='text-[#c91b68]'>Fullstack Software Engineer</strong> with over 4 years of experience architecting scalable web applications, robust APIs, and complex system integrations. I specialize in bridging traditional backend engineering—using PHP, Node.js, and Python—with modern AI-driven solutions, including LLM integration, vector databases, and semantic search.
          A proactive problem-solver with a strong track record of translating business needs into high-performing technical solutions and optimizing SQL databases.
        </div>
      </div>
      <section className='flex flex-col h-100vh'>
        <aside className='fixed top-0 w-full sm:w-[5vw] h-20 flex sm:flex-col justify-center sm:h-full bg-[#0d0f12] sm:bg-transparent border-b-2 border-amber-300 sm:border-0'>
          <span className='nav-item' onClick={() => setSelectedNav('skills')}><a href='#skills'><img src={skillLogo} width={40} height={40} /></a></span>
          <span className='nav-item' onClick={() => setSelectedNav('experience')}><a href='#experience'><img src={experienceLogo} width={40} height={40} /></a></span>
          <span className='nav-item' onClick={() => setSelectedNav('education')}><a href='#education'><img src={educationLogo} width={40} height={40} /></a></span>
          <span className='nav-item' onClick={() => setSelectedNav('projects')}><a href='#projects'><img src={projectLogo} width={40} height={40} /></a></span>
        </aside>
        <main className='sm:ml-[6vw] pl-5 flex-1'>
          <div className='flex flex-col items-start' id='skills'>
            <h1 className={selectedNav === 'skills' ? 'underline' : undefined}>Skills</h1>
            <div className='grid sm:grid-cols-8 sm:grid-rows-5 grid-cols-6 gap-3 mr-2'>
              <div className='skill-subgrid sm:col-span-4 row-span-3 col-span-6'>
                {HARD_SKILLS.map(sk => (
                  <div className='tech-tag' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}
                    {sk.withLink ? <div className='hidden sm:block'>{sk.title}</div> : sk.title}
                  </div>
                ))}
              </div>
              <div className='skill-subgrid sm:col-span-3 sm:row-span-3 col-span-6'>
                {DB.map(sk => (
                  <div className='tech-tag' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}
                    {sk.withLink ? <div className='hidden sm:block'>{sk.title}</div> : sk.title}
                  </div>
                ))}
              </div>
              <div className='skill-subgrid sm:col-span-1 sm:row-span-3 col-span-6'>
                {TOOLS.map(sk => (
                  <div className='tech-tag' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}
                    {sk.withLink ? <div className='hidden sm:block'>{sk.title}</div> : sk.title}
                  </div>
                ))}
              </div>
              <div className='skill-subgrid sm:col-span-8 sm:row-span-1 col-span-6'>
                {AI.map(sk => (
                  <div className='tech-tag sm:col-span-1 col-span-2' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}
                    {sk.withLink ? <div className='hidden sm:block'>{sk.title}</div> : sk.title}
                  </div>
                ))}
              </div>
              <div className='skill-subgrid sm:col-span-8 sm:row-span-1 col-span-6'>
                {SOFT_SKILLS.map(sk => (
                  <div className='tech-tag sm:col-span-1 col-span-2' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}
                    {sk.withLink ? <div className='hidden sm:block'>{sk.title}</div> : sk.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <div className='flex flex-col mr-2 items-start gap-2 text-left' id='experience'>
            <h1 className={selectedNav === 'experience' ? 'underline' : undefined}>Experience</h1>
            {EXPERIENCE.map(exp => (
              <div key={exp.title}
                onClick={() => generateModalContent(exp.title, exp?.description || [])}
                className='flex flex-col w-full p-2 rounded-lg items-start bg-[#161a22] gap-3 cursor-pointer'
              >
                <div className='font-bold text-2xl'>
                  <strong>{exp.title}</strong>
                </div>
                <div className='text-green-600'>
                  {exp.duration}
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className='flex flex-col mr-2 items-start gap-2 text-left' id='education'>
            <h1 className={selectedNav === 'education' ? 'underline' : undefined}>Education</h1>
            {EDUCATION.map((ed) => (
              <div key={ed.title} className='flex flex-col w-full p-2 rounded-lg items-start bg-[#161a22] gap-3'>
                <div className='font-bold text-2xl'>
                  <strong>{ed.title}</strong>
                </div>
                <div className='text-green-600'>
                  {ed.duration}
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className='flex flex-col mr-2 items-start gap-2 text-left' id='projects'>
            <h1 className={selectedNav === 'projects' ? 'underline' : undefined}>Projects</h1>
            <div className='flex flex-col w-full p-2 rounded-lg items-start bg-[#161a22] gap-3'>
              {PROJECTS.map((project) => (
                <div className='font-bold text-2xl' key={project.link}>
                  <strong>
                    {project.title}&nbsp;
                    {project.withLink && <a href={project.link} target='_blank' className='float-right cursor-pointer'><img src={newTabLogo} height={30} width={30} /></a>}
                  </strong>
                </div>
              ))}
            </div>
          </div>
          <br />
          {/* <article id='certificates' className='my-2 min-h-60 border-2'>
            Certificates
          </article> */}
        </main>
      </section >
    </>
  )
}

export default App
