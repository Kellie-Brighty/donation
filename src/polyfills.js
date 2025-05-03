import { Buffer } from "buffer";

// Polyfill for Web3Modal in browser environments
if (typeof window !== "undefined") {
  window.global = window;
  window.Buffer = Buffer;
}

export {};
