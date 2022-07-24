<h1>React Components Life Cycle</h1>
<p>Every React component life is divided into three main parts. We can call these methods on each of the phases.</p>
<ol>
<li>Mounting</li>
<li>Updating</li>
<li>Unmounting</li>
</ol>
<h3>(1) Mounting</h3>
<p>Mounting means to put elements/components inside our DOM. During the process of Mounting following methods are called: - </p>
<ul>
  <li>
  constructor()
  </li>
  <li>
  getDerivedStateFromProps()
  </li>
  <li>
  render() [IMPORTANT]
  </li>
  <li>
  componentDidMount()
  </li>
</ul>

<p>
Except for render(), All of the above methods are called respectively but only if they are defined inside the component. Otherwise only render() is called to render the code of the component.
</p>

<h3>(2) Updating</h3>
<p>The Updating is the 2nd phase of any component and its functions are called when there is any kind of updation in the component. Following Methods are called a component is updated: - </p>
<ul>
  <li>getDerivedStateFromProps()</li>
  <li>shouldComponentUpdate()</li>
  <li>render()</li>
  <li>getSnapshotBeforeUpdate()</li>
  <li>componentDidUpdate()</li>
</ul>
<p>The getDrivedStateFromProps() method will be called first as this is natural place to set State</p>
