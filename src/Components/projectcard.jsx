import React, { useState } from 'react'
import fallbackImage from '../assets/Rishi.png'

const ProjectCard = (props) => {
  const [imageSrc, setImageSrc] = useState(props.image || fallbackImage)

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15">
      <div className="h-52 overflow-hidden bg-slate-700/40">
        <img
          src={imageSrc}
          alt={props.title}
          onError={() => setImageSrc(fallbackImage)}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold text-white">{props.title}</h3>
        <p className="leading-7 text-white/75">{props.description}</p>
        {props.url ? (
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[#12d35f]/40 px-4 py-2 text-sm font-semibold text-[#12d35f] transition hover:bg-[#12d35f] hover:text-[#0f172a]"
          >
            Visit Project
          </a>
        ) : (
          <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/45">
            Coming soon
          </span>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
