const CountingButton = ({init: count = 0}) => (
  <button click_e_update={() => (count += 1)}>
    Clicked {() => count} times
  </button>
);

const App = () => (
  <div>
    <h1>Hello Fusor</h1>
    <CountingButton />
    <CountingButton init={22} />
    <CountingButton init={333} />
  </div>
);

document.body.append(App().element);
