import styled from "styled-components";

export const FooterRoot = styled.footer`
  padding: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surface};
`;

export const FooterInner = styled.div`
  width: ${({ theme }) => `min(${theme.layout.maxWidth}, calc(100% - 2.5rem))`};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem 1.25rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const FooterName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const FooterCopy = styled.span`
  font-size: 0.78rem;
  letter-spacing: 0.02em;
`;

export const FooterLinks = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const FooterLink = styled.a`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 1px solid transparent;
  padding-bottom: 0.1rem;
  transition: color 0.18s ease, border-color 0.18s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
