package controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
/*
* @authored by "Ikhsan Fauji"
* This controoller just for default root web page (home page)
*/

@WebServlet(name = "Home", urlPatterns = "/")
public class HomeController extends HttpServlet {

    public HomeController() {
        super();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        RequestDispatcher view = req.getRequestDispatcher("home.jsp");
        view.forward(req, resp);
    }

}
