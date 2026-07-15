import React from 'react'
import ProjectCard from '../Components/projectcard'
import { projects } from '../constants/project'

const Project = () => {
	return (
		<section className="min-h-screen bg-[#4b5668] px-4 py-20 text-white">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#12d35f]">Projects</p>
					<h1 className="mt-4 text-4xl font-bold">Project section</h1>
					<p className="mt-4 leading-8 text-white/80">
						A selection of my recent work, using reusable project cards.
					</p>
				</div>

				<div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Project
