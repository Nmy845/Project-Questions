import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

export default function NotFound(): JSX.Element {
  return (
    <div className="page-content">
      <div>
        <h1>404</h1>
        <Link to={AppRoute.Main}>
          Тыкни и вернешься
        </Link>
      </div>
    </div>
  );
}
