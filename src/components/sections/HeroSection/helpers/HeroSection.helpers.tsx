export const isExternal = (href: string, external?: boolean) => external || /^https?:\/\//i.test(href);
