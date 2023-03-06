// Ignore this file, just for metrics
import mixpanel from "mixpanel-browser";

export function trackPianoLoaded() {
  if (_isProd()) {
    mixpanel.track("Piano loaded");
  }
}

export function trackKeyDown(note) {
  if (_isProd()) {
    mixpanel.track("Key down", {
      pianoKey: note,
    });
  }
}

export function initMixpanel(note) {
  if (_isProd()) {
    mixpanel.init(process.env.REACT_APP_MIXPANEL_ID);
  }
}

function _isProd() {
  return process.env.NODE_ENV === "production";
}
