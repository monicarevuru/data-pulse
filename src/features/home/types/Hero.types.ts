export interface FeatureItemProps {
  name: string;
  description: string;
  icon: string;
  index: number;
  isInView: boolean;
}

export interface TestimonialItemProps {
  content: string;
  author: {
    name: string;
    title: string;
    imageInitials: string;
  };
}
