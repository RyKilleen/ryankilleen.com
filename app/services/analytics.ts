const trackEvent = (evt: string) => {
  if (typeof document !== "undefined") {
    window.plausible(evt, {
      callback: () => {
        console.log(evt);
      },
    });
  }
};

export default trackEvent;
