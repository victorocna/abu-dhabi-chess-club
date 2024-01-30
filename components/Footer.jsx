import { title, baseurl } from '../site.config';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-4 py-4 text-xs">
      <p className="max">
        <span>Copyright &copy; {year} - </span>
        <a href={baseurl} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
