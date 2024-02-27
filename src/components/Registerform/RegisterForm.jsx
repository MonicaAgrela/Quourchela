import React from "react";

function RegisterForm() {
  return (
    <div className="container max-w-full mx-auto md:py-24 px-6">
      <div className="max-w-sm mx-auto px-6">
        <div className="relative flex flex-wrap">
          <div className="w-full relative">
            <div className="md:mt-6">
              <div className="text-center font-semibold text-black">
                Lorem ipsum dolor
              </div>
              <div className="text-center font-base text-black">
                Sed ut perspiciatis unde?
              </div>
              <form
                className="mt-8"
                x-data="{password: '',password_confirm: ''}"
              >
                <div className="mx-auto max-w-lg">
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">Username</span>
                    <input
                      placeholder=""
                      type="text"
                      className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    />
                  </div>
                  {/* Other input fields */}
                </div>
              </form>
              {/* Other elements */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
