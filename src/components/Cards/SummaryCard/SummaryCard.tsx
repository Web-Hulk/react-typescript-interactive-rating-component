import illustrationThankYou from "../../../assets/illustration-thank-you.svg";

export const SummaryCard = () => {
  return (
    <>
      <div className="phone-container">
        <img
          src={illustrationThankYou}
          alt="Icon star"
          className="phone-image"
        />
      </div>

      <div className="selected-rate-container">You selected 4 out 5</div>

      <h1 className="title summary">Thank you!</h1>

      <p className="description summary">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch.
      </p>
    </>
  );
};
