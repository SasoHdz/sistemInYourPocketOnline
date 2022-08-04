import React from 'react'

const BtnPrimary = ({text}) => {
  return (
    <button className="w-24 h-auto mt-2 rounded-md bg-blue-700 text-slate-200 text-base font-medium">
        {text}
    </button>
  )
}

export {BtnPrimary};