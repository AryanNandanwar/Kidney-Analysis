import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <header className="w-dvw absolute top-0 left-1/2 -translate-x-1/2 z-[1000] py-4">
        <div className="max-w-[120rem] text-gray-50 px-6 md:px-8 lg:px-10">
          <nav className="w-full flex flex-row items-center font-sans">
            <a className="text-gray-50" href="/">
              <svg className="h-8 w-8" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="94" y="81" width="40" height="350" fill="currentColor"></rect>
                <rect x="264" y="81" width="40" height="350" fill="currentColor"></rect>
                <circle cx="199" cy="131" r="50" fill="currentColor"></circle>
                <circle cx="199" cy="246" r="50" fill="currentColor"></circle>
                <circle cx="369" cy="131" r="50" fill="currentColor"></circle>
                <circle cx="369" cy="246" r="50" fill="currentColor"></circle>
              </svg>
            </a>
            <div className="flex-1 relative hidden md:flex items-center justify-center text-black">
              <ul className="mx-auto inline-flex gap-6 text-sm font-light">
                <li>
                  <a className=" text-black relative after:h-px after:content-[''] after:w-full after:absolute after:top-full after:bg-accent-500 after:left-0 after:translate-y-1" href="">
                    Accueil
                  </a>
                </li>
                <li><a href="">Qui sommes nous?</a></li>
                <li><a href="">Plan</a></li>
                <li><a href="">Mission</a></li>
              </ul>
              <ul className="absolute right-0">
                <li className="relative">
                  <Link to="/login" className="h-10 rounded-lg flex items-center justify-center text-base bg-accent-500 leading-none px-12 uppercase">
                  Login
                  </Link>
                </li>
                

              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className="h-dvh w-dvw max-h-[80rem] relative">
        <div className="absolute inset-0 z-[1]">
          <img className="h-full w-full object-cover object-center" src="https://www.health.gov.au/sites/default/files/images/news/2020/06/research-to-use-artificial-intelligence-to-improve-health-care.jpg" alt="" />
        </div>
        <div className="max-w-[120rem] mx-auto h-full relative z-[2] px-6 md:px-8 lg:px-10">
          <div className="h-full w-full flex flex-col relative space-y-6">
            <div className="mt-auto mb-0 text-gray-50 md:pb-36 space-y-6">
              
              <h1 className="text-3xl md:text-5xl max-w-[30rem] font-medium text-black">NephroSense AI</h1>
              <p className="max-w-[30rem] font-light ml-4 before:content-[''] relative before:absolute before:w-px before:h-full before:left-0 before:top-0 before:-translate-x-4 before:bg-accent-500 md:text-base text-sm text-black">
                Your one stop for examining your kidney health, diagnosing any potential kidney diseases through various technologies and techniques and accessing personalized treatment plans for the betterment of your health.
              </p>
              <div className="md:flex-row flex-col flex gap-4">
                <button className="inline-block text-base font-medium px-12 py-2 bg-accent-400 rounded-lg cursor-pointer text-black">En savoir plus</button>
                <button className="inline-block text-base font-medium px-12 py-2 border border-accent-400 rounded-lg text-accent-400 cursor-pointer bg-gray-50/10 backdrop-blur-3xl text-black">Nos Horaires</button>
              </div>
            </div>

            <div className="md:absolute md:right-0 md:bottom-32 text-gray-50 my-16">
              <ul className="flex md:flex-col items-center justify-center gap-2">
                <li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50">
                  <a href="" className="block h-full w-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path fill="currentColor" d="M18 2a1 1 0 0 1 .993.883L19 3v4a1 1 0 0 1-.883.993L18 8h-3v1h3a1 1 0 0 1 .991 1.131l-.02.112l-1 4a1 1 0 0 1-.858.75L17 15h-2v6a1 1 0 0 1-.883.993L14 22h-4a1 1 0 0 1-.993-.883L9 21v-6H7a1 1 0 0 1-.993-.883L6 14v-4a1 1 0 0 1 .883-.993L7 9h2V8a6 6 0 0 1 5.775-5.996L15 2z"></path>
                    </svg>
                  </a>
                </li>
                <li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50">
                  <a href="" className="h-full w-full block p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full fill-current">
                      <path d="M256.283 47.553c70.693 0 128 54.682 118 128.931-2.072 15.388-3.422 31.483-4.26 44.759 0 0 2.402 4.253 12.664 4.253 6.071 0 14.895-1.543 27.596-6.354 2.236-.847 4.377-1.241 6.377-1.241 7.918 0 13.615 5.931 14.123 12.271.426 5.31-4.564 11.199-8.371 13.009-13.766 6.542-46.991 10.063-46.991 32.638 0 22.576 22.362 46.656 40.862 63.713S480 360.602 480 360.602s.283 21.57-31.717 29.097c-32 7.524-32.1 5.712-33.25 13.796-2.133 14.979-1.535 21.378-11.248 21.378-1.672 0-3.651-.19-6.002-.558-8.23-1.291-19.239-3.644-31.121-3.644-11.216 0-23.21 2.097-34.379 9.161-23 14.549-41.283 34.114-76.283 34.114s-53-19.565-76-34.114c-11.17-7.065-23.162-9.161-34.379-9.161-11.88 0-22.892 2.353-31.121 3.644-2.352.367-4.33.558-6.002.558-9.71 0-9.115-6.399-11.248-21.378-1.151-8.084-1.25-6.27-33.25-13.795s-32-29.097-32-29.097 45.5-4.012 64-21.068c18.5-17.058 40.862-41.134 40.862-63.71 0-22.575-33.226-26.097-46.991-32.638-3.807-1.81-8.797-7.698-8.371-13.009.508-6.34 6.205-12.271 14.123-12.271 2 0 4.141.394 6.377 1.241 12.701 4.811 21.525 6.354 27.596 6.354 10.262 0 12.664-4.253 12.664-4.253-.838-13.276-2.188-29.371-4.26-44.759-10-74.249 47.308-128.931 118-128.931z"></path>
                    </svg>
                  </a>
                </li>
                <li className="h-6 w-6 block rounded-full bg-accent-400 text-gray-50">
                  <a href="" className="h-full w-full block p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full fill-current">
                      <path d="M7.975 10.54a6.978 6.978 0 0 0 0 2.92m0 0a7.004 7.004 0 0 0 8.05 0m-8.05 0h-.017C5.38 13.46 4 11.963 4 10s1.379-3.46 3.975-3.46C9.62 6.54 12 10 12 10s-2.38 3.46-4.025 3.46c-.016 0-.016 0 0 0"></path>
                      <path d="M12 6.539A7.005 7.005 0 0 1 20 10c0 1.964-1.379 3.46-3.975 3.46H16m-8 0v5.001M8 21a3 3 0 0 1 6 0m4-10.06V18.999m4-2v3"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
