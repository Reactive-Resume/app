import { CookieOptions } from "express";

export const getCookieOptions = (grantType: "access" | "refresh"): CookieOptions => {
  // Options For Access Token
  if (grantType === "access") {
    return {
      httpOnly: true,
      sameSite: "none",
      secure:
        (process.env.PUBLIC_URL ?? "").includes("https://") ||
        process.env.PUBLIC_URL?.startsWith("http://localhost"),
      expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes from now
    };
  }

  // Options For Refresh Token
  return {
    httpOnly: true,
    sameSite: "none",
    secure:
      (process.env.PUBLIC_URL ?? "").includes("https://") ||
      process.env.PUBLIC_URL?.startsWith("http://localhost"),
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days from now
  };
};
