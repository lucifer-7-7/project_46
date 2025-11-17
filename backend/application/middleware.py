from django.utils.deprecation import MiddlewareMixin


class SecurityHeadersMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        # Prevent MIME-type sniffing
        response.setdefault("X-Content-Type-Options", "nosniff")
        # Clickjacking protection
        response.setdefault("X-Frame-Options", "DENY")
        # XSS protection (older browsers)
        response.setdefault("X-XSS-Protection", "1; mode=block")
        # Referrer policy
        response.setdefault("Referrer-Policy", "strict-origin-when-cross-origin")
        # Content Security Policy - restrict to same origin and trusted domains
        csp = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data:; "
            "connect-src 'self' http://localhost:8000 http://127.0.0.1:8000;"
        )
        response.setdefault("Content-Security-Policy", csp)
        # Permissions policy (formerly Feature-Policy)
        response.setdefault("Permissions-Policy", "geolocation=(), microphone=()")
        return response
