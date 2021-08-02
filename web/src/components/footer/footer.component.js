const Footer = () => {
  return (
    <footer className="bg-ntst-blue py-8">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
          <div className="flex items-center  flex-shrink-0 text-white mr-6">
            <span className="font-bold text-xl">NTST</span>
          </div>
          <ul className="flex text-white uppercase gap-12 text-xs">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        <div className="flex gap-10 mt-12 md:mt-0">
          <li className="list-none">
            <i className="text-white text-2xl fab fa-twitter hover:text-ntst-grey cursor-pointer"></i>
          </li>
          <li className="list-none">
            <i className="text-white text-2xl fab fa-facebook hover:text-ntst-grey cursor-pointer"></i>
          </li>
        </div>
      </div>
    </footer>
  )
}

export default Footer
