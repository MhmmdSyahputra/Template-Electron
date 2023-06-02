import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  style={{ fontSize: '0.9em' }}
                  to="/"
                  className="nav-link active"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  style={{ fontSize: '0.9em' }}
                  to="/Profil"
                  className="nav-link active"
                >
                  Profil
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  style={{ fontSize: '0.9em' }}
                  to="/About"
                  className="nav-link active"
                >
                  About
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
