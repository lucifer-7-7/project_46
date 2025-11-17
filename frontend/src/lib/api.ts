"use client";

// Minimal API client with token helpers and automatic refresh
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";

export function getAccessToken() {
  return typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
}

export function getRefreshToken() {
  return typeof window !== "undefined" ? localStorage.getItem("refresh_token") : null;
}

export function setTokens({ access, refresh }: { access: string; refresh: string }) {
  if (typeof window !== "undefined") {
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
  }
}

export function clearTokens() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
}

async function refreshToken(): Promise<boolean> {
  const refresh = getRefreshToken();
  if (!refresh) return false;
  try {
    const res = await fetch(`${API_BASE}/api/auth/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });
    if (!res.ok) return false;
    const data = await res.json();
    if (data.access) {
      setTokens({ access: data.access, refresh: data.refresh || refresh });
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}

export async function fetchWithAuth(input: RequestInfo | URL, init: RequestInit = {}) {
  const token = getAccessToken();
  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string> || {}),
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  let res = await fetch(input, { ...init, headers });
  if (res.status === 401) {
    // try refresh once
    const ok = await refreshToken();
    if (ok) {
      const newToken = getAccessToken();
      if (newToken) headers["Authorization"] = `Bearer ${newToken}`;
      res = await fetch(input, { ...init, headers });
    }
  }
  return res;
}
