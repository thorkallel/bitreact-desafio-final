import React, { useCallback } from "react";

export const useChangePrice = () => {
  const formatCurrency = useCallback(
    (amount, currencyCode, locale = "en-US") => {
      if (typeof amount !== "number" || isNaN(amount)) {
        return null;
      }

      try {
        const formattedAmount = new Intl.NumberFormat(locale, {
          style: "currency",
          currency: currencyCode,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(amount);
        return formattedAmount;
      } catch (error) {
        console.error("Error formatting currency:", error);
        return null;
      }
    },
    []
  );

  return formatCurrency;
};
