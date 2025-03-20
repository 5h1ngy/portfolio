import { Props as SuperCardProps } from "@/components/SuperCard";

interface SliderCardItem extends SuperCardProps { }

export interface SliderCardsProps {
  items: SliderCardItem[];
  isCircular?: boolean;
  cardMaxWidth?: string | number;
  cardMaxHeight?: string | number;
}
