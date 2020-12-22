import React from 'react'

interface Props {
    name: string
    chore:string
    date:string
}

const Document: React.FC<Props> = ({name, chore, date}) => {
    return(
        <div className = 'doc'>
            <h1>{name}</h1>
            <h2>{chore}</h2>
            <h3>{date}</h3>
        </div>
    )
}

export default Document