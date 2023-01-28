import { useState } from "react";
import { RatingCard } from "../Cards/RatingCard/RatingCard";
import { SummaryCard } from "../Cards/SummaryCard/SummaryCard";
import "./App.scss";

function App() {
  const [isRatingCardDisplayed, setIsRatingCardDisplayed] = useState(true);

  return (
    <main className="main">
      <div className="container">
        {isRatingCardDisplayed ? <RatingCard /> : <SummaryCard />}
      </div>
    </main>
  );
}

export default App;
