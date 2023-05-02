import "./rating.css";

// img import
import star from "../../assets/images/icon-star.svg";
import thankYou from "../../assets/images/illustration-thank-you.svg";

// react icon
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useState } from "react";

const Rating = () => {
  const starCount = [1, 2, 3, 4, 5];

  const [submitted, setSubmitted] = useState<boolean>(false);

  const [activeRating, setActiveRating] = useState<number>();

  const handleClickRating = (rating: number) => {
    setActiveRating(rating);
  };

  const handleSubmitRating = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);
  };

  const handleGoBackForm = () => {
    setSubmitted(false);
  };

  return submitted === false ? (
    <form onSubmit={handleSubmitRating} className="container">
      <img src={star} alt="" className="star" />

      <h1 className="title">How did we do ? </h1>

      <p className="description">
        Please let us know how we did with you support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="grp-btn">
        {starCount.map((star, index) => (
          <button
            type="button"
            key={index}
            className={`rating ${activeRating === star ? "active" : ""}`}
            onClick={() => handleClickRating(star)}
          >
            {star}
          </button>
        ))}
      </div>
      <button className="submit">Submit</button>
    </form>
  ) : (
    <div className="container submitted">
      <div className="submitted__close" onClick={() => handleGoBackForm()}>
        <AiOutlineCloseCircle />
      </div>
      <img src={thankYou} alt="" className="submitted__img" />
      <span className="submitted__subtitle">
        You selected {activeRating} out of {starCount.length}
      </span>
      <h1 className="title">Thank you!</h1>
      <p className="description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Rating;
