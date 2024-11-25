import { CookieOptions } from "express";

export const getCookieOptions = (
  grantType: "access" | "refresh",
  isAdminRequest = false,
): CookieOptions => {
  // Options For Access Token
  if (grantType === "access") {
    return {
      domain: isAdminRequest ? (process.env.CMS_URL ?? "https://localhost:8000") : undefined,
      httpOnly: true,
      sameSite: "none",
      secure: (process.env.PUBLIC_URL ?? "").includes("https://"),
      expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes from now
    };
  }

  // Options For Refresh Token
  return {
    domain: isAdminRequest ? (process.env.CMS_URL ?? "https://localhost:8000") : undefined,
    httpOnly: true,
    sameSite: "none",
    secure: (process.env.PUBLIC_URL ?? "").includes("https://"),
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2), // 2 days from now
  };
};
