package controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
/*
 * @authored by "Ikhsan Fauji"
 * This controoller is used to access login page using url pattern /login
 */
@WebServlet(name = "Login", urlPatterns = "/login")
public class LoginController extends HttpServlet {

    public LoginController() {
        super();
    }

    // if user access login page
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // set page login.jsp
        RequestDispatcher view = req.getRequestDispatcher("/WEB-INF/login.jsp");
        view.forward(req, resp);
    }

    // if the user enters login process using login form
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // get user input
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        // check user input
        if (username.equals("admin") && password.equals("admin")){
            // set new cookie if login success
            Cookie cookie = new Cookie("user", username);
            resp.addCookie(cookie);
            // redirect to siswa page if login success
            resp.sendRedirect("/admin/siswa");
        } else {
            resp.sendRedirect("login");
        }
    }
}
