<script>
  
</script>

<header class="mt-20 pt-10 bg-green-800 relative">
  <div class="container text-center mx-auto py-6 w-11/12">
    <h1 class="text-5xl font-semibold text-white">
      My works
    </h1>
    <hr class="my-5 mx-48 border-yellow	border-2 rounded-full" />
    <h3 class="text-3xl mb-8 text-white">
      What I had fun with so far
    </h3>
  </div>
</header>

<main class="text-center bg-green-800 relative md:pb-20">
  <div class="main_bg" />
  <div class="container mx-auto relative">
    <div
      class="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-3 p-5 lg:px-10"
    >
      <div
        class="rounded-3xl overflow-hidden border-green-800 border-2 shadow-lg mx-5 my-5"
      >
        <img class="mx-auto" src="/images/logo.webp" alt="Desktop" />
      </div>
      <div class="col-span-2 mx-5 my-5">
        <p class="text-white text-3xl">DShift</p>
      </div>
    </div>
    <div
      class="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-3 p-5 lg:px-10"
    >
      <div
        class="rounded-3xl overflow-hidden border-green-800 border-2 shadow-lg mx-5 my-5"
      >
        <img class="mx-auto" src="/images/logo.webp" alt="Desktop" />
      </div>
      <div class="col-span-2 mx-5 my-5">
        <p class="text-white">Here will go some description</p>
      </div>
    </div>
    <div
      class="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-3 p-5 lg:px-10"
    >
      <div
        class="rounded-3xl overflow-hidden border-green-800 border-2 shadow-lg mx-5 my-5"
      >
        <img class="mx-auto" src="/images/profile.webp" alt="Desktop" />
      </div>
      <div class="col-span-2 mx-5 my-5">
        <p class="text-white">Here will go some description</p>
      </div>
    </div>
  </div>
</main>

<style>
  .main_bg {
    position: absolute;
    top: 50%;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: white;
    transform: skewY(-3deg);
    transform-origin: top left;
  }
</style>