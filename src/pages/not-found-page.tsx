import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <section className="page page--gray page--main">
      <header className="header">
      </header>
      <section>
        <h1>404. Page not found</h1>
        <Link to="/">На главную</Link>
      </section>
    </section>
  );
}

export default NotFoundPage;
