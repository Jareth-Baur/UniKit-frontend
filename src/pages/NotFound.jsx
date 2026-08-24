import { Link } from "react-router-dom";

import Button from "../components/common/Button";
import Card from "../components/common/Card";

function NotFound() {
  return (
    <div className="page not-found-page">

      <Card>

        <div className="not-found-content">

          <span className="not-found-code">
            404
          </span>

          <h1>
            Page not found
          </h1>

          <p>
            The tool or page you're looking for
            doesn't exist.
          </p>

          <Link to="/">
            <Button>
              Back to UniKit
            </Button>
          </Link>

        </div>

      </Card>

    </div>
  );
}

export default NotFound;