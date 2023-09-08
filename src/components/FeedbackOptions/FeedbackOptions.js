import { Button } from './FeedbackOption.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option, idx) => (
        <Button
          key={idx}
          type="button"
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
