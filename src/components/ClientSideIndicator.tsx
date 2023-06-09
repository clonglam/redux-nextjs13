import React from "react"

type Props = { label: string }

const ClientSideIndicator = ({ label }: Props) => {
  return (
    <p className="absolute -top-[10px] right-[20px] h-[30px] bg-[#FDFDFD]">
      {label}
    </p>
  )
}

export default ClientSideIndicator
