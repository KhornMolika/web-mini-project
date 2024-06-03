export const navbar = () => {
  return `
  <nav class="bg-slate-100 drop-shadow-md">
  <section class="flex justify-between w-[90%] m-auto h-[50px] items-center">
    <div>
      <a href="homepage.html">
        <img
        class="w-[100px]"
        src="./image/zoopla-logo/logo-no-background.png"
        alt="logo"
      />
      </a>
    </div>
    <div class="text-slate-800">
      <ul class="flex gap-10">
        <li>
          <a href="for-sale-page.html" class="hover:underline decoration-indigo-500"
            >For sale</a
          >
        </li>
        <li>
          <a href="to-rent-page.html" class="hover:underline decoration-indigo-500"
            >To rent</a
          >
        </li>
        <li class="hover:underline decoration-indigo-500">New Home</li>
      </ul>
    </div>
    <div>
      <ul class="flex gap-10">
        <li class="hover:underline decoration-indigo-500">My home</li>
        <li class="hover:underline decoration-indigo-500">Save</li>
        <li>
          <a
            href="./sign-up-page.html"
            class="hover:underline decoration-indigo-500"
            >Sign up</a
          >
        </li>
      </ul>
    </div>
  </section>
</nav>
  `;
};
