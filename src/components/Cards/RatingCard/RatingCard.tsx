import iconStar from "../../../assets/icon-star.svg";

type RatingCardType = {
  ratingValue: number;
  handleButton: (value: number) => void;
  handleSubmit: () => void;
};

const RATING_BUTTONS = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];

export const RatingCard = ({
  ratingValue,
  handleButton,
  handleSubmit,
}: RatingCardType) => {
  return (
    <>
      <div className="star-container">
        <img src={iconStar} alt="Icon star" className="icon-star-image" />
      </div>

      <h1 className="title">How did we do?</h1>

      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rate-buttons-container">
        {RATING_BUTTONS.map(({ value }) => (
          <button
            onClick={() => handleButton(value)}
            className={`rate-btn ${ratingValue === value && "active"}`}
          >
            {value}
          </button>
        ))}
      </div>

      <button onClick={handleSubmit} className="submit-btn">
        Submit
      </button>
    </>
  );
};
