import Image from "next/image"
import { FcGoogle } from "react-icons/fc";
import BackArrow from "../(landing-page)/components/back-arrow"
export default function SignUp() {

    return (
        <main className="min-h-screen h-auto w-full bg-white font-inter text-gray-800">
            {/* Page wrapper */}
            <div className="min-h-screen flex flex-col">
              {/* Main two-column area */}
              <div className="flex-1 flex flex-col md:flex-row">

                {/* Left: Image / visual */}
                <div className="position: relative md:w-1/2 w-full">
                  {/* Use your own image file here (family.jpg). Ensure proper licensing. */}
                  <div className="h-full w-full bg-gray-100">
                    <Image
                        src="/images/signup-image.webp"
                        alt="Decorative photo"
                        fill={true}
                        loading="lazy"
                    />
                  </div>
                </div>

                {/* Right: Form panel */}
                <aside className="md:w-1/2 w-full justify-center px-6 pb-6 md:px-12 md:pb-12">
                  <div className="w-full xl-form-max">

                    {/* Top bar: back arrow + logo */}
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
                    <div className="bg-white border border-gray-100 rounded-lg shadow-md px-6 pb-6 md:px-8 md:pb-8">

                      <h1 className="text-2xl md:text-3xl font-raleway font-bold text-gray-900">Create Your Account</h1>
                      <p className="text-sm md:text-base font-raleway text-gray-600 mt-2">
                        Join our community of property seekers, agents, and vendors. It only takes a minute to get started.
                      </p>

                      <form id="signupForm" className="mt-6 space-y-4" autoComplete="off" noValidate>
                        {/* Full name */}
                        <div>
                          <label htmlFor="fullName" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Full name</label>
                          <input id="fullName" name="fullName" type="text" required
                              className="form-input w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-raleway font-[200]"
                              placeholder="Enter your name"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Email Address</label>
                          <input id="email" name="email" type="email" required
                              className="form-input w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-raleway font-[200]"
                              placeholder="Enter your email"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Phone Number</label>
                          <input id="phone" name="phone" type="tel"
                              className="form-input w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-raleway font-[200]"
                              placeholder="Enter your phone number"
                          />
                        </div>

                        {/* Alternate Email (image shows duplicate - keeping one extra field labeled Email Address) */}
                        <div>
                          <label htmlFor="altEmail" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Email Address (optional)</label>
                          <input id="altEmail" name="altEmail" type="email"
                              className="form-input w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-raleway font-[200]"
                              placeholder="Enter your email"
                          />
                        </div>

                        {/* Password */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="password" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Password</label>
                            <div className="relative">
                              <input id="password" name="password" type="password" required
                                  className="form-input w-full rounded-md border border-gray-200 px-3 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-brand-500 font-raleway font-[200]"
                                  placeholder="Choose a password"
                              />
                              <button type="button" id="togglePassword" className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500" aria-label="Show password">
                                Show
                              </button>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="confirmPassword" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Confirm Password</label>
                            <input id="confirmPassword" name="confirmPassword" type="password" required
                                className="form-input w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-raleway font-[200]"
                                placeholder="Enter password again"
                            />
                          </div>
                        </div>

                        {/* Role selection */}
                        <div>
                          <label htmlFor="role" className="block text-xs font-raleway font-bold text-gray-600 mb-2">Role Selection</label>
                          <select id="role" name="role" className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 font-raleway font-[200]" required>
                            <option value="">Select a role</option>
                            <option value="buyer">Buyer</option>
                            <option value="agent">Agent</option>
                            <option value="vendor">Vendor</option>
                          </select>
                        </div>

                        {/* Sign up button */}
                        <div>
                          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand-700 hover:bg-brand-600 text-white font-semibold px-4 py-2">
                            Sign up
                          </button>
                        </div>

                        {/* Secondary actions */}
                        <div className="text-center text-sm text-gray-600">
                          Already have an account? <a href="#" className="text-brand-500 font-medium hover:underline">Log in</a>
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
                          By creating an account, you agree to our <a href="#" className="text-brand-500 underline">terms of use</a>.
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