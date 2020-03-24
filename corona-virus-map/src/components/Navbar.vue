<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-dark">
    <img src="../assets/mylogo.png" alt="" style="width:80px;" />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <p class="nav-link" href="#">
            Map<span class="sr-only">(current)</span>
          </p>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Graphs</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
#nav {
  top: 0%;
  left: 0%;
  height: 10%;
  width: 100%;
  position: absolute;
}
</style>
