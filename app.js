const routes = {
    "/login": { 
        templateId: "login",
        title: "Login - Bank App",
        onNavigate: () => {}
    },
    "/dashboard": { 
        templateId: "dashboard",
        title: "Dashboard - Bank App",
        onNavigate: () => console.log ("Dashboard is shown")
    },
    "/profile": { 
        templateId: "profile",
        title: "Profile - Bank App",
        onNavigate: () => console.log("Profile page is displayed")
    }
  };
  
  function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];
  
    if (!route) {
      return navigate("/login");
    }
  
    document.title = route.title || "Bank App";

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById("app");
  
    app.innerHTML = "";
    app.appendChild(view);

    if (typeof route.onNavigate === "function") {
        route.onNavigate ();
    }
  }
  
  function navigate(path) {
    window.history.pushState({}, path, path);
    updateRoute();
  }
  
  function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
  }
  
  window.onpopstate = () => updateRoute();
  updateRoute();  