import React from 'react';

const Header = ({title}) => {
  return (
    <div className="w-full h-1/5 bg-slate-500 relative">
        <div className="w-full h-auto flex items-center justify-around pt-2">
            <p className="text-lg font-medium">SIYP</p>
            <div className="w-14 h-12 bg-red-500">Logo</div>
        </div>
        <div className="text-lg font-medium rounded-md bg-blue-200 absolute top-20 left-5 px-2">
            {title}
        </div>
    </div>
  )
}

export {Header};
