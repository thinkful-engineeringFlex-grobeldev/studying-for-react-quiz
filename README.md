# Questions

#### 1. What are smoke tests?

From thinkful:

```
In this lesson we will look at two specific testing scenarios, first, let us write a test that simply ensures that the component renders in the first place. These tests, while simple, are very useful especially as your component hierarchy grows. Suppose that some deeply nested component breaks the code? This type of test is known as a smoke test. The second type of testing we will look at here is also fairly simple to implement but provides a useful benefit. This is called snapshot testing. Snapshot testing compares the UI to a saved version of the UI and informs you if the UI changes at all. If you did not intend to update the UI at all this might indicate that something is wrong.
```

```
// make React available
import React from 'react';

//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

//make the App component available
import App from './App';

//this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App />, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});

```

#### 2. What does the exact prop of the Route component do?

#### 3. Explain the difference between props, state, and Context.

#### 4. What is a component?

#### 5. Explain the render method.

#### 6. How do you update state in a component?

#### 7. Describe the binding problem with event handlers.

#### 8. Which life cycle method is best suited for AJAX requests? Why?

#### 9. What is prop drilling and how can you solve it?

#### 10. How does React Router work?
