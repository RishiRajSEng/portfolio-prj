import React from 'react'

const skills = [
  'HTML, CSS and JavaScript',
  'React JS and Tailwind CSS',
  'User Interface (UI)',
  'MongoDB, Express and Node.js',
  'Database',
  'Git and GitHub',
]

const About = () => {
  return (
    <section id="about" className="bg-white px-4 py-20 text-slate-700 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-4xl font-bold text-[#12d35f] sm:text-5xl">
          About Me
        </h2>

        <div className="mx-auto mt-10 max-w-3xl space-y-8 text-center text-lg leading-8 text-slate-500">
          <p>
            Hello, I am Rishi Raj Pandey, a passionate full stack developer from Nepal. I enjoy
            building responsive and user friendly web applications.
          </p>
          <p>
            I love learning new technologies, solving problems, and creating modern websites that
            provide great user experiences.
          </p>
        </div>

        <div className="mx-auto mt-16 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)] sm:p-8">
          <h3 className="text-center text-lg font-bold uppercase tracking-wide text-[#11d45b]">
            My Full Stack Knowledge and Skills
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-md bg-slate-100 px-4 py-3 text-left text-sm font-medium uppercase tracking-wide text-slate-600"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
