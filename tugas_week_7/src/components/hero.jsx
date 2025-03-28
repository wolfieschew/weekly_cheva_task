export default function Hero() {
    return (
        <section class="h-[93.7vh]">
        <div id="content" class="flex">
            <div id="left-content" class="sm:w-[80%] w-[85%] sm:px-[20%] px-[5%] my-[10rem]">
                <h1 class="sm:text-[6rem] text-[2rem]">Human<br /> stories & ideas</h1>
                <p class="text-xl">A place to read, write, and deepen your understanding</p>
                <button class="bg-black text-white px-[1rem] py-[0.5rem] rounded-[2rem] mt-5">Start
                    Reading</button>
            </div>
            <div id="right-content">
                <img class="sm:h-[35rem] h-[20rem] mt-32" src="src/assets/design.webp" alt="hero-image" />
            </div>
        </div>
    </section>
    );
  }
  