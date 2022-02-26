const trackEvent = (evtName: string) => {
  if (typeof document !== "undefined") {
    window.plausible(evtName);
  }
};

export const trackOutboundLink = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
  const href = e.currentTarget.href;
  window.plausible("Outbound Click", {
    props: {
      href,
    },
  });
};

export default trackEvent;
