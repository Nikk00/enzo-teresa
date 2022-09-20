import Head from "next/head";
import Count from "./countdown";
import Image from "next/image";
import Carousel from "./carousel";
import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react";
import ReactHowler from 'react-howler'
import swal from 'sweetalert'
import { FaPlayCircle, FaPauseCircle, FaGift } from "react-icons/fa";
import {
  BsChevronDoubleDown,
  BsInfoSquareFill,
  BsSpotify,
  BsWhatsapp,
} from "react-icons/bs";
import { ImManWoman } from "react-icons/im";
import { BiCalendarStar, BiCalendarCheck } from "react-icons/bi";
export default function Home() {
  const soundUrl = "/music/Billy-Ocean-Suddenly.mp3";
  const [playMusic, setPlayMusic] = useState(true)
  const handleClick = () =>{
    if(playMusic == true){
        setPlayMusic(false)
    }else{
        setPlayMusic(true)
    }
  }
  const listInv = ["GINA FUENZALIDA", "FERNANDO CÁCERES", "MARIA JOSÉ CÁCERES", "SEGISFREDO VERDEJO", "CARMEN ALVAREZ", 
  "MILDRED VERDEJO", "OCTAVIO VERDEJO", "JEANNETTE DOMÍNGUEZ", "ELISA QUEZADA", "YELITZA FUENZALIDA", "LUIS VERDEJO",
  "PATRICIA MOLINA", "PATRICIA MORALES", "CARLOS CORREA", "PÍA CORREA", "VIVIANA PINO", "JOSÉ OLIVARES", "RICARDO LUZA",
  "FABIOLA RODRIGUEZ", "FLAVIO NARRIA", "FANNY PIZARRO", "MARIANO GARCÍA", "MARITZA PIZARRO", " PETER ROSENTHAL",
  "DARWIN PIZARRO", "MIRNA RIOS", "CARLOS LUZA", "SLVIA LUNA", "GERARDO CAROCA", "GABRIELA VIVANCO", "NICOLÁS LUZA"]

  const checkInvitados = (name) =>{
      return listInv.includes(name.toUpperCase())
  }
  const [newForm, setNewForm] = useState({
    "Pase_movilidad": "",
    Email: "",
    "Nombre_Apellido": "",
    asistir: "",
  });
  const handleChange = (e) =>
  setNewForm({ ...newForm, [e.target.name]: e.target.value });
  const [formOpcion, setFormOpcion] = useState()
  const handleChangeOpcion = (e) =>
  setFormOpcion({ ...formOpcion, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var cont = 0
    console.log(newForm)
    Object.entries(newForm).forEach(([key, value]) => {
      if (value == "") {
        swal("Porfavor ingrese o escoja un opción en: "+key, "You clicked the button!", "error")
        return;
      }else{
        cont++
      }
    });
    if(!validEmail.test(newForm.Email)){
      swal("Ingrese un correo electronico valido.", "You clicked the button!", "error")
      return;
    }else if(checkInvitados(newForm.Nombre_Apellido) != true ){
      swal("Ingrese su Nombre y apellido con tilde sí es que lo requiere.", "You clicked the button!", "error")
      return;
    }else{
      cont++
    }
    const form = {...newForm, ...formOpcion}
    if(cont == 5){
      emailjs.send("service_734qugq", "template_m7zfixj", form, "U9dAW5Kj0tENr4Api")
      .then(function(response) {
        swal("Se envío exitosamente su confirmación!", "You clicked the button!", "success")
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        swal("Hubo un error al enviar su confirmación, intente en un rato mas porfavor.", "You clicked the button!", "error")
        console.log('FAILED...', error);
      }); 
    }
  };
  return (
    <div>
      <Head>
        <title>Teresa & Enzo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Primer Div */}
      <div className="flex justify-end z-10 relative place-content-end">
        <div className="fixed bottom-0 right-0 mr-5 mb-5">
        <ReactHowler src={soundUrl} playing={playMusic} />
          <button onClick={handleClick}>
          {
            playMusic ? <FaPauseCircle size={36} /> : <FaPlayCircle size={36}/>
          }
          </button>
        </div>
      </div>
      <div
        className="relative overflow-hidden bg-no-repeat bg-auto"
        /* className="relative overflow-hidden bg-no-repeat bg-cover lg:aspect-w-8 lg:aspect-h-4 md:aspect-w-6 md:aspect-h-6 sm:aspect-w-1 sm:aspect-h-1" */
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.4)),url('/images/heart.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full min-h-screen text-center ">
          <picture>
            <img
              className="w-64 h-64 rounded-full ring-4 ring-gray-300"
              width={256}
              height={256}
              src="/images/perfil.jpeg"
              alt="Rounded avatar"
            />
          </picture>
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
            <Count colorNumber="text-slate-600" colorText="text-yellow-500"></Count>
          </div>
        </div>
      </div>
      {/* Termino Div */}
      {/* Tercer Div */}
      <div
        className="relative overflow-hidden bg-no-repeat bg-auto"
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.4)),url('/images/couple.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="grid grid-cols-4 w-full h-full lg:w-3/5 lg:h-3/5 md:w-3/5 md:h-3/5 rounded-lg lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 bg-slate-700 bg-opacity-80 justify-center lg:gap-4 md:gap-4 sm:gap-4 gap-4 p-10 border-4 border-slate-700 border-y-yellow-500 m-5">
            <div className="grid col-span-4 lg:col-start-2 lg:col-span-2 md:col-span-2 md:col-start-2 mb-10 items-center justify-center">
              <h1 className="text-center text-5xl lg:text-6xl md:text-5xl sm:text-4xl font-alexBrush text-white">
                Teresa & Enzo
              </h1>
              <h2 className="grid text-center text-2xl lg:text-3xl md:text-2xl sm:lg:text-2xl font-playFair text-white mt-5">
                11-Marzo-2023 | 18:00
              </h2>
            </div>
            <div className="grid col-span-4 lg:col-start-1 lg:col-span-2 md:col-start-1 md:col-span-2 lg:pr-5 md:pr-5">
              <h1 className="text-center text-2xl font-montSerrat text-yellow-500 font-bold">
                CEREMONIA
              </h1>
              <p className="text-center lg:text-lg md:text-lg sm:text-md text-md font-montSerrat text-white">
                Ayllu Cucuter sitio 52. ANDES NOMADS DESERT CAMP & LODGE Lugar
                San Pedro de Atacama.
              </p>
            </div>
            <div className="grid col-span-4 lg:col-start-3 lg:col-span-2 md:col-start-3 md:col-span-2 sm:col-start-3 sm:col-span-2 lg:pl-5 md:pl-5">
              <h1 className="text-center text-2xl font-montSerrat text-yellow-500 font-bold">
                RECEPCIÓN
              </h1>
              <p className="text-center lg:text-lg md:text-lg sm:text-md text-md font-montSerrat text-white">
                Ayllu de Cucuter sitio 52. ANDES NOMADS DESERT CAMP & LODGE Lugar
                San Pedro de Atacama.
              </p>
            </div>
            <div className="grid col-start-2 col-span-2 mt-10 items-center justify-center">
              <a href="#form">
              <button className="bg-slate-500 h-12 w-64 border-solid rounded-xl text-white outline outline-offset-1 outline-yellow-500/70 font-bold text-xl">
                Confirmar Asistencia
              </button>
              </a>
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
              <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-2xl font-montSerrat font-bold text-yellow-500 mb-5">
                Nuestras aventuras juntos
              </h1>
            </div>
            <div className="col-start-1 col-end-4">
              <Carousel></Carousel>
            </div>
            <div className="grid col-start-1 col-end-4 items-center text-center"></div>
          </div>
        </div>
      </div>
      {/* Quinto Div */}
      <div
        className="relative overflow-hidden bg-no-repeat bg-auto"
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.4)),url('/images/people.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex w-full min-h-screen justify-center">
          {/* <div className="flex absolute lg:mt-20 md:mt-10 sm:mt-0 mt-10">
            <h1 className="text-white text-3xl font-playFair lg:text-4xl md:text-4xl sm:text-3xl ">
              Información Importante
            </h1>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-3 m-5 place-content-center place-items-center mt-32 lg:mt-0 md:mt-0 sm:mt-0">
            <div className="grid col-start-1 col-span-3 mb-5">
              <h1 className="text-white text-3xl font-playFair lg:text-4xl md:text-4xl sm:text-3xl text-center">
                Información Importante
              </h1>
            </div>
            <div className="grid col-start-2 lg:col-start-1 md:col-start-1 sm:col-start-2 bg-slate-800 bg-opacity-80 rounded-lg p-5 w-3/4 justify-items-center h-64">
              <BsInfoSquareFill
                className="text-white mb-2"
                size={36}
              ></BsInfoSquareFill>
              <h1 className="text-white text-center font-montSerrat text-md lg:text-lg md:text-lg sm:text-md font-bold">
                Información del Matrimonio
              </h1>
              <p className="text-white text-center font-montSerratRegular text-sm lg:text-lg md:text-md sm:text-sm">
                Nuestra ceremonia de unión se realizará el día 11 de Marzo a las
                18:00 horas en Andes Nomads Desert Camp & Lodge que se encuentra
                ubicada en Ayllú de Cucuter sitio 52.
              </p>
              <p className="text-white text-center font-montSerrat text-sm lg:text-lg md:text-md sm:text-sm">
                ¡Los esperamos para celebrar!
              </p>
            </div>
            {/* <div className="grid col-start-2 bg-slate-800 bg-opacity-80 rounded-lg w-3/4 p-5 justify-items-center h-64">
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
            </div> */}
            {/* <div className="grid col-start-2 lg:col-start-1 md:col-start-1 sm:col-start-2 bg-slate-800 bg-opacity-80 rounded-lg w-3/4 p-5 justify-items-center h-64"> */}
            <div className="grid col-start-2 bg-slate-800 bg-opacity-80 rounded-lg w-3/4 p-5 justify-items-center h-64">
              <BsWhatsapp className="text-white mb-2" size={36}></BsWhatsapp>
              <h1 className="text-white text-center font-montSerrat text-lg font-bold">
                Contáctanos si tienes problemas
              </h1>
              <p className="text-white text-center font-montSerrat text-sm lg:text-lg md:text-md sm:text-sm">
                Si tienes dudas, necesitas información adicional o preguntar
                algo en específico, ¡contáctanos!
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=56999929126"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="mt-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Enviar Mensaje
                </button>
              </a>
            </div>
            <div className="grid lg:col-start-1 lg:col-span-2 md:col-start-1 md:col-span-2 col-start-2 bg-slate-800 bg-opacity-80 rounded-lg lg:w-2/5 md:w-2/5 sm:w-3/4 w-3/4 p-5 justify-items-center h-64">
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
      {/* Sexto Div */}
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
        <div className="flex w-full h-96 items-center justify-center ">
          <div className="grid grid-cols-1 lg:w-1/2 md:w-3/4 sm:w-full w-full m-5 border-solid border-2 border-slate-900 p-5 rounded-xl">
            <div className="grid justify-items-center">
              <FaGift className="text-slate-600" size={36}></FaGift>
              <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-xl font-montSerrat font-bold text-slate-600 text-center">
                Regalos
              </h1>
              <p className="lg:text-2xl md:text-xl sm:text-md text-md font-montSerrat font-bold text-slate-600 text-center mt-5">
                Nuestro mejor regalo es su presencia en este día tan especial,
                pero si desean colaborar con nuestra Luna de Miel nos puede
                depositar un sobre en el cofre que estará en nuestra boda.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Septimo Div */}
      <div
        className="relative overflow-hidden bg-no-repeat bg-auto"
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0,0, 0.4)),url('/images/wedding.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex w-full min-h-screen items-center justify-center text-white">
          <div className="w-full h-full lg:m-10 md:m-10 border-solid border-2 border-slate-900 bg-slate-800 lg:pr-44 lg:pl-44 lg:pt-16 lg:pb-10 md:pr-24 md:pl-24 md:pt-8 md:pb-5 sm:pr-14 sm:pl-14 sm:pt-4 sm:pb-5 p-5 rounded-xl bg-opacity-50">
            <div className="grid grid-cols-6 lg:gap-3 md:gap-2 sm:gap-1 gap-1 font-montSerrat">
              <div className="grid col-start-2 col-span-4 justify-items-center" id="form">
                <BiCalendarStar size={64}></BiCalendarStar>
                <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-xl font-montSerrat font-bold text-center text-yellow-500">
                  ¡Confirma tu Asistencia!
                </h1>
                <p className="lg:text-lg md:text-md sm:text-sm text-sm font-montSerrat font-bold  text-center mt-5">
                  Hasta el día 25 de  Octubre de 2022
                </p>
              </div>
              <div className="grid lg:col-start-1 lg:col-span-6 md:col-start-1 sm:col-start-1 col-start-1 col-span-6">
                <label
                  htmlFor="asistir"
                  className="block mb-2 text-md  text-white font-bold"
                >
                  Hola, ¿Podrás asistir? *
                </label>
                <select
                  id="asistir"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="asistir"
                  onChange={handleChange}
                >
                  <option >Escoge una opcción</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="grid col-start-1 col-span-6 lg:col-start-1 lg:col-span-2 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-6 lg:justify-items-center md:justify-items-center">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-bold text-white"
                >
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nombre y Apellido"
                  name="Nombre_Apellido"
                  onChange={handleChange}
                  required
                />
              </div>
{/*               <div className="grid col-start-1 col-span-6 lg:col-start-3 lg:col-span-2 md:col-start-4 md:col-span-3 sm:col-start-1 sm:col-span-6 lg:justify-items-center md:justify-items-center">
                <label
                  htmlFor="acompañante"
                  className="block mb-2 text-sm font-bold text-white"
                >
                  ¿Vas Acompañado? *
                </label>
                <select
                  id="acompañante"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="invitado"
                  onChange={handleChange}
                >
                  <option >Escoge una opcción</option>
                  <option value='Acompañado'>Acompañado</option>
                  <option value="Sin Acompañante">Sin Acompañante</option>
                </select>
              </div>
              <div className="grid lg:col-start-5 lg:col-span-2 col-start-1 col-span-6 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-6 lg:justify-items-center md:justify-items-center">
                <label
                  htmlFor="nameAcom"
                  className="block mb-2 text-sm font-bold text-white"
                >
                  Nombre de tu Acompañante *
                </label>
                <input
                  type="text"
                  id="nameAcom"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nombre Acompañante o Nadie"
                  name="Nombre_invitado"
                  onChange={handleChange}
                  required
                />
              </div> */}
              {/* <div className="grid lg:col-start-1 lg:col-span-3 col-start-1 col-span-6 md:col-start-4 md:col-span-3 sm:col-start-1 sm:col-span-6 lg:justify-items-center md:justify-items-center"> */}
              <div className="grid col-start-1 col-span-6 lg:col-start-3 lg:col-span-2 md:col-start-4 md:col-span-3 sm:col-start-1 sm:col-span-6 lg:justify-items-center md:justify-items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-bold text-white"
                >
                  Tu Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="ejemplo@gmail.com"
                  name="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <div className="grid lg:col-start-4 lg:col-span-3 col-start-1 col-span-6 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-6 lg:justify-items-center md:justify-items-center"> */}
              <div className="grid lg:col-start-5 lg:col-span-2 col-start-1 col-span-6 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-6 lg:justify-items-center md:justify-items-center">
                <label
                  htmlFor="movilidad"
                  className="block mb-2 text-sm font-bold text-white"
                >
                  Pase de Movilidad *
                </label>
                <select
                  id="movilidad"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  name="Pase_movilidad"
                  onChange={handleChange}
                >
                  <option >Escoge una opcción</option>
                  <option value='Tengo mi pase OK'>Tengo mi pase OK</option>
                  <option value="No tengo mi pase">No tengo mi pase</option>
                </select>
              </div>
              <div className="grid lg:col-start-1 lg:col-span-3 col-start-1 col-span-6 md:col-start-4 md:col-span-3 sm:col-start-1 sm:col-span-6 lg:justify-items-center md:justify-items-center h-20">
                <h3 className="mb-0 font-bold text-white">Algun@ es:</h3>
                <ul className="items-center w-full text-sm font-medium text-gray-900 rounded-lg border border-gray-200 sm:flex flex">
                  <li className="w-full border-gray-200">
                    <div className="flex items-center pl-3">
                      <input
                        id="Vegan"
                        type="checkbox"
                        value="vegano"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                        name="vegano"
                        onChange={handleChangeOpcion}
                      />
                      <label
                        htmlFor="Vegan"
                        className="py-3 ml-2 w-full text-xs font-medium text-white"
                      >
                        Vegan@
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-gray-200">
                    <div className="flex items-center pl-3">
                      <input
                        id="Vegetarian"
                        type="checkbox"
                        value="vegetariano"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                        name="vegetariano"
                        onChange={handleChangeOpcion}
                      />
                      <label
                        htmlFor="Vegetarian"
                        className="py-3 ml-2 w-full text-xs font-medium text-white"
                      >
                        Vegetarian@
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-gray-200">
                    <div className="flex items-center pl-3">
                      <input
                        id="Embarazada"
                        type="checkbox"
                        value="embarazada"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                        name="embarazada"
                        onChange={handleChangeOpcion}
                      />
                      <label
                        htmlFor="Embarazada"
                        className="py-3 ml-2 w-full text-xs font-medium text-white"
                      >
                        Embarazada
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid lg:col-start-4 lg:col-span-3 col-start-1 col-span-6 md:col-start-1 md:col-span-6 sm:col-start-1 sm:col-span-6 justify-items-center h-20 items-end">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 items-center w-full h-14 lg:w-full md:w-3/4 sm:w-full"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center justify-center mt-10 mb-5">
              <div className="grid col-start-2 col-span-2 justify-items-center">
                <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-xl font-montSerrat font-bold text-center text-yellow-500">
                  Nos vemos en ...
                </h1>
              </div>
            </div>
            <Count colorNumber="text-white" colorText="text-yellow-500"></Count>
            <h1 className="text-4xl lg:text-6xl md:text-6xl sm:text-4xl font-alexBrush text-white mt-10 text-center">
              Teresa & Enzo
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}