const trackEvent = (evtName: string) => {
  if (typeof document !== "undefined") {
    window.plausible(evtName, {
      callback: () => {
        console.log(evtName);
      },
    });
  }
};

export const trackOutboundLink = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  const href = e.currentTarget.href;
  window.plausible("Outbound Click", {
    callback: () => console.log(`Outbound Click: ${href}`),
    props: {
      href,
    },
  });
};

export default trackEvent;
