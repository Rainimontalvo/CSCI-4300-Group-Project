import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <section className="py-12 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-4xl md:text-5xl font-bold">
            <h1 className="text-4xl md:text-5xl font-bold">Find A UGA Partner</h1>
            <p className="text-lg text-gray-600">
              Connect with fellow Bulldogs, find nearby study partners for your courses, and boost your academic success together.
            </p>

          <div className="mx-auto w-[800px]">
            <Image 
                  src="/students-studying.png" 
                  alt="Students studying together" 
                  width={800}
                  height={500}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                

            <div className="flex justify-center mt-4">
            <Link
            href="/sign-up"
            className="inline-block bg-[#c9102f] text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-[#a3001d] transition-colors no-underline"
            >
              Get Start
              </Link>
            </div>
          </div>
         </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Finding the perfect study partner to enhance your UGA learning experience
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Feature */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Using Map</h3>
              <div className="mb-4">
                <Image 
                  src="/map.png" 
                  alt="Map feature" 
                  width={500}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <p className="mb-6 text-gray-600">
                Use the map feature to easily find study buddies on campus or in nearby cafes and libraries. 
                Simply click Start to see who is studying around you.
              </p>
              <Link 
              href="/sign-up" 
              className="inline-block text-white bg-[#c9102f] px-4 py-2 rounded font-medium hover:bg-[#a3001d] transition-colors"
              >
                Start
                </Link>

            </div>
            
            {/* Course Matching Feature */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Based on course matching</h3>
              <div className="relative h-60 mb-4">
                <Image 
                  src="/course-matching.png" 
                  alt="Course matching" 
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
              <p className="mb-6 text-gray-600">
                Enter the code of the UGA course you are taking. The system will automatically recommend 
                students who are taking the same course. We take into account your study habits,
                academic interests and location preferences to recommend the most suitable study partner for you.
              </p>
              <Link href="/sign-up" className="inline-block text-white bg-[#c9102f] px-4 py-2 rounded font-medium hover:bg-[#a3001d] transition-colors">
                Start
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say...</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <p className="italic mb-4 text-gray-600">
                "Through UGA Study Partner, I found a study group in my Calculus class, and we
                worked together to prepare for the final exam and all ended up getting As! I highly
                recommend this program to anyone who wants to improve their study efficiency!"
              </p>
              <div>
                <p className="font-bold">Jessica C</p>
                <p className="text-sm text-gray-500">Computer Science</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <p className="italic mb-4 text-gray-600">
                "As a transfer student, this app helped me find study buddies in the same major
                and not only improved my grades, but also made new friends!"
              </p>
              <div>
                <p className="font-bold">Tony J</p>
                <p className="text-sm text-gray-500">Business</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <p className="italic mb-4 text-gray-600">
                "The map feature is fantastic! I can always find a classmate in the library or coffee shop
                who is taking the same course!"
              </p>
              <div>
                <p className="font-bold">Michael K</p>
                <p className="text-sm text-gray-500">Chemistry</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}

