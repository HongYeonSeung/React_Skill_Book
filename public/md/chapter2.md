# ch.2 코드 이해하기

### 리액트 프로젝트 설치 이후 app.js 파일의 코드

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';
```

### import 구문

- 이는 특정 파일을 불러오는 것을 의미합니다. 리액트로 만든 프로젝트의 자바스크립트 파일에서는 import를 사용하여 다른 파일들을 불러와 사용할 수 있습니다.
- 다만, 모듈을 불러와 사용하는 기능은 브라우저의 자체 기능이 아닌 Node.js에서 지원하는 기능입니다. 참고로 Node.js는 import가 아닌 require 구문을 사용합니다.
- 이러한 기능을 브라우저에서도 사용하기 위해 번들러를 사용합니다. 대표적인 번들러로는 웹팩, Parcel, Browserify 같은 도구들이 있으며, 리액트에서는 주로 웹팩을 사용하는 추세입니다.

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

이 코드는 app이라는 컴포넌트를 만들어주는 코드입니다. function 키워드를 사용하여 컴포넌트를 만들었는데, 이를 함수 컴포넌트라 부릅니다. 위와 같은 코드를 JSX라고 부릅니다.

## JSX

### 보기 쉽고 익숙하다

- 리액트를 일반 자바스크립트 코드로 변환하면 아래와 같은 코드로 변환됩니다

```jsx
React.createElement("div", null, "Hello", React.createElement("b", null, "react"));
```

- 만약 코드를 작성할 때마다 JSX 대신 위 코드처럼 매번 React.createElement 함수를 사용해야 한다면 매우 불편할 것입니다. 그래서 JSX를 사용하면 매우 편하게 렌더링할 수 있습니다.

### 더욱 높은 활용도

- JSX에서 우리가 알고있는 DIV나 SPAN같은 HTML 태그를 사용할수 있을 뿐 아니라 앞으로 만들 컴포넌트들도 JSX안에서 작성할수 있습니다

## JSX 문법

### 컴포넌트에 여러 요소가 있다면 반드시 부모 요소로 하나로 감싸야 합니다

- Virtual DOM에서 컴포넌트를 감지해낼때 효율적으로 비교할수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙때문이다

## 자바스크립트 표현

- jsx 안에서는 자바스크립트 표현식을 사용해 자바스크립트를 사용할수 있다 사용 방법은 jsx 내부에서 코드를 { } 로 감싸면 된다

```jsx

function chapter1() {
  const name = "홍길동"
  return (
    <div>
      {name} hlleo
    </div>
  );
}
```

## if문 대신 조건부 연산자

jsx 내부의 자바스크립트 표현식에서 if문을 사용할수는 없습니다 하지만 조건에 따라 다른 내용을 렌더링할떄는 jsx 밖에서 if문을 사용하거나 조건부 연산자를 사용하면 됩니다, 조건부 연산자의 다른 이름은 삼항 연산자라고 합니다.

```jsx
function chapter1() {
  const name = "홍길동";
  return (
    <div>
      {name === "홍길동" ? <h1>홍길동입니다</h1> : <h1>홍길동이아닙니다.</h1>}
    </div>
  );
}
```