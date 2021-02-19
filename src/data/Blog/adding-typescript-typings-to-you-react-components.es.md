---
title: Consejos y ejemplos para añadir typescript a tus componentes React
slug: /adding-typescript-typings-to-you-react-components
date: 2019-11-15
excerpt: Has probado alguna vez a añadir Typescript a un proyecto de React y te ha parecido difícil? En este artículo te dejo algunos consejos y ejemplos.
status: published
---

Hace poco, tomamos la decision de migrar parte de nuestro código de Javascript a Typescript. Los principales motivos y expectativas eran:
- Reducir bugs
- Mejorar la experiencia de desarrollo
- Mejor documentación de componentes

Algunas de las expectativas se cumplieron, algunas no, y algunas resultaron ser no tan buenas como esperábamos, pero mejores que antes.

> Escribir tipos puede ser un infierno

El principal problema durante esta migración ha sido, sin duda, escribir bien las definiciones de tipos

Algunos de los miembros del equipo tenían experiencia con C# / .NET, así que no tuvieron ningún problema con los tipos. Pero algunos otros sólo tenían experiencia con Javascript, y las cosas no fueron tan sencillas.

Si tu descripción encaja con la de este segundo grupo, espero que este artículo te pueda ayudar. Te voy a mostrar algunos de los patrones que hemos utilizado para añadir tipos a nuestro código. Los ejemplos están muy enfocados a componentes de React, pero los principios aplican a cualquier tipo de código.

## Patrones comunes para tipar componentes

En esta sección, voy a explicar los patrones que utilizamos para tipar nuestros componentes. Hablaremos sobre componentes funcionales y basados en clases; tanto conectados a la store de Redux como no.

Lo veremos utilizando ejemplos, primero en Javascript y después en Typescript. Los ejemplos deberían funcionar con la versión actual de Typescript (3.6 a Noviembre de 2019), y deberían seguir funcionando con versiones futuras. Si encuentras algun ejemplo desactualizado, o que no funciona, por favor contacta conmigo para que pueda arreglarlo.

### Componentes funcionales

Un componente funcional es la forma más sencilla de escribir un componente de React. Se trata de una simple función, que recibe un sólo parámetro (comunmente llamado `props`) y retorna un bloque de `JSX` válido.

Vamos a ver un ejemplo de un componente funcional:

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
Si miramos este componente, podemos ver que acepta dos `props`: `title` y `children`.

Añadir tipos de Typescript a este tipo de componentes es bastante sencillo, ya que lo podemos hacer con una `interface` para los `props`.

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

### Componentes de Clase

Los componentes de clase suelen ser bastante sencillos de tipar. En el fondo, no son muy diferentes que los funcionales.

