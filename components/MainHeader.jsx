import { logo, title } from '../site.config';

const MainHeader = () => (
  <div className="main-header px-4 py-4 bg-white">
    <div className="max flex flex-wrap items-center">
      <img className="logo-app" src={logo} alt={title} />
      <h1 className="font-display text-lg md:text-xl font-semibold text-bluemarin">{title}</h1>
    </div>
  </div>
);

export default MainHeader;
