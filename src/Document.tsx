import React from 'react'

interface Formatter {
    format(): string
  }

interface Props {
    document: Formatter;
  }

const Document: React.FC<Props> = ({ document }) => {
    return <div className="doc">{document.format()}</div>;
  };

export default Document