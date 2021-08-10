<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/databinding">DataBinding</router-link> | 
    <router-link to="/dbhtml">DataBindingHtml</router-link> | 
    <router-link to="/dbform">Form</router-link> | 
    <router-link to="/dbattr">Attribute</router-link> | 
    <router-link to="/loopcond">Loop, Conditional</router-link> | 
    <router-link to="/event">Event</router-link> | 
    <router-link to="/comp">Compute&Watch</router-link> | 
    <router-link to="/http">Http</router-link> | 
    <router-link to="/comps">Components</router-link> | 
    <router-link to="/slot">Slot</router-link> | 
    <router-link to="/prov">Provide/Inject</router-link> | 
    <router-link to="/compos">Composition</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
