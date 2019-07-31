package security;

import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
// class for filter auth
public class AuthenticationFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    // filtering process
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        // get http request and response
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpServletResponse httpServletResponse = (HttpServletResponse) servletResponse;

        // set isAuthenticated default false
        boolean isAuthenticated = false;
        // get all cookies from request
        Cookie[] cookies = httpServletRequest.getCookies();
        // check cookies
        if (cookies != null) {
            for (Cookie cokie: cookies) {
                // check cookie user and set isAuthenticated is true if there is user cookie
                if (cokie.getName().equals("user")){
                    isAuthenticated = true;
                }
            }
        }

        // check request url
        if (httpServletRequest.getRequestURL().toString().endsWith("/login")) {

            if (isAuthenticated) {
                // redirect to page siswa if user is loged in
                httpServletResponse.sendRedirect("/admin/siswa");
            } else {
                filterChain.doFilter(servletRequest, servletResponse);
            }

        } else {

            if (isAuthenticated) {
                // allow acces siswa page or other, if user is loged in
                filterChain.doFilter(servletRequest, servletResponse);
            } else {
                httpServletResponse.sendRedirect("/login");
            }
        }

    }


    @Override
    public void destroy() {

    }

}
