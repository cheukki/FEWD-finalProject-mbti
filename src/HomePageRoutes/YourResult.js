import { Link } from "react-router-dom";
export default function YourResult() {
  return (
    <div className="YourResult">
      <h1>16 Personality Types</h1>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>
            <Link to={`/`}>Start Test</Link>
          </li>
          <li>
            <Link to={`/YourResult`}>Your Result</Link>
          </li>
          <li>
            <Link to={`/PersonalityTypes`}>Personality Types</Link>
          </li>
        </ul>
      </nav>
      <h1>I'm the result</h1>
    </div>
  );
}
