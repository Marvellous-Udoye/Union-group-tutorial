// "use client";

// import React, { useCallback, useEffect, useState } from 'react';
// import { EmblaCarouselType } from 'embla-carousel-react';

// // Type definition for the custom hook's return type
// interface UsePrevNextButtonsReturnType {
//   prevBtnDisabled: boolean;
//   nextBtnDisabled: boolean;
//   onPrevButtonClick: () => void;
//   onNextButtonClick: () => void;
// }

// // Custom hook to handle prev/next buttons
// export const usePrevNextButtons = (
//   emblaApi: EmblaCarouselType | undefined
// ): UsePrevNextButtonsReturnType => {
//   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
//   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

//   const onPrevButtonClick = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const onNextButtonClick = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
//     setPrevBtnDisabled(!emblaApi.canScrollPrev());
//     setNextBtnDisabled(!emblaApi.canScrollNext());
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;

//     onSelect(emblaApi);
//     emblaApi.on('reInit', onSelect);
//     emblaApi.on('select', onSelect);

//     return () => {
//       emblaApi.off('reInit', onSelect);
//       emblaApi.off('select', onSelect);
//     };
//   }, [emblaApi, onSelect]);

//   return {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   };
// };

// // Types for button props
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children?: React.ReactNode;
// }

// // PrevButton component
// export const PrevButton: React.FC<ButtonProps> = (props) => {
//   const { children, ...restProps } = props;
//   return (
//     <button className="embla__button embla__button--prev" type="button" {...restProps}>
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
//         />
//       </svg>
//       {children}
//     </button>
//   );
// };

// // NextButton component
// export const NextButton: React.FC<ButtonProps> = (props) => {
//   const { children, ...restProps } = props;
//   return (
//     <button className="embla__button embla__button--next" type="button" {...restProps}>
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
//         />
//       </svg>
//       {children}
//     </button>
//   );
// };


// "use client";

// import React, { useCallback, useEffect, useState } from 'react';
// import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';

// // Type definition for the custom hook's return type
// interface UsePrevNextButtonsReturnType {
//   prevBtnDisabled: boolean;
//   nextBtnDisabled: boolean;
//   onPrevButtonClick: () => void;
//   onNextButtonClick: () => void;
// }

// // Custom hook to handle prev/next buttons
// export const usePrevNextButtons = (
//   emblaApi: UseEmblaCarouselType[1] | undefined
// ): UsePrevNextButtonsReturnType => {
//   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
//   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

//   const onPrevButtonClick = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev();
//   }, [emblaApi]);

//   const onNextButtonClick = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext();
//   }, [emblaApi]);

//   const onSelect = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
//     setPrevBtnDisabled(!emblaApi.canScrollPrev());
//     setNextBtnDisabled(!emblaApi.canScrollNext());
//   }, []);

//   useEffect(() => {
//     if (!emblaApi) return;

//     onSelect(emblaApi);
//     emblaApi.on('reInit', onSelect);
//     emblaApi.on('select', onSelect);

//     return () => {
//       emblaApi.off('reInit', onSelect);
//       emblaApi.off('select', onSelect);
//     };
//   }, [emblaApi, onSelect]);

//   return {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   };
// };

// // Types for button props
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children?: React.ReactNode;
// }

// // PrevButton component
// export const PrevButton: React.FC<ButtonProps> = (props) => {
//   const { children, ...restProps } = props;
//   return (
//     <button className="embla__button embla__button--prev" type="button" {...restProps}>
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
//         />
//       </svg>
//       {children}
//     </button>
//   );
// };

// // NextButton component
// export const NextButton: React.FC<ButtonProps> = (props) => {
//   const { children, ...restProps } = props;
//   return (
//     <button className="embla__button embla__button--next" type="button" {...restProps}>
//       <svg className="embla__button__svg" viewBox="0 0 532 532">
//         <path
//           fill="currentColor"
//           d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
//         />
//       </svg>
//       {children}
//     </button>
//   );
// };