---
title: Adding typescript typings to your React components
slug: /adding-typescript-typings-to-you-react-components
date: 2019-11-15
excerpt: Have you tried adding Typescript to a React project and found it painful? Here you can find some recipes that will help you.
status: published
---

A while ago, we decided to move our codebase from Javascript to Typescript. Our main goals and expectations were:

- Reducing bugs.
- Improve developer expierience.
- Better component documentation.

Some of these expectations were met, other ones not, and some of them turned out to be not as good as expected, but better than before.

> Writing type definitions can be hell

The main handicap with this migration has been, without a doubt, getting type definitions right.

Some of our engineers come from a C# / .NET background, so Typescript typings were pretty smooth for them. But some of them had a Javascript background, so things were not that easy.

If you fit into the second group, this post will probably help you. I'll show you a few common patterns for typing your code. This post is mostly focused on React / Redux code, but some things apply to any code you are writing.

## Common Typing Patterns

In this section, I will explain the patterns we are using to type our components. We will be talking both about function components and class components; and both connected and non connected to the Redux store.

You will find examples, first with Javascript and then the same example with Typescript. All the examples work with the current TypeScript release (3.6 as of November 2019), and should continue to work with future ones. If you find one that is outdated or don't work, please contact me!

### Functional Components

A functional component is the simplest way to write a React component. It is just a function that takes up a single parameter (commonly known as `props`) and returns a valid `JSX` markup block.

Let's see an example of a functional component:

```jsx
const MyComponent = (props) => {
  return (
    <div className="card">
      <div className="card__header">
        {props.title}
      </div>
      <div className="card__body">
        {props.children}
      </div>
    </div>
  )
}
```

As we can see, this component takes up 2 parameters: a `title` and `children`.

Adding types to this type of components is fairly easy, as you only need to add a single interface to the `props` object.

```tsx
interface IProps {
  title: string;
  children: React.ReactNode;
}

const MyComponent = (props: IProps) => {
  return (
    <div className="card">
      <div className="card__header">
        {props.title}
      </div>
      <div className="card__body">
        {props.children}
      </div>
    </div>
  );
}
```

### Class Component

Class components are usually pretty straightforward to type. They're not that different from a functional component. 

