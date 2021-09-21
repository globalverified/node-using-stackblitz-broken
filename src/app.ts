import express from "express";
import session from "express-session";

// Import authorization middleware
import userAuth from "./middleware/auth";
import appRoutes from "./routes/app";

const app = express();

// Parsing request body data as json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Adding express-session middleware
app.use(
  session({ secret: "session_secret", saveUninitialized: true, resave: true })
);

const PORT = process.env.PORT || 3000;

// Configure routes
app.use("/", appRoutes);
app.use(["/api/proxy", "/pub/proxy"], userAuth);

// Start listening server
app.listen(PORT, (req) => {
  console.log(`Server is running on PORT ${PORT}.`);
});
