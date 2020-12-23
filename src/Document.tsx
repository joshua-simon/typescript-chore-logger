import React from 'react'

interface Formatter {
    format(): string
  }

interface Props {
    document: Formatter;
  }

const Document: React.FC<Props> = ({ document }) => {
    return <h1 className="doc">{document.format()}</h1>;
  };

export default Document