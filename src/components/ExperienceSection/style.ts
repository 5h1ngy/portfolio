import styled from 'styled-components';

export const RolesList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const RoleCard = styled.article`
  display: grid;
  gap: 1.1rem;
  padding: 1.6rem;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
`;

export const RoleHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
`;

export const RoleTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

export const RoleCompany = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const RoleMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const RoleSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HighlightsList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  display: grid;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  padding: 0.35rem 0.9rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surfaceMuted};
`;

export const RoleLink = styled.a`
  font-weight: 600;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
`;