A class component also accepts a single argument (commonly known as `props`), and has a set of predefined methods called [the react lifecycle](https://reactjs.org/docs/react-component.html).

A class component will usually have a `state` property, with some data attached to it. While it's not mandatory, it's one of the main reasons to have a class component.

Let's show an example of a class component!

```jsx
class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showErrorMessage: false,
      isLoading: false,
    }
  }

  onClick =  async () => {
    this.setState({
      isLoading: true,
    });

    const response = await this.props.DoSomeWork();

    this.setState({
      showErrorMessage: !response,
      isLoading: false,
    })
  }

  dismissModal = () => {
    this.setState({
        showErrorMessage: false,
    })
  }
  
  render() {
    return (
      <div>
        <Modal 
          open={this.state.showErrorMessage}
          onClose={this.dismissModal}
        >
          Something has gone wrong, please try again
        </Modal>
        <MyButtonComponent
          isLoading={this.state.isLoading}
          onClick={this.onClick}
        >
          Click Me!
        <MyButtonComponent>
      </div>
    )
  }
}
```
Pretty big huh? It's actually a pretty simple component:
* It takes a method called `doSomeWork` by props.
* It has a couple of boolean flags in state that indicate loading and error states.

So, how do we add types to it? In this case, we will need 2 interfaces instead of 1. We need to type both `props` and `state`.

```ts
interface IProps {
  doSomeWork: () => Promise<boolean>;
}

interface IState {
  isLoading: boolean;
  showErrorMessage: boolean;
}
```

They look exactly like the ones before. But how do we pass them into the class?. 

In order to do this, we will be using a Typescript feature called [generics](https://www.typescriptlang.org/docs/handbook/generics.html). They basically allow us to pass types into a function.

In this case, the typings for `React.Component` accept 2 type parameters: one for props and one for state.

So, our component will look like this:

```tsx
class MyClassComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    ...
  }
  ...
}
```
*I have omitted the rest of the file, because it is identical to the javascript version.*


### Redux-connected Component

Chances are that your application has `redux`. If you are, adding types can get a bit nasty because now your props come from 3 different places: regular `props`, data from the redux store, and action dispatchers.

Let's show an example of a connected component:

```jsx
const MyComponent = (props) => {
  const {onClick, label, isLoading} = props;

  return (
    <MyButtonComponent
      onClick={onClick}
      isLoading={isLoading}
    >
      {label}
    </MyButtonComponent>
  )
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(doSomeWorkActionCreator()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyComponent);
```

We need to specify that:
* `isLoading` come from **mapStateToProps**.
* `onClick` come from **mapDispatchToProps**.
* `label` is a regular prop.

How can we achieve this? Well, we first need to define 3 interfaces. Then we need to tell our component that `props` is the result of combining all 3 interfaces. And lastly, we need to specify that our exported component will only receive the `label` props.

It is actually easier than it sounds. Let's start making our 3 interfaces:

```tsx
interface IOwnProps {
  label: string;
}

interface IStateProps {
  isLoading: boolean;
}

interface IDispatchProps {
  onClick: () => boolean;
}
```
*We always use the same name for this type of interfaces. It helps keeping things consistent*

Now, let's add a `type` definition that merges all our interface definitions into one, and type our component with that.

```tsx
type IProps = IOwnProps & IStateProps & IDispatchProps;

const MyComponent = (props: IProps) => { ... }
```

Great! Our component is correctly typed. We only need to type the connect wrapper, and we are done. You need to add your interfaces to both `mapStateToProps` and `mapDispatchToProps`, and to the connect call. 

```tsx
const mapStateToProps = (state): IStateProps = ({ ... });

const mapDispatchToProps = (dispatch): IDispatchProps = ({ ... });

export default connect<IStateProps, IDispatchProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)
```

And we're done!

### [Bonus] Extending native HTML Elements

Sometimes, you want to build a React component that extends a native element functionality. 

For example, you may build a custom button that accepts a prop `isLoading` that disables the button and renders a spinner. Other than that, is a plain HTML `<button />`.

Let's look at the Javascript version of this component:

```jsx
const MyButtonComponent = (({
  isLoading = false,
  children,
  disabled,
  ...props
})) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
    >
      {isLoading ? renderSpinner() : children}
    </button>
  )
}
```
Looking at the component, we can tell a few different things:
* `isLoading` must be a boolean, and should be `optional`
* We need to allow any prop that is allowed in a `<button />`

To achieve this, we first need to know which parameters are allowed in a `<button />` element. That's a lot if you ever wonder. Luckily, there's an [interface](https://github.com/microsoft/TypeScript/blob/ba5e86f1406f39e89d56d4b32fd6ff8de09a0bf3/lib/lib.dom.d.ts#L6427) already built for us.

But that's not everything we need, because React also adds more props to a component (onClick, onBlur, key...), and we also need to allow these. Luckily for us, there's also another [interface](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/8e0fa6fc55e715ccd9ee1656ba4ce2106067fbf9/types/react/index.d.ts#L1649) ready for us.

So, back to the code!

```tsx

// Here I specify that my component accepts any Prop that an HTMLButton accepts.
interface IProps extends React.HTMLProps<HTMLButtonElement> {
  // Here I add my extra props. ? means optional
  isLoading?: boolean;
}

const MyButtonComponent = (({
  isLoading,
  children
  ...props
}): IProps) => {
  ...
}
```
Every time you need to extend a native element, you can follow this approach. There's interfaces for almost every HTML element out there! Just changing `HTMLButtonElement` for `HTMLDivElement` would give you all props accepted by a `div`.

Powerful right? Please, use this kind of structure every time you are wrapping a native element. It will give you a lot of flexibility! Don't forget to forward all the props to the final element though, because it wouldn't work.
