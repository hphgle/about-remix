import type { LinksFunction, LoaderFunctionArgs, } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link, 
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import appStylesHref from "./app.css?url";
import { createEmptyContact, getContacts } from "./data";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Phuong's Page</h1>
          <nav>
          <NavLink className="achievement" to="/">Achievement</NavLink>
          <NavLink className="about" to="/about">About</NavLink>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </body>
    </html>
  );
}
