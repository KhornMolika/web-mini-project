export const footer = () => {
  return `
  <section class="bg-white mt-5 shadow-xl">
  <div class="w-[90%] m-auto flex text-[13px] justify-between py-10">
    <div class="flex flex-col justify-center">
      <img
        class="w-[120px]"
        src="./image/zoopla-logo/logo-no-background.png"
        alt="logo"
      />
      <p class="mt-[8px]">
        Copyright 2024 Zoopla Limited | Company number<br />
        06074771 | All right reserved
      </p>
    </div>
    <div>
      <p class="text-[15px] font-medium mb-[4px]">LINKS</p>
      <ul class="flex flex-col gap-1 text-violet-500 font-medium">
        <li><a href="">About Us</a></li>
        <li><a href="">Zoopla Terms of Use</a></li>
        <li><a href="">Zoopla Privacy</a></li>
        <li><a href="">Zoopla Cookie Policy</a></li>
      </ul>
    </div>
    <div>
      <p class="text-[15px] font-medium mb-[4px]">OUR SITES</p>
      <ul class="flex flex-col gap-1 text-violet-500 font-medium">
        <li><a href="">Zoopla</a></li>
        <li><a href="">Houseful</a></li>
        <li><a href="">Careers</a></li>
      </ul>
    </div>
    <div>
      <p class="text-[15px] font-medium mb-4">Contact</p>
      <div class="flex gap-2 text-[20px]">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  </div>
</section>
  `;
};
