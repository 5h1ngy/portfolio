import { useMemo, useState } from "react";

import type { PortfolioExperience } from "@data/portfolio.types";
import { buildItemId } from "@components/ExperienceSection/helpers";

export const useActiveTimeline = (experience: PortfolioExperience) => {
  const defaultId = useMemo(
    () => (experience.timeline.length > 0 ? buildItemId(experience.timeline[0]) : null),
    [experience],
  );
  const [activeId, setActiveId] = useState<string | null>(defaultId);

  const toggle = (id: string) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return { activeId, toggle };
};
