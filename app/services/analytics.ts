const trackEvent = (evt: string) => {
  if (typeof document !== "undefined") {
    window.plausible(evt);
    console.log(evt);
  }
};

export default trackEvent;
