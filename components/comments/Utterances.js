import React, { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

import siteMetadata from '@/data/siteMetadata'

const Utterances = () => {
  const { theme, resolvedTheme } = useTheme()
  const commentsTheme =
    theme === 'dark' || resolvedTheme === 'dark'
      ? siteMetadata.comment.utterancesConfig.darkTheme
      : siteMetadata.comment.utterancesConfig.theme

  const scriptParentNodeRef = useRef(null)

  useEffect(() => {
    const scriptParentNode = scriptParentNodeRef.current
    if (!scriptParentNode) return
    let isExecuted = false
    const timeoutId = setTimeout(() => {
      const script = document.createElement('script')

      script.src = 'https://utteranc.es/client.js'
      script.async = true
      script.setAttribute('repo', siteMetadata.comment.utterancesConfig.repo)
      script.setAttribute('issue-term', siteMetadata.comment.utterancesConfig.issueTerm)
      script.setAttribute('label', siteMetadata.comment.utterancesConfig.label)
      script.setAttribute('theme', commentsTheme)
      script.setAttribute('crossorigin', 'anonymous')

      scriptParentNode.appendChild(script)
      isExecuted = true
    }, 1000)

    return () => {
      // cleanup - remove the older script with previous theme
      if (isExecuted === false) {
        clearTimeout(timeoutId)
      } else {
        scriptParentNode.removeChild(scriptParentNode.firstChild)
      }
    }
  }, [commentsTheme])

  return (
    <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300">
      <div className="relative utterances-frame" ref={scriptParentNodeRef}></div>
    </div>
  )
}

export default Utterances
