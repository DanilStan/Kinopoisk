import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={this.state} />
        <h2>Statistics</h2>

        <ul>
          <li>
            <p>Good</p>
          </li>
          <li>
            <p>Neutral</p>
          </li>
          <li>
            <p>Bad</p>
          </li>
        </ul>
      </Section>
    );
  }
}
