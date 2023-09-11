import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { StatisticEmpty } from './StatisticEmpty/StatisticEmpty';
import { Container } from './Container.styled';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  handleClick = evt => {
    const { value } = evt.target;
    this.setState(pState => ({
      [value]: pState[value] + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    this.setState(pState => ({
      total: pState.good + pState.neutral + pState.bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(pState => ({
      positivePercentage: ((pState.good / pState.total) * 100).toFixed(2),
    }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const isFeedback = good + neutral + bad;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleClick}
            options={['good', 'neutral', 'bad']}
          />
        </Section>
        <Section title="Statistics">
          {isFeedback ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          ) : (
            <StatisticEmpty message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}
