import styled from "styled-components";

export const FooterRoot = styled.footer`
  padding: 3rem 0 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.gradients.overlay};
`;

export const FooterInner = styled.div`
  width: ${({ theme }) => `min(${theme.layout.maxWidth}, calc(100% - 2.5rem))`};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

export const FooterMeta = styled.div`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const FooterPill = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  padding: 0.35rem 0.9rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surfaceMuted};
`;
