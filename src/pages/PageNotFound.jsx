import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div id="pagenotfound">
      <h1>Page not found</h1>
      <p>
        The page does not exist or requires a subscription / already logged in.
        please close this page.
      </p>
      <Link to="/">Home</Link>s
    </div>
  );
}
