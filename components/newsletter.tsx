import Burger from "@/public/images/burger.png"
import Image from 'next/image'

export default function Newsletter() {
  return (
    <section id="newsletter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gradient-to-r from-[#CE3760] to-[#FAC26D] rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="flip-up">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-2 translate-y-4 pointer-events-none hidden lg:block" aria-hidden="true">
              <Image className="animate-wiggle" src={Burger} height={300}/>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Join the Beta Tasting Revolution.</h3>
                <p className="text-gray-100 text-lg mb-6">Get a taste of the future before anyone else – become a beta tester for NUS Eats by sharing your email below!</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-gray-100 border border-gray-200 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                    <a className="btn text-gray-700 bg-[#FAC26D] hover:bg-yellow-500 shadow" href="#0">Join</a>
                  </div>
                  {/* Success message */}
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}