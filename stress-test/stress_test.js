import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  stages: [
    { duration: "2m", target: 200 },   // Ramp up to 200 users
    { duration: "3m", target: 500 },   // Ramp up to 500 users
    { duration: "5m", target: 1000 },  // Peak load at 1000 users
    { duration: "3m", target: 500 },   // Ramp down to 500 users
    { duration: "2m", target: 0 },     // Ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ["p(95)<2000"], // 95% of requests should be under 2s
    http_req_failed: ["rate<0.01"],    // Less than 1% of requests fail
  },
};

export default function () {
  const res = http.get("https://teamvinidra.vercel.app/");
  check(res, {
    "status is 200": (r) => r.status === 200,
    "response < 2s": (r) => r.timings.duration < 2000,
  });
  sleep(1);
}