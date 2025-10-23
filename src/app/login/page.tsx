import Image from "next/image"
import { FcGoogle } from "react-icons/fc";
import BackArrow from "../(landing-page)/components/back-arrow"
export default function LogIn() {

    return (
        <main className="min-h-screen bg-white font-inter text-gray-800">
          {/* Page wrapper */}
          <div className="min-h-screen flex flex-col">
            {/* Main two-column area */}
            <div className="flex-1 flex flex-col md:flex-row">

              {/* Left image column */}
              <div className="position: relative md:w-1/2 w-full">
                {/* Use your own image file here (family.jpg). Ensure proper licensing. */}
                <div className="h-full w-full bg-gray-100">
                  <Image
                      src="/images/login-image.webp"
                      alt="Decorative photo"
                      fill={true}
                      loading="lazy"
                  />
                </div>
              </div>

              {/* Right form column */} 
              <aside className="md:w-1/2 w-full flex items-center justify-center px-6 pb-6 md:px-12 md:pb-12">
                <div className="w-full xl-panel-max">

                  {/* Top bar: back and logo */}
                  <div className="flex items-center justify-between w-auto">
                    <BackArrow/>
                    <div className="flex items-center gap-2">
                      <Image
                          src="/logo-icon.png"
                          alt="Housing & Properties"
                          width={44}
                          height={44}
                          className="w-10 h-10 object-contain" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-gray-100 rounded-lg shadow-md p-6 md:p-8">

                    <h1 className="text-2xl md:text-3xl font-raleway font-bold text-gray-900">Welcome Back</h1>
                    <p className="text-sm font-raleway font-light md:text-base text-gray-600 mt-2">
                      Log in to manage your properties, shop home items, or connect with agents
                    </p>

                    <form id="loginForm" className="mt-6 space-y-4" autoComplete="off" noValidate>
                      {/* Email or Phone */}
                      <div>
                        <label htmlFor="identifier" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Email or Phone number</label>
                        <input id="identifier" name="identifier" type="text" required
                          className="form-input w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                          placeholder="Enter your email or phone number"
                        />
                      </div>

                      {/* Password */}
                      <div>
                        <label htmlFor="password" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Password</label>
                        <div className="relative">
                          <input id="password" name="password" type="password" required
                            className="form-input w-full rounded-md border border-gray-200 px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-brand-500"
                            placeholder="Enter your password"
                          />
                          <button type="button" id="togglePassword" className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500" aria-label="Show password">Show</button>
                        </div>
                      </div>

                      {/* Remember / forgot */}
                      <div className="flex items-center justify-between text-sm">
                        <label className="inline-flex items-center gap-2 text-gray-600">
                          <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-brand-700 focus:ring-brand-500" />
                          <span>Remember password</span>
                        </label>
                        <div>
                          <a href="#" id="forgotLink" className="text-gray-500 hover:text-gray-700">Forgotten password? <span className="text-brand-500 font-medium">Reset</span></a>
                        </div>
                      </div>

                      {/* Log in button */}
                      <div>
                        <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-700 hover:bg-brand-600 text-white font-semibold px-4 py-2">
                          Log in
                        </button>
                      </div>

                      <div className="text-center text-sm text-gray-600">
                        Don't have an account? <a href="#" className="text-brand-500 font-medium hover:underline">Sign up</a>
                      </div>

                      <div className="flex items-center gap-3 my-2">
                        <div className="flex-grow h-px bg-gray-200"></div>
                        <div className="text-xs text-gray-400">OR</div>
                        <div className="flex-grow h-px bg-gray-200"></div>
                      </div>

                      {/* Google Sign up */}
                      <button className="flex items-center justify-center w-full border border-gray-300 space-x-2 rounded-md py-2 mb-4 hover:bg-gray-50 transition">
                        <FcGoogle size={22} />
                        <span className="text-sm font-medium text-gray-700">
                          Sign up with Google
                        </span>
                      </button>

                      <p className="text-xs text-gray-400 mt-3">
                        By logging in you agree to our <a href="#" className="text-brand-500 underline">terms of use</a>.
                      </p>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>
    )
}