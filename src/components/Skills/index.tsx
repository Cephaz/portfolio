import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiStimulus,
  SiHotwire,
  SiRubyonrails,
  SiRuby,
  SiPostgresql,
  SiRedis,
  SiSidekiq,
  SiGithub,
  SiJira,
  SiSlack,
  SiConfluence,
  SiNodedotjs,
  SiTypescript,
  SiLinux
} from "react-icons/si"

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: <SiReact className='text-blue-500' /> },
      { name: 'HTML', icon: <SiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <SiCss3 className='text-blue-600' /> },
      { name: 'Sass', icon: <SiSass className='text-pink-600' /> },
      { name: 'Tailwindcss', icon: <SiTailwindcss className='text-teal-500' /> },
      { name: 'Stimulus', icon: <SiStimulus className="text-text-900" /> },
      { name: 'Hotwire', icon: <SiHotwire className="text-text-900"/> }
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'NodeJS', icon: <SiNodedotjs className='text-green-500' /> },
      { name: 'Postgresql', icon: <SiPostgresql className='text-blue-500' /> },
      { name: 'Redis', icon: <SiRedis className='text-red-500' /> },
      { name: 'Sidekiq', icon: <SiSidekiq className='text-text-900' /> },
      { name: 'GitHub', icon: <SiGithub className='text-text-900' /> },
      { name: 'RoR', icon: <SiRubyonrails className='text-red-500' /> },
      { name: 'Ruby', icon: <SiRuby className='text-red-500' /> }
    ],
  },
  {
    category: 'Autres',
    technologies: [
      { name: 'JavaScript', icon: <SiJavascript className='text-yellow-500' /> },
      { name: 'Typescript', icon: <SiTypescript className='text-blue-600' /> },
      { name: 'Jira', icon: <SiJira className='text-blue-500' /> },
      { name: 'Confluence', icon: <SiConfluence className='text-blue-600' /> },
      { name: 'Slack', icon: <SiSlack className="text-purple-600"/> },
      { name: 'Linux', icon: <SiLinux className="text-text-900"/> }
      
    ],
  }
]

const Skills = () => {
  return (
    <div className="h-screen max-w-screen-xl mx-auto flex flex-col justify-center px-4 text-text-900 pb-8 md:py-12" id="skills">
      <h2 className="text-3xl font-bold mb-4 text-center">Competences</h2>

      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {skills.map((skill, index) => (
          <div key={index} className="border border-primary-600 p-6 rounded-lg bg-blue-500/20 shadow-lg w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {skill.technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-2xl">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
