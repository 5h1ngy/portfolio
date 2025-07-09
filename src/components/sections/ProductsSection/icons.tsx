import type { SVGProps } from 'react'

export const ArrowIcon = ({ direction = 'right' }: { direction?: 'left' | 'right' }) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={direction === 'left' ? { transform: 'scaleX(-1)' } : undefined}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
)

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M12 .5C5.649.5.5 5.648.5 12c0 5.086 3.292 9.397 7.868 10.915.575.1.79-.249.79-.556 0-.274-.01-.999-.015-1.961-3.201.695-3.878-1.543-3.878-1.543-.523-1.329-1.277-1.683-1.277-1.683-1.043-.713.079-.699.079-.699 1.152.081 1.758 1.183 1.758 1.183 1.026 1.758 2.693 1.25 3.349.956.104-.744.402-1.25.732-1.538-2.556-.291-5.244-1.278-5.244-5.688 0-1.257.449-2.285 1.183-3.091-.119-.29-.513-1.462.113-3.047 0 0 .967-.31 3.168 1.181a10.99 10.99 0 0 1 5.766 0c2.2-1.49 3.166-1.181 3.166-1.181.627 1.585.234 2.758.115 3.047.736.806 1.183 1.834 1.183 3.091 0 4.42-2.693 5.393-5.258 5.678.413.356.781 1.056.781 2.129 0 1.538-.014 2.778-.014 3.157 0 .309.212.66.797.547C20.213 21.393 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
  </svg>
)

export const DocsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M9 3h6l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M9 7h6" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
)
