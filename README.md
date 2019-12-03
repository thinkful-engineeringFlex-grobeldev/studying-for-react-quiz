# Questions

#### 1. What are smoke tests?

From thinkful:

In this lesson we will look at two specific testing scenarios, first, let us write a test that simply ensures that the component renders in the first place. These tests, while simple, are very useful especially as your component hierarchy grows. Suppose that some deeply nested component breaks the code? This type of test is known as a smoke test. The second type of testing we will look at here is also fairly simple to implement but provides a useful benefit. This is called snapshot testing. Snapshot testing compares the UI to a saved version of the UI and informs you if the UI changes at all. If you did not intend to update the UI at all this might indicate that something is wrong.

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

In a React component, props are variables passed to it by its parent component.
State on the other hand is still variables, but directly initialized and managed by the component.

#### 4. What is a component?

Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

#### 5. Explain the render method.

Its is a method required in React class components.
When its called, It returns one of the following basing on this.props or this.state -:
React elements created using JSX. These can either be native browser html elements like <p>hi</p> or user defined react components e.g <LoginComponent />

#### 6. How do you update state in a component?

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }


  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
}
```

#### 7. Describe the binding problem with event handlers.

```
class Foo extends React.Component{
  constructor( props ){
    super( props );
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    // your event handling logic
  }

  render(){
    return (
      <button type="button"
      onClick={this.handleClick}>
      Click Me
      </button>
    );
  }
}

ReactDOM.render(
  <Foo />,
  document.getElementById("app")
);
```

#### 8. Which life cycle method is best suited for AJAX requests? Why?

Why is it recommended to do Ajax in componentDidMount instead of componentWillMount?

There is one very simple reason why it is not possible to make your Ajax calls in componentWillMount.

From the official react docs:

_...setting state in this method will not trigger a re-rendering_

This means if you make the Ajax call, and set the response to the component state, the component will not re-render. You will not visually see the result in the DOM from your Ajax call, and that is not what you wanted.

#### 9. What is prop drilling and how can you solve it?

Prop Drilling means to pass props multiple levels of components deep in order to reach a particular component that needs those props. And since a parent can’t pass a prop directly to one of its grandchildren it needs to go through other components on its way down.

The problem is that all those other components won’t actually use the prop, they will just pass it down to lower level. This leads to the unnecessary exposure of information and tighter coupling in the code base. Changing the data’s structure or the name of the prop would require modifications in multiple places.

It’s a common occurrence to rename a prop in a component due to name collisions or for the sake of clarity. Doing that a couple of times in the prop drilling chain will only leave us confused and frustrated.

#### 10. How does React Router work?
