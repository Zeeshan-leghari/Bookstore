const Footer = () => {
  return (
    <footer className="footer footer-center p-5  mt-10 border-t border-zinc-400 ">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover " href="#about">
          About us
        </a>
        <a className="link link-hover " href="#contact">
          Contact
        </a>
        <a className="link link-hover " href="#jobs">
          Jobs
        </a>
        <a className="link link-hover " href="#press-kit">
          Press kit
        </a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
    

          <a 
              href="#"  
            aria-label="YouTube"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-slate-600 hover:text-purple-600 transition-colors"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>

          <a 
            href="#" 
            aria-label="Facebook"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-slate-600 hover:text-purple-600 transition-colors"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>

          <a 
            href="https://www.linkedin.com/in/zeeshanleghari/" 
            aria-label="LinkedIn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current  hover:text-purple-600 transition-colors"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </nav>

      <aside className="mt-4 space-y-1">
        <p className="text-sm ">
          Copyright © 2025 - All rights reserved by Bookstte
        </p>
        <p className="text-sm ">
          Developed with ❤️ by Zeeshan Leghari
        </p>
      </aside>
    </footer>
  );
};

export default Footer;