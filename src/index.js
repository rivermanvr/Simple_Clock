function tick() {
  const element = (
    <div className="container">
      <h3>A simple Clock...</h3>
      <h4>It is {new Date().toLocaleTimeString()}.</h4>
    </div>
  );
  ReactDOM.render(element,document.getElementById('root'));
}

setInterval(tick, 1000);
