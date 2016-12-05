import html2react from 'html2react'
import reactRenderToJSON from 'react-render-to-json'

export default (element) => reactRenderToJSON(html2react(element)[0])
