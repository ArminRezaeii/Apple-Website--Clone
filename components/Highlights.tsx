
import VideoCarousel from "./VideoCarousel"
import Links from "./Links"
function Highlights() {

  return (
    <section id="highlights" className='w-screen z-50 overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width z-50'>
        <div className="mb-12 w-full items-end md:flex justify-between">
          <h1 id="title" className='section-heading'>
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
         <Links/>
          </div>
        </div>
 <VideoCarousel/>
      </div>


    </section>
  )
}

export default Highlights