export default function Landing() {
    return (
      
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Welcome to VibrantKnots
              <br />
              Crochet Creations.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 font-semibold text-slate-700">
              New drops happen on Etsy every month. Choose your plant style, leaf color, and planter color!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.etsy.com/shop/VibrantKnotsCrochet?ref=seller-platform-mcnav"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Etsy Shop
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Samples<span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
    )
  }
  