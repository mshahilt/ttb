import React from 'react'

type TitleProps = {
    text: string
    theme?: "light" | "dark"
}

const Title: React.FC<TitleProps> = ({ text, theme = "light" }) => {
    return (
        <h1 className={`text-5xl font-kugile ${theme === "light" ? "text-[#1F1E1D]" : "text-primary"}`}>{text}</h1>
    )
}

export default Title