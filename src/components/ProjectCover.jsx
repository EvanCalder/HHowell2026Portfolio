import React from "react";

const ProjectCover = ({
  companyLogo,
  company,
  category,
  gradient = "from-[#0f0c29] via-[#1d1836] to-[#242424]",
  metric,
}) => (
  <div
    className={`relative w-full h-full bg-gradient-to-br ${gradient} overflow-hidden`}
  >
    <div className="absolute inset-0 opacity-20">
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#915EFF] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#00B14F] blur-3xl opacity-60" />
    </div>

    <div className="relative z-10 flex flex-col justify-between h-full p-3 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex-shrink-0 bg-white rounded-lg p-1.5 sm:p-2 shadow-md">
            <img
              src={companyLogo}
              alt={company}
              className="h-5 sm:h-8 w-auto max-w-[72px] sm:max-w-[100px] object-contain"
            />
          </div>
          <span className="text-white/90 text-[10px] sm:text-[13px] font-medium truncate">
            {company}
          </span>
        </div>
        {metric && (
          <span className="flex-shrink-0 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#915EFF]/90 text-white text-[8px] sm:text-[11px] font-semibold rounded-full">
            {metric}
          </span>
        )}
      </div>

      <div>
        <span className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-[#c4b5fd] text-[8px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-md">
          {category}
        </span>
      </div>
    </div>
  </div>
);

export default ProjectCover;
