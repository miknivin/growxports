import React from 'react';
import svgPaths from "../../imports/svg-pj4gezvnd5";
export const SocialIcon = ({ type, variant = 'light' }) => {
    const isLight = variant === 'light';
    const bgColor = isLight ? 'bg-white' : 'bg-[#C8AD82]';
    const iconColor = isLight ? '#081916' : '#0F1B45';
    return (<div className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${bgColor}`}>
      {type === 'twitter' && (<svg width="20" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={svgPaths.p1a851940} fill={iconColor}/>
        </svg>)}
      {type === 'instagram' && (<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={svgPaths.p1c494500} fill={iconColor}/>
          <path d={svgPaths.p18f8d000} fill={iconColor}/>
          <path d={svgPaths.p86b6500} fill={iconColor}/>
        </svg>)}
      {type === 'facebook' && (<svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={svgPaths.p3a4cf900} fill={iconColor}/>
        </svg>)}
    </div>);
};
