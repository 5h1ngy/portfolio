import styled from "styled-components";

export const Message = styled.p`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Availability = styled.p`
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
`;

export const ContactTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const ContactRow = styled.tr`
  & + & td {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const LabelCell = styled.td`
  padding: 0.75rem 0;
  width: 160px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`;

export const ValueCell = styled.td`
  padding: 0.75rem 0;
  font-size: 1rem;
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
`;
