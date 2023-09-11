import { Text } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Text>Good: {good} </Text>
      <Text>Neutral: {neutral} </Text>
      <Text>Bad: {bad} </Text>
      <Text>Total: {total} </Text>
      <Text>Possitive feedback: {positivePercentage} %</Text>
    </div>
  );
};
