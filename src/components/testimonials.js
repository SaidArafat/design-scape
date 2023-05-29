import React, { useEffect } from "react";
import SectionTitle from "./common/sectionTitle";
import Carousel from "./common/carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeedbacks } from "./../store/slices/feedbackSlice";
import StatusIndicator from "./common/statusIndicator";

const Testimonials = () => {
  const { feedbacks, isLoading, error } = useSelector(
    (state) => state.feedbacks
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);

  return (
    <StatusIndicator isLoading={isLoading} error={error}>
      <section className="text-center py-5">
        <SectionTitle title="what people say" />
        <Carousel slides={feedbacks} />
      </section>
    </StatusIndicator>
  );
};

export default Testimonials;
