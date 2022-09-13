import Head from 'next/head'
import Count from './countdown'
import Image from 'next/image'
import Carousel from './carousel'
import {BsChevronDoubleDown} from 'react-icons/bs'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Enzo & Teresa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Primer Div */}
      <div
          className="relative overflow-hidden bg-no-repeat bg-auto w-full h-full"
          /* className="relative overflow-hidden bg-no-repeat bg-cover lg:aspect-w-8 lg:aspect-h-4 md:aspect-w-6 md:aspect-h-6 sm:aspect-w-1 sm:aspect-h-1" */
          style={{
            backgroundPosition: "100%",
            backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.4)),url('/images/heart.jpg')`,
            backgroundAttachment: "fixed",  
          }}
        >
        <div className="flex flex-col items-center justify-center w-full min-h-screen text-center ">
          <h1 className="text-7xl lg:text-9xl md:text-9xl font-alexBrush text-white">
              Enzo & Teresa
          </h1>
          <h2 className="text-3xl lg:text-5xl md:text-5xl mt-12 font-montSerrat text-white">
              11 | Marzo | 2023
          </h2>
          <div className=''>
            <BsChevronDoubleDown size={54} className={'text-white mt-10'}></BsChevronDoubleDown>
          </div>
        </div>
      </div>
      {/* Termino Div */}
      {/* Segundo Div */}
      <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "100%",
            backgroundImage: `url('/images/graniteBackground.jpg')`,
            backgroundAttachment: "fixed",  
            height: "100%",
            width: "100%"
          }}
        >
        <div className="flex flex-col items-center w-full min-h-screen">
          <h1 className="text-7xl lg:text-8xl md:text-7xl sm:text-5xl font-playFair mt-5 lg:mt-10 md:mt-10 sm:mt-5  text-slate-600 text-center">
              ¡Nos casaremos!
          </h1>
          <p className="text-3xl font-montSerrat mt-10 text-slate-600 text-center">
            Y queremos que seas parte de este momento tan especial para nosotros.
          </p>
          <div className='flex flex-col justify-center items-center mt-8 lg:mt-24 md:mt-24 sm:mt-20'>
            <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-5xl font-montSerrat text-yellow-500 text-center" >
                  Enzo Fuenzalida Quezada
            </h1>
            <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-5xl font-montSerrat text-yellow-500 text-center" >
                  &
            </h1>
            <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-5xl font-montSerrat text-yellow-500 text-center" >
                  Teresa Verdejo Monardez
            </h1>
          </div>
          <p className="text-4xl lg:text-6xl md:text-4xl font-montSerrat mt-8 lg:mt-16 md:mt-28 sm:mt-10 text-slate-600">
            Sólo Faltan:
          </p>
          <div className='mt-1 lg:mt-10 md:mt-10 sm:mt-10 mb-3'>
          <Count></Count>
          </div>
        </div>
      </div>
      {/* Termino Div */}
      {/* Tercer Div */}
      <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "100%",
            backgroundImage: `url('/images/couple.jpg')`,
            backgroundAttachment: "fixed",  
            height: "100%",
            width: "100%"
          }}
        >
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className='grid grid-cols-4 w-full h-full lg:w-3/5 lg:h-3/5 md:w-3/5 md:h-3/5 rounded-lg lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 bg-slate-700 bg-opacity-80 justify-center lg:gap-4 md:gap-4 sm:gap-4 gap-4 p-10 border-4 border-slate-700 border-y-yellow-500'>
              <div className='grid col-span-4 lg:col-start-2 lg:col-span-2 md:col-span-2 md:col-start-2 mb-10 items-center justify-center'>
                  <h1 className="text-center text-5xl lg:text-6xl md:text-5xl sm:text-4xl font-alexBrush text-white" >
                      Enzo & Teresa
                  </h1>
                  <h2 className="grid text-center text-2xl lg:text-3xl md:text-2xl sm:lg:text-2xl font-playFair text-white mt-5" >
                      11-Marzo-2023 | 18.30
                  </h2>
              </div>
              <div className='grid col-span-4 lg:col-start-1 lg:col-span-2 md:col-start-1 md:col-span-2 lg:pr-5 md:pr-5'>
                <h1 className='text-center text-2xl font-playFair text-yellow-500'>
                    CEREMONIA
                </h1>
              <p className='text-center lg:text-lg md:text-lg sm:text-md text-md font-montSerrat text-white'> 
                      Ayllu Cucuter sitio 52. ANDES NOMADS DESERT  CAMP & LODGE
                      Lugar San Pedro de Atacama.
              </p>
              </div>
              <div className='grid col-span-4 lg:col-start-3 lg:col-span-2 md:col-start-3 md:col-span-2 sm:col-start-3 sm:col-span-2 lg:pl-5 md:pl-5'>
                <h1 className='text-center text-2xl font-playFair text-yellow-500'>
                      RECEPCIÓN
                </h1>
              <p className='text-center lg:text-lg md:text-lg sm:text-md text-md font-montSerrat text-white'>
                      Ayllu Cucuter sitio 52. ANDES NOMADS DESERT  CAMP & LODGE
                      Lugar San Pedro de Atacama.
              </p>
              </div>
              <div className='grid col-start-2 col-span-2 mt-10 items-center justify-center'>
                  <button className='bg-slate-500 h-12 w-64 border-solid rounded-xl text-white outline outline-offset-1 outline-yellow-500/70 font-bold text-xl'>
                          Confirmar Asistencia
                  </button>
              </div>
            </div>
        </div>
      </div>
      {/* Termino Div */}
      {/* Cuarto Div */}
      <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "100%",
            backgroundImage: `url('/images/graniteBackground.jpg')`,
            backgroundAttachment: "fixed",  
            height: "100%",
            width: "100%"
          }}
        >
        <div className="flex w-full min-h-screen items-center justify-center">
          <div className='grid grid-cols-3'>
            <div className='grid col-start-1 col-end-4 items-center text-center'>
              <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-2xl font-montSerrat text-yellow-500 mb-5" >
                Nuestras aventuras juntos
              </h1>
            </div>
            <div className='col-start-1 col-end-4'>
              <Carousel></Carousel>
            </div>
            <div className='grid col-start-1 col-end-4'>
              <h1 className="lg:text-2xl md:text-2xl sm:text-xl text-xl font-montSerrat text-yellow-500 text-center mt-5" >
                Somos muy felices juntos🥰, pero con un regalito estamos mejor🤑​.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}