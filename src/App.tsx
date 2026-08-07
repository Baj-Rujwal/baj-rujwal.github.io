import { useState } from 'react'
import './App.css'
import { EDUCATION, EXPERIENCE, PROJECTS, SKILLS } from './data/data'
import Modal from './Modal';
import ModalContent from './ModalContent';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState([]);
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

      <div className='ml-[6vw] w-[94vw] h-screen flex flex-col justify-around items-center p-2'>
        <div className='font-semibold text-6xl md:text-9xl'>
          <strong>
            SOFTWARE ENGINEER
          </strong>
        </div>
        <section id='certificates' className='my-2 flex flex-col items-start'>
          <span className='text-[#c91b68] flex'><img src='src/assets/icons/location.svg' height={30} width={30} />&nbsp; Sydney, NSW</span>
          <br />
          <div className='flex gap-4 mb-2'>
            <span><a href='tel:+61494747969'><img src='src/assets/icons/phone.svg' height={30} width={30} /></a></span>
            <span><a href='https://www.linkedin.com/in/rujwal-raj-bajracharya-3b48971b5' target="_blank"><img src='src/assets/icons/linkedin.svg' height={30} width={30} /></a></span>
            <span><a href='https://github.com/Baj-Rujwal' target='_blank'><img src='src/assets/icons/github.svg' height={30} width={30} /></a></span>
            <span><a href='mailto:grujwal@gmail.com'><img src='src/assets/icons/email.svg' height={30} width={30} /></a></span>
          </div>
        </section>
        <div>
          <strong className='text-[#c91b68]'>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </div>
      </div>
      <section className='flex h-screen'>
        <aside className='fixed top-0 w-[5vw] flex flex-col justify-center h-full'>
          <span className='nav-item' onClick={() => setSelectedNav('skills')}><a href='#skills'><img src='src/assets/icons/gears.svg' width={40} height={40} /></a></span>
          <span className='nav-item' onClick={() => setSelectedNav('experience')}><a href='#experience'><img src='src/assets/icons/steps.svg' width={40} height={40} /></a></span>
          <span className='nav-item' onClick={() => setSelectedNav('education')}><a href='#education'><img src='src/assets/icons/education.svg' width={40} height={40} /></a></span>
          <span className='nav-item' onClick={() => setSelectedNav('projects')}><a href='#projects'><img src='src/assets/icons/projects.svg' width={40} height={40} /></a></span>
        </aside>
        <main className='ml-[6vw] pl-5 flex-1'>
          <div className='flex flex-col items-start' id='skills'>
            <h1 className={selectedNav === 'skills' && 'underline'}>Skills</h1>
            <div className='grid grid-cols-8 grid-rows-5 gap-3 mx-2'>
              <div className='skill-subgrid col-span-4 row-span-3'>
                {HARD_SKILLS.map(sk => (
                  <div className='tech-tag' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}{sk.title}
                  </div>
                ))}
              </div>
              <div className='skill-subgrid col-span-3 row-span-3'>
                {DB.map(sk => (
                  <div className='tech-tag' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}{sk.title}
                  </div>
                ))}
              </div>
              <div className='skill-subgrid col-span-1 row-span-3'>
                {TOOLS.map(sk => (
                  <div className='tech-tag' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}{sk.title}
                  </div>
                ))}
              </div>
              <div className='skill-subgrid col-span-8 row-span-1'>
                {AI.map(sk => (
                  <div className='tech-tag' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}{sk.title}
                  </div>
                ))}
              </div>
              <div className='skill-subgrid col-span-8 row-span-1'>
                {SOFT_SKILLS.map(sk => (
                  <div className='tech-tag' key={sk.link}>
                    {sk.withLink && <img src={sk.link} height={50} width={50} className='justify-self-center' />}{sk.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <div className='flex flex-col w-[91vw] items-start gap-2' id='experience'>
            <h1 className={selectedNav === 'experience' && 'underline'}>Experience</h1>
            {EXPERIENCE.map(exp => (
              <div key={exp.title}
                onClick={() => generateModalContent(exp.title, exp.description)}
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
          <div className='flex flex-col w-[91vw] items-start gap-2' id='education'>
            <h1 className={selectedNav === 'education' && 'underline'}>Education</h1>
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
          <div className='flex flex-col w-[91vw] items-start gap-2' id='projects'>
            <h1 className={selectedNav === 'projects' && 'underline'}>Projects</h1>
            <div className='flex flex-col w-full p-2 rounded-lg items-start bg-[#161a22] gap-3'>
              {PROJECTS.map((project) => (
                <div className='font-bold text-2xl' key={project.link}>
                  <strong>
                    {project.title}&nbsp;
                    {project.withLink && <a href={project.link} target='_blank' className='float-right cursor-pointer'><img src='src/assets/icons/new-tab.svg' height={30} width={30} /></a>}
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
