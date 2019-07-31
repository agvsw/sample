package security;

import javax.servlet.*;
import java.io.IOException;

public class JspFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        RequestDispatcher view = servletRequest.getRequestDispatcher("/WEB-INF/errors/403.jsp");
        view.forward(servletRequest, servletResponse);
    }

}
