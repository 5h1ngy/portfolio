import type { SVGProps } from 'react';

type DirectionalIconProps = SVGProps<SVGSVGElement> & { direction?: 'left' | 'right' };

export const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95 5.636 18.364M18.364 18.364 16.95 16.95M7.05 7.05 5.636 5.636" />
  </svg>
);

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
  </svg>
);

export const PaletteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h1a4 4 0 0 0 0-8 5 5 0 0 0-5-7Z" />
    <circle cx="8.5" cy="10.5" r="0.75" />
    <circle cx="12" cy="7.5" r="0.75" />
    <circle cx="15.5" cy="10.5" r="0.75" />
  </svg>
);

export const ArrowIcon = ({ direction = 'right', style, width = 18, height = 18, ...svgProps }: DirectionalIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={direction === 'left' ? { transform: 'scaleX(-1)', ...style } : style}
    {...svgProps}
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const GlobeIcon = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
  </svg>
);

export const GithubIcon = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" {...props}>
    <path d="M12 .5C5.649.5.5 5.648.5 12c0 5.086 3.292 9.397 7.868 10.915.575.1.79-.249.79-.556 0-.274-.01-.999-.015-1.961-3.201.695-3.878-1.543-3.878-1.543-.523-1.329-1.277-1.683-1.277-1.683-1.043-.713.079-.699.079-.699 1.152.081 1.758 1.183 1.758 1.183 1.026 1.758 2.693 1.25 3.349.956.104-.744.402-1.25.732-1.538-2.556-.291-5.244-1.278-5.244-5.688 0-1.257.449-2.285 1.183-3.091-.119-.29-.513-1.462.113-3.047 0 0 .967-.31 3.168 1.181a10.99 10.99 0 0 1 5.766 0c2.2-1.49 3.166-1.181 3.166-1.181.627 1.585.234 2.758.115 3.047.736.806 1.183 1.834 1.183 3.091 0 4.42-2.693 5.393-5.258 5.678.413.356.781 1.056.781 2.129 0 1.538-.014 2.778-.014 3.157 0 .309.212.66.797.547C20.213 21.393 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
  </svg>
);

export const LinkedinIcon = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554V14.83c0-1.342-.027-3.068-1.869-3.068-1.87 0-2.156 1.46-2.156 2.969v5.721H9.315V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286ZM5.337 7.433a2.064 2.064 0 1 1 .001-4.129 2.064 2.064 0 0 1-.001 4.129Zm1.777 13.019H3.56V9h3.554v11.452Z" />
  </svg>
);

export const DocsIcon = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M9 3h6l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M9 7h6" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
);

export const EyeIcon = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 5c-4.5 0-8.21 2.94-9.82 7 1.61 4.06 5.32 7 9.82 7s8.21-2.94 9.82-7C20.21 7.94 16.5 5 12 5Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

export const CloseIcon = ({ width = 16, height = 16, ...props }: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M6.757 5.343a1 1 0 0 0-1.414 1.414L10.586 12l-5.243 5.243a1 1 0 0 0 1.414 1.414L12 13.414l5.243 5.243a1 1 0 0 0 1.414-1.414L13.414 12l5.243-5.243a1 1 0 1 0-1.414-1.414L12 10.586 6.757 5.343Z" />
  </svg>
);
