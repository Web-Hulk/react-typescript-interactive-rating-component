import { useState } from "react";
import { RatingCard } from "../Cards/RatingCard/RatingCard";
import { SummaryCard } from "../Cards/SummaryCard/SummaryCard";
import "./App.scss";

function App() {
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [isRatingCardDisplayed, setIsRatingCardDisplayed] =
    useState<boolean>(true);

  const handleRatingButton = (value: number) => {
    setRatingValue(Number(value));
  };

  const handleSubmit = () => {
    setIsRatingCardDisplayed(false);
  };

  return (
    <main className="main">
      <div className="container">
        {isRatingCardDisplayed ? (
          <RatingCard
            ratingValue={ratingValue}
            handleButton={handleRatingButton}
            handleSubmit={handleSubmit}
          />
        ) : (
          <SummaryCard ratingValue={ratingValue} />
        )}
      </div>
    </main>
  );
}

export default App;
