import { useState } from 'react';
import Container from './App.styled'
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = value => {

    switch (value) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;

      default:
        throw new Error();
    }

  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {

    return Math.round((good / countTotalFeedback()) * 100)
  }
  return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={Object.keys({good, neutral,bad})} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        {countTotalFeedback() > 0 ?
          <Section title='Statistics'>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section> :
          <Notification message="There is no feedback"></Notification>}
      </Container>
    );


};


export default App
