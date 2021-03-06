import React from "../../snowpack/pkg/react.js";
import Flip from "../../snowpack/pkg/react-reveal/Flip.js";
import LightSpeed from "../../snowpack/pkg/react-reveal/LightSpeed.js";
import Zoom from "../../snowpack/pkg/react-reveal/Zoom.js";
import {useState} from "../../snowpack/pkg/react.js";
import ModalVideo from "../../snowpack/pkg/react-modal-video.js";
import {FaWhatsapp} from "../../snowpack/pkg/react-icons/fa.js";
import {FaFacebookF} from "../../snowpack/pkg/react-icons/fa.js";
import {FaInstagramSquare} from "../../snowpack/pkg/react-icons/fa.js";
import {FaYoutubeSquare} from "../../snowpack/pkg/react-icons/fa.js";
import {FaTelegramPlane} from "../../snowpack/pkg/react-icons/fa.js";
const Ihub = () => {
  const conferenceArray = [
    {
      numero: 1,
      pregunta: "¿Qué  es iHUB GLOBAL?",
      texto: "iHUB GLOBAL es la empresa más importante a nivel global en distribución de hotspots de la Red Helium."
    },
    {
      numero: 2,
      pregunta: "¿Cuál es el precio?",
      texto: "Dicha distribución la hace con un costo de $100 por dispositivo, mas el costo del envio."
    },
    {
      numero: 3,
      pregunta: "¿Cómo gano?",
      texto: "Quienes alberguen dicho dispositivo tendrán como recompensa la generación de criptomonedas Helium todos los días, mismas que pueden ser intercambiadas por tu moneda local. Pero eso no es todo."
    },
    {
      numero: 4,
      pregunta: "¿Puedo invitar a más personas?",
      texto: "Cualquier persona que haga su registro y solicite su hotspot, puede participar de un programa de recompensas por dar a conocer e invitar personas a que soliciten su propio hotspot. Dichas recompensas provienen de un porcentaje de las criptomonedas Helium generadas por los hotspots de sus invitados. Si lo que has leído hasta este momento llama tú atención espera a conocer los detalles. Contáctame para brindarte más información sobre cómo puedes beneficiarte de esta tecnología."
    }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", {
    className: " text-4xl  lg:text-5xl md:text-3xl  text-center py-7 font-extrabold bg-1 text-white"
  }, "I-hub Global"), /* @__PURE__ */ React.createElement("div", {
    className: " text-center w-lg center-content"
  }), /* @__PURE__ */ React.createElement("section", {
    className: "conferencias-content center-content bg-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "center-content"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "block pt-10"
  }, /* @__PURE__ */ React.createElement(Flip, null, /* @__PURE__ */ React.createElement("img", {
    src: "https://ihubglobal.site/wp-content/uploads/2021/08/cropped-ihub_logo_1-1-250x72.png",
    alt: "Logo",
    className: "p-5 md:pt-4 animate-ping logo-conferencias"
  })))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(LightSpeed, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-1 text-white pt-10 pb-10"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: " text-4xl  text-center"
  }, "iHUB GLOBAL es la empresa más importante a nivel global en distribución de Minador hotspots de crypto de la Red de Helium.")))), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 p-5 shadow-sm rounded-3xl text-white"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "px-3 text-yellow-700 text-2xl text-center"
  }, "Dirigido a todo el publico en general.")), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 shadow-xl bg-white"
  }, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("ol", null, conferenceArray.map((items) => /* @__PURE__ */ React.createElement("div", {
    className: "center-content"
  }, /* @__PURE__ */ React.createElement(LightSpeed, {
    left: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center bg-gradient-to-r from-purple-700 to-purple-500 text-white w-3/4 rounded rounded-6xl mb-14 p-8"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-yellow-600 text-4xl md:text-5xl"
  }, items.pregunta), /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl md:text-3xl"
  }, items.texto))))))), /* @__PURE__ */ React.createElement("div", {
    className: "px-2 bg-white pb-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "pregunta-1 text-4xl md:text-6xl py-6 text-center"
  }, "¿Mas preguntas?")))), /* @__PURE__ */ React.createElement(Zoom, {
    right: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-5"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: " md:text-5xl text-center text-3xl text-white py-3 "
  }, "Inscripcion"), /* @__PURE__ */ React.createElement("h3", {
    className: "text-white text-center py-2 md:text-3xl "
  }), /* @__PURE__ */ React.createElement("div", {
    className: "center-content py-3 "
  }, /* @__PURE__ */ React.createElement("a", {
    className: "rounded-xl  bg-yellow-700 p-2 text-center text-white md:text-lg md:p-6 text-xl md:text-4xl",
    href: "https://join.heliumtrack.app/luisfreire20",
    target: "_blank"
  }, "Inscribirme")), /* @__PURE__ */ React.createElement("div", {
    className: "center-content py-3 mt-10  rounded p-2 w-full"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-white text-3xl text-center"
  }, "Si tienes mas preguntas puedes escribirnos."), /* @__PURE__ */ React.createElement("div", {
    className: "grid md:grid-cols-2 justify-items-center items-center mt-8 w-full "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " text-center center-content items-center w-full telegram"
  }, /* @__PURE__ */ React.createElement("h5", null, "Telegram"), /* @__PURE__ */ React.createElement("a", {
    className: "rounded-xl",
    href: "https://t.me/DiFiIoTLatinoamerica",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(FaTelegramPlane, {
    className: "text-5xl rounded  mt-5"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-green-200  text-center center-content items-center w-full mt-10 md:mt-0 whatsapp"
  }, /* @__PURE__ */ React.createElement("h5", null, "WhatsApp"), /* @__PURE__ */ React.createElement("a", {
    href: "https://wa.me/593990070789?text=Necesito%20más%20información.",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(FaWhatsapp, {
    className: "text-5xl mt-5 rounded twitch"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "content-center bg-red-100"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-black text-center"
  }, "Siguenos en nuestras Redes Sociales"), /* @__PURE__ */ React.createElement("div", {
    className: "grid md:grid-cols-3 gap-4 justify-items-center items-center mt-8"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.youtube.com/channel/UCC5jKLTWSIHgRWN6tyKyw5g",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(FaYoutubeSquare, {
    className: "text-5xl rounded youtube"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=100071847725078",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(FaFacebookF, {
    className: "text-5xl rounded facebook"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://instagram.com/difi_iot?utm_medium=copy_link",
    target: "_blank",
    rel: "noreferrer"
  }, /* @__PURE__ */ React.createElement(FaInstagramSquare, {
    className: "text-5xl rounded instagram"
  })))))))));
};
const video = () => {
  const [isOpen, setOpen] = useState(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ModalVideo, {
    channel: "youtube",
    autoplay: true,
    isOpen,
    videoId: "qYmoZqgOIp0",
    onClose: () => setOpen(false)
  }), /* @__PURE__ */ React.createElement("button", {
    className: "btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full  px-10",
    onClick: () => setOpen(true)
  }, "Click"));
};
export default Ihub;
