const Contact = () => {
  return (
    <div
      className="h-screen max-w-screen-xl mx-auto flex flex-col justify-center "
      id="contact"
    >
      <div className="px-6 max-w-[1000px] mx-auto md:my-12">
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="my-3">
              <h3 className="text-4xl font-semibold mb-5">
                Me <span>Contacter</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Je suis toujours ouvert à de nouvelles opportunités et
                collaborations. Si vous avez des questions, des projets ou
                simplement envie de discuter, n'hésitez pas à me contacter.
              </p>
            </div>
          </div>

          <div className="relative w-64 h-10 rounded-lg overflow-hidden justify-center my-4 py-10 font-semibold text-xl border-primary-500">
            <div className="absolute inset-0 bg-primary-500 transform -skew-y-12 -translate-x-8 translate-y-2 blur-md opacity-50"></div>
            <a
              href="mailto:pierrezhoou@gmail.com"
              target="_blank"
              className="relative z-10 flex items-center justify-center h-full text-primary-950"
            >
              Contactez-moi !
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