Un componente de clase, al igual que un funcional, sólo recibe un parámetro (las `props`). Además de eso, tiene una serie de métodos predefinidos llamados [el ciclo de vida de React](https://reactjs.org/docs/react-component.html).

Un componente de clase puede tener una propiedad llamada `state`, con algunos datos asociada a ella. Aunque no es obligatorio, es una de las principales razones para tener un componente de clase.

Vamos a ver un ejemplo de componente clase:

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
¿Bastante grande verdad? En realidad es un componente bastante sencillo:
* Acepta un método llamado `doSomeWork` por props.
* Tiene dos `booleans` en el state que indican estados de carga y error.

Para añadir tipos a este componente, vamos a necesitar dos interfaces en vez de una: para las `props` y para el `state`. 

Vamos a escribir las interfaces primero:

```ts
interface IProps {
  doSomeWork: () => Promise<boolean>;
}

interface IState {
  isLoading: boolean;
  showErrorMessage: boolean;
}
```

Como ves, son exactamente iguales que las anteriores, pero ahora tenemos dos. La pregunta es, ¿cómo las añadimos al componente?

Para añadirlas, vamos a utilizar una funcionalidad de Typescript llamada [generics](https://www.typescriptlang.org/docs/handbook/generics.html). Nos permite pasar como parámetro un tipo (en este caso una interface) a otra definición de tipo (en este caso, a una clase).

`React.Component` es un tipo genérico, que acepta dos parámetros de tipo: uno para las props y otro para el state. Sólo necesitamos añadirle nuestras interfaces a la definición del componente.

Este sería el resultado:

```tsx
class MyClassComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    ...
  }
  ...
}
```
*He omitido el resto del fichero porque no tiene ningún cambio respecto a la versión en Javascript*

### Componente conectado a Redux

`Redux` es una de las soluciones más populares para gestionar el estado en una aplicación `React`, así que tienes muchos números de encontrarte en la situación de trabajar con un componente conectado.

Añadir tipos a un componente conectado se vuelve un poco más interesante, ya que ahora nuestras `props` pueden venir de tres sitios diferentes:
* Las que nos pasan desde fuera, igual que en otros componentes.
* Datos que sacamos de la store
* Action Creators para lanzar acciones.

Vamos a ver un ejemplo de componente conectado:

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
Si queremos tipar este componente, necesitamos especificar que:
* `isLoading` viene de **mapStateToProps**.
* `onClick` viene de **mapDispatchToProps**.
* `label` es una prop normal y corriente.

¿Cómo lo hacemos? Vamos por partes. Primero, vamos a especificar nuestras tres interfaces:

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
*Nosotros siempre utilizamos estos nombres para estas tres interfaces. Ayuda a identificar muy rápido de donde viene cada prop.*

Con estas tres interfaces, vamos a utilizar otra vez los `generics` de Typescript, para pasarselas a la función `connect`. La función `connect` acepta los tres parámetros de tipos.

Además, las utilizaremos para indicar los tipos de retorno de las funciones `mapStateToProps` y `mapDispatchToProps`.

Por último, definiremos un tipo nuevo `IProps` que sea la combinación de las tres interfaces, para indicarle todas las props al componente.

En realidad, es más fácil de lo que suena... ¡Vamos a verlo!

```tsx
type IProps = IOwnProps & IStateProps & IDispatchProps;

const MyComponent = (props: IProps) => { 
  ... 
}

const mapStateToProps = (state): IStateProps = ({ ... });

const mapDispatchToProps = (dispatch): IDispatchProps = ({ ... });

export default connect<IStateProps, IDispatchProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent)
```

Eso es todo. Con estas anotaciones, el compilador sabrá perfectamente de dónde sale cada dato.

### [Bonus] Extender elementos nativos de HTML

A veces, vas a tener que construir un componente de React que extienda la funcionalidad de un elemento nativo.

Por ejemplo, puedes construir un botón que acepte una prop `isLoading` que lo deshabilite y muestre un spinner. Aparte de eso, es idéntico a un `<button />` de HTML.

Vamos a empezar con la versión en Javascript de este componente:

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
Algunas observaciones:
* `isLoading` es un boolean, y es opcional
* Cualquier parámetro que se pueda pasar a un `<button />`, debe poderse pasar a nuestro componente

Para conseguir esto, primero necesitamos saber qué parametros se permiten en un `<button />`. Por si nunca te lo has preguntado, hay un montón. Por suerte, existe una [interface](https://github.com/microsoft/TypeScript/blob/ba5e86f1406f39e89d56d4b32fd6ff8de09a0bf3/lib/lib.dom.d.ts#L6427) con esta información disponible.

¡Pero esto no es todo! `React` añade más props a los componentes (`onClick`, `onBlur`, `key`...) que también debemos tener en cuenta. Volvemos a estar de suerte, ya que hay [otra interface](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/8e0fa6fc55e715ccd9ee1656ba4ce2106067fbf9/types/react/index.d.ts#L1649) preparada para ser usada.

Con toda esta información, ¡volvemos al código!

```tsx

// Aquí especifico que mi componente puede recibir las mismas props que un <button />
interface IProps extends React.HTMLProps<HTMLButtonElement> {
  // Aquí añado las props adicionales. ? significa opcional.
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
Siempre que extiendas un componente nativo, puedes seguir este patrón. Existen interfaces para casi todos los elementos HTML. Sólo cambiando `HTMLButtonElement` por `HTMLDivElement` haría que nuestro componente aceptara las mismas props que un `<div />`.
