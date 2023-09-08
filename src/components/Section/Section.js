import { Headline } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <Headline>{title}</Headline>
      {children}
    </div>
  );
};
