import Head from "next/head";
import Count from "./countdown";
import Image from "next/image";
import Carousel from "./carousel";
import {
  BsChevronDoubleDown,
  BsInfoSquareFill,
  BsSpotify,
  BsWhatsapp,
} from "react-icons/bs";
import { ImManWoman } from "react-icons/im";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Teresa & Enzo</title>
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
        <Image className="w-64 h-64 rounded-full ring-4 ring-gray-300 p-1" width={256} height={256} src="/images/perfil.jpeg" alt="Rounded avatar" />
          <h1 className="text-7xl lg:text-9xl md:text-9xl font-alexBrush text-white mt-5">
            Teresa & Enzo 
          </h1>
          <h2 className="text-3xl lg:text-5xl md:text-5xl mt-12 font-montSerrat text-white">
            11 | Marzo | 2023
          </h2>
          <div className="">
            <BsChevronDoubleDown
              size={54}
              className={"text-white mt-10"}
            ></BsChevronDoubleDown>
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
          width: "100%",
        }}
      >
        <div className="flex flex-col items-center w-full min-h-screen">
          <h1 className="text-7xl lg:text-8xl md:text-7xl sm:text-5xl font-playFair mt-5 lg:mt-10 md:mt-10 sm:mt-5  text-slate-600 text-center">
            ¡Nos casaremos!
          </h1>
          <p className="text-3xl font-montSerrat mt-10 text-slate-600 text-center">
            Y queremos que seas parte de este momento tan especial para
            nosotros.
          </p>
          <div className="flex flex-col justify-center items-center mt-8 lg:mt-24 md:mt-24 sm:mt-20">
            <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-5xl font-montSerrat text-yellow-500 text-center">
              Teresa Verdejo Monardez
            </h1>
            <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-5xl font-montSerrat text-yellow-500 text-center">
              &
            </h1>
            <h1 className="text-4xl lg:text-6xl md:text-5xl sm:text-5xl font-montSerrat text-yellow-500 text-center">
              Enzo Fuenzalida Quezada
            </h1>
          </div>
          <p className="text-4xl lg:text-6xl md:text-4xl font-montSerrat mt-8 lg:mt-16 md:mt-28 sm:mt-10 text-slate-600">
            Sólo Faltan:
          </p>
          <div className="mt-1 lg:mt-10 md:mt-10 sm:mt-10 mb-3">
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
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.4)),url('/images/couple.jpg')`,
          backgroundAttachment: "fixed",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="grid grid-cols-4 w-full h-full lg:w-3/5 lg:h-3/5 md:w-3/5 md:h-3/5 rounded-lg lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 bg-slate-700 bg-opacity-80 justify-center lg:gap-4 md:gap-4 sm:gap-4 gap-4 p-10 border-4 border-slate-700 border-y-yellow-500">
            <div className="grid col-span-4 lg:col-start-2 lg:col-span-2 md:col-span-2 md:col-start-2 mb-10 items-center justify-center">
              <h1 className="text-center text-5xl lg:text-6xl md:text-5xl sm:text-4xl font-alexBrush text-white">
                Teresa & Enzo 
              </h1>
              <h2 className="grid text-center text-2xl lg:text-3xl md:text-2xl sm:lg:text-2xl font-playFair text-white mt-5">
                11-Marzo-2023 | 18:00
              </h2>
            </div>
            <div className="grid col-span-4 lg:col-start-1 lg:col-span-2 md:col-start-1 md:col-span-2 lg:pr-5 md:pr-5">
              <h1 className="text-center text-2xl font-playFair text-yellow-500">
                CEREMONIA
              </h1>
              <p className="text-center lg:text-lg md:text-lg sm:text-md text-md font-montSerrat text-white">
                Ayllu Cucuter sitio 52. ANDES NOMADS DESERT CAMP & LODGE Lugar
                San Pedro de Atacama.
              </p>
            </div>
            <div className="grid col-span-4 lg:col-start-3 lg:col-span-2 md:col-start-3 md:col-span-2 sm:col-start-3 sm:col-span-2 lg:pl-5 md:pl-5">
              <h1 className="text-center text-2xl font-playFair text-yellow-500">
                RECEPCIÓN
              </h1>
              <p className="text-center lg:text-lg md:text-lg sm:text-md text-md font-montSerrat text-white">
                Ayllu Cucuter sitio 52. ANDES NOMADS DESERT CAMP & LODGE Lugar
                San Pedro de Atacama.
              </p>
            </div>
            <div className="grid col-start-2 col-span-2 mt-10 items-center justify-center">
              <button className="bg-slate-500 h-12 w-64 border-solid rounded-xl text-white outline outline-offset-1 outline-yellow-500/70 font-bold text-xl">
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
          width: "100%",
        }}
      >
        <div className="flex w-full min-h-screen items-center justify-center">
          <div className="grid grid-cols-3">
            <div className="grid col-start-1 col-end-4 items-center text-center">
              <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-2xl font-montSerrat text-yellow-500 mb-5">
                Nuestras aventuras juntos
              </h1>
            </div>
            <div className="col-start-1 col-end-4">
              <Carousel></Carousel>
            </div>
            <div className="grid col-start-1 col-end-4">
              <h1 className="lg:text-2xl md:text-2xl sm:text-xl text-xl font-montSerrat text-yellow-500 text-center mt-5">
                Somos muy felices juntos🥰, pero con un sobre de 🤑 nos
                ayudarias para nuestra luna de miel.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Quinto Div */}
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.4)),url('/images/people.jpg')`,
          backgroundAttachment: "fixed",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="flex w-full min-h-screen justify-center">
          <div className="flex absolute mt-20">
            <h1 className="text-white text-3xl font-playFair lg:text-4xl md:text-4xl sm:text-3xl">
              Información Importante
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-3 m-5 place-content-center place-items-center mt-32 lg:mt-0 md:mt-0 sm:mt-0">
            <div className="grid col-start-2 lg:col-start-1 md:col-start-1 sm:col-start-2 bg-slate-800 bg-opacity-80 rounded-lg p-5 w-3/4 justify-items-center h-64">
              <BsInfoSquareFill
                className="text-white mb-2"
                size={36}
              ></BsInfoSquareFill>
              <h1 className="text-white text-center font-montSerrat text-md lg:text-lg md:text-lg sm:text-md font-bold">
                Información del Matrimonio
              </h1>
              <p className="text-white text-center font-montSerratRegular text-sm lg:text-lg md:text-md sm:text-sm">
                Nuestra ceremonia de union se realizara el dia 11 de Marzo a las
                18:00 horas en Andes Nomdas Desert Camp & Lodge que se encuentra
                hubicada en Ayllu Cucuter sitio 52.
              </p>
              <p className="text-white text-center font-montSerrat text-sm lg:text-lg md:text-md sm:text-sm">
                ¡Los esperamos para celebrar!
              </p>
            </div>
            <div className="grid col-start-2 bg-slate-800 bg-opacity-80 rounded-lg w-3/4 p-5 justify-items-center h-64">
              <BsSpotify className="text-white mb-2" size={36}></BsSpotify>
              <h1 className="text-white text-center font-montSerrat text-md lg:text-lg md:text-lg sm:text-md font-bold">
                Ayudanos con la lista de musica
              </h1>
              <p className="text-white text-center font-montSerrat text-sm lg:text-lg md:text-md sm:text-sm">
                Si tienes ganas de escuchar o dedicarnos una canción, súmala a
                nuestra lista de Spotify.
              </p>
              <a href="https://api.whatsapp.com/send?phone=56999929126" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="mt-2 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                formTarget="_blank"
              >
                Lista de Musica
              </button>
              </a>
            </div>
            <div className="grid col-start-2 lg:col-start-1 md:col-start-1 sm:col-start-2 bg-slate-800 bg-opacity-80 rounded-lg w-3/4 p-5 justify-items-center h-64">
              <BsWhatsapp className="text-white mb-2" size={36}></BsWhatsapp>
              <h1 className="text-white text-center font-montSerrat text-lg font-bold">
                Contactanos si tienes problemas
              </h1>
              <p className="text-white text-center font-montSerrat text-sm lg:text-lg md:text-md sm:text-sm">
                Si tienes dudas, necesitas información adicional o preguntar
                algo en específico, ¡contáctanos!
              </p>
              <a href="https://api.whatsapp.com/send?phone=56999929126" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="mt-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"          
              >
                Enviar Mensaje
              </button>
              </a>
            </div>
            <div className="grid col-start-2 bg-slate-800 bg-opacity-80 rounded-lg w-3/4 p-5 justify-items-center h-64">
              <ImManWoman className="text-white mb-2" size={36}></ImManWoman>
              <h1 className="text-white text-center font-montSerrat text-lg font-bold">
                Código de vestimenta:
              </h1>
              <p className="text-white text-center font-montSerrat text-sm lg:text-lg md:text-md sm:text-sm">
                Semi Formal
              </p>
              <p className="text-white text-center font-montSerrat text-sm lg:text-lg md:text-md sm:text-sm">
                Mujeres con zapatos cómodos
              </p>
              <p className="text-white text-center font-montSerrat text-sm lg:text-lg md:text-md sm:text-sm">
                Varones opcional corbata
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
