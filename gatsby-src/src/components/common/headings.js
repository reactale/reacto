import React from 'react'

const toId = obj => obj.toString().trim().replace(/\s+/g, ' ').split(' ').join('-').toLowerCase()

export const H1 = ({ children }) => <h1 id={`h1-${toId(children)}`}>{ children }</h1>
export const H2 = ({ children }) => <h2 id={`h2-${toId(children)}`}>{ children }</h2>
export const H3 = ({ children }) => <h3 id={`h3-${toId(children)}`}>{ children }</h3>
export const H4 = ({ children }) => <h4 id={`h4-${toId(children)}`}>{ children }</h4>