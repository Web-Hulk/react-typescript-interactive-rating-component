import iconStar from "../../../assets/icon-star.svg";

export const RatingCard = () => {
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
        <button className="rate-btn">1</button>
        <button className="rate-btn">2</button>
        <button className="rate-btn">3</button>
        <button className="rate-btn">4</button>
        <button className="rate-btn">5</button>
      </div>

      <button className="submit-btn">Submit</button>
    </>
  );
};
