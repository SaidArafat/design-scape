import React, { useEffect } from "react";
import SectionTitle from "./common/sectionTitle";
import PricingCardContainer from "./common/pricingCardContainer";
import StatusIndicator from "./common/statusIndicator";
import { useDispatch, useSelector } from "react-redux";
import { fetchPrices } from "./../store/slices/priceSlice";

const Pricing = () => {
  const { prices, isLoading, error } = useSelector((state) => state.prices);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPrices());
  }, [dispatch]);

  return (
    <StatusIndicator isLoading={isLoading} error={error}>
      <section className="py-5 text-center bg-light">
        <SectionTitle title="our pricing" />
        <PricingCardContainer cards={prices} />
      </section>
    </StatusIndicator>
  );
};

export default Pricing;
