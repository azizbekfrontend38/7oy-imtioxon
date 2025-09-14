import forkPattern from "../../assets/images/pattern-fork.svg";
import knifePattern from "../../assets/images/pattern-knife.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import blueskyIcon from "../../assets/images/icon-bluesky.svg";
import tiktokIcon from "../../assets/images/icon-tiktok.svg";

function Footer() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      {/* CTA Section */}
      <section className="flex flex-col gap-10 my-20">
        {/* CTA Box with overlay images */}
        <div
          className="
            relative
            grid
            h-[400px]
            rounded-2xl
            px-6 md:px-16
            place-content-center
            text-center
            bg-neutral-200
            overflow-hidden
          "
        >
          {/* Background decorations */}
          <img
            src={forkPattern}
            alt=""
            className="lg:absolute left-[-80px] top-1/2 -translate-y-1/2 max-lg:hidden"
          />
          <img
            src={knifePattern}
            alt=""
            className=" lg:absolute right-[-50px] top-1/2 -translate-y-1/2 max-lg:hidden"
          />

          {/* Content */}
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 relative z-10">
            Ready to cook smarter?
          </h2>
          <p className="text-neutral-700 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <button
            className="
              bg-neutral-900 
              text-white 
              rounded-lg 
              px-5 py-2.5 
              text-base md:text-lg 
              font-medium 
              hover:bg-neutral-800 
              transition 
              z-10 
              w-fit mx-auto
            "
          >
            Browse recipes
          </button>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-700">Made with ❤️ and 🥑</p>
          <span className="flex gap-6">
            <img src={instagramIcon} alt="instagram" className="w-6 h-6 cursor-pointer" />
            <img src={blueskyIcon} alt="bluesky" className="w-6 h-6 cursor-pointer" />
            <img src={tiktokIcon} alt="tiktok" className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </section>
    </div>
  );
}

export default Footer;
